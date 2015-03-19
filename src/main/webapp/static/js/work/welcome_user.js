
/*打开页面自动加载全部列表*/
$(document).ready(function() {
	init();
	setInterval(init, 150000); // 150秒定时刷新
});

function init() {
	$.ajax({
		type : "POST",
		url : ctx+"/work/welcome/getClientEqCountStatus",
		success : function(dataS) {
			if(dataS.valid){
				//console.log(dataS);
				$("#static_num1").html(dataS.data.listOnlineNum); // 当前访客在线数
				$("#static_num2").html(dataS.data.guestNum); // 一周访客总数
				$("#static_num3").html(changeTwoDecimal(dataS.data.flowNum) + "MB"); // 一周流量累计
				$("#static_num4").html(dataS.data.eqOnlineNum + "/" + dataS.data.eqTotalNum); // 当前设备在线情况
				var obj1 = chartData(dataS.data.weekGuestList);
				obj1.id="main";
				obj1.tip="访客数(人)";
				setBarCharts1(obj1);
				
				var obj2 = chartData(dataS.data.weekFlowList);
				obj2.id="main1";
				obj2.tip="流量(MB)";
				setBarCharts2(obj2);
			}else{
				alert(dataS.msg);
			}
		},
		error : function(request) {
		}
	});
}

// 设置柱状图
function setBarCharts1(obj) {

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
            var myChart = ec.init(document.getElementById(obj.id)); 
            
            var option = {
            	    tooltip : {
            	        show: true,
            	        trigger: 'item'
            	    },
            	    legend: {
            	        data:[obj.tip]
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
            	            name:obj.tip,
            	            type:'bar',
            	            stack: '总数',
            	            itemStyle: {                // 系列级个性化
            	                normal: {
            	                    borderWidth: 6,
            	                    borderColor:'tomato',
            	                    color: "#8BCC4C"
            	                },
            	                emphasis: {
            	                    borderColor:"#8BCC4C",
            	                    color: "#5ACF00"
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
// 设置柱状图
function setBarCharts2(obj) {

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
            var myChart = ec.init(document.getElementById(obj.id)); 
            
            var option = {
            	    tooltip : {
            	        show: true,
            	        trigger: 'item'
            	    },
            	    legend: {
            	        data:[obj.tip]
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
            	            name:obj.tip,
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
		arrY.push(data[i].num);
	}
	chartData.arrX = arrX;
	chartData.arrY = arrY;
	return chartData;
} 

