
/*打开页面自动加载全部列表*/
$(document).ready(function() {
	init();
	setInterval(init, 150000); // 150秒定时刷新
});

function init() {
	$.ajax({
		type : "POST",
		url : ctx+"/work/welcome/getEqCountStatus",
		success : function(dataS) {
			if(dataS.valid){
				$("#static_num1").html(dataS.data.current.onlineNum); // 设备当前在线数
				$("#static_num2").html(dataS.data.current.totalNum); // 设备总数
				$("#static_num3").html(dataS.data.guestNum); // 一周访客总数
				$("#static_num4").html(changeTwoDecimal(dataS.data.flowNum) + "MB"); // 一周流量统计
				var obj = {};
				obj.data = [
			                {value:dataS.data.current.onlineNum, name:'在线数量(台)'},
			                {value:dataS.data.current.totalNum - dataS.data.current.onlineNum, name:'离线数量(台)'}
			                ];
				obj.xAxis = ["在线数量(台)", "离线数量(台)"];//X轴数据
				obj.name = "设备当前状态";
				setCharts(obj);
				
				var obj2 = chartData(dataS.data.week);
				setBarCharts(obj2);
			}else{
        		alert(dataS.msg);
			}
			
		},
		error : function(request) {
		}
	});
}
function setCharts(obj) {

    // 路径配置
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });

    // 使用
    require(
        [
            'echarts',
            'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('main')); 
            
			var option = {
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient : 'vertical',
				        x : 'left',
				        data:obj.xAxis
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    series : [
				        {
				            name:obj.name,
				            type:'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:obj.data
				        }
				    ]
				};
    
            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
    );
}

// 设置柱状图
function setBarCharts(obj) {

    // 路径配置
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });

    // 使用
    require(
        [
            'echarts',
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('main1')); 
            
            var option = {
            	    tooltip : {
            	        show: true,
            	        trigger: 'item'
            	    },
            	    legend: {
            	        data:['在线数量(台)']
            	    },
            	    toolbox: {
            	        show : true,
            	        feature : {
            	            /*mark : {show: true},
            	            dataView : {show: true, readOnly: false},
            	            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            	            restore : {show: true},*/
            	            saveAsImage : {show: true}
            	        }
            	    },
            	    calculable : true,
            	    xAxis : [
            	        {
            	            type : 'category',
            	            data : obj.arrX,  //纵轴数据
            	            //axisLabel : {rotate: 60}
            	        }
            	    ],
            	    yAxis : [
            	        {
            	            type : 'value',
            	            splitArea : {show : true}
            	        }
            	    ],
            	    series : [
            	        {
            	            name:'在线数量(台)',
            	            type:'bar',
            	            stack: '总数',
            	            itemStyle: {                // 系列级个性化
            	                normal: {
            	                    borderWidth: 6,
            	                    borderColor:'tomato',
            	                    color: com_bar_border_color
            	                },
            	                emphasis: {
            	                    borderColor:com_bar_border_color,
            	                    color: com_bar_color
            	                }
            	            },
            	            //横轴数据
            	            data:obj.arrY
            	        }
            	    ]
            	};
    
            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
    );
}
    
/*组装数据*/
function chartData(data){
	var chartData = {};
	var arrX = new Array();//将X轴:某日,存入数组中
	var arrY = new Array();//将Y轴:在线数,存入数组中
	var len = data.length;
	for(var i = 0; i < len; i++) {
		arrX.push(data[i].date);
		arrY.push(data[i].sumNum);
	}
	chartData.arrX = arrX;
	chartData.arrY = arrY;
	return chartData;
} 