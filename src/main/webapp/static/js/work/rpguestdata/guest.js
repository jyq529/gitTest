//var query_today;//当前时间-格式：2015-02
/*打开页面自动加载全部列表*/
$(document).ready(function() {
	setCreateDate();
	refreshRpGuestData();
	// 设置柱状图
	//setCharts();
});
//给日期输入框赋当前日期 格式：2015-01-29 11:49:00
function setCreateDate(){
	var date = new Date();
	//query_today = ""+date.getFullYear() + "-" + addZero(date.getMonth()+1);
	$("#guest_queryTime").val(""+date.getFullYear() + "-" + addZero(date.getMonth()+1));
}
/*重置*/
function guestResetform(){
	setCreateDate();
	//query_today = "";//姓名
}
/*条件查询*/
function guestQueryConditions(){
	refreshRpGuestData();
	
}
/*组装X轴数据*/
function arrX(data){
	var arrX = new Array();//将X轴:某日,存入数组中
	var x = data[0];//当前只有一条数据
	for(var i in x) {
		arrX.push([i]+'日');
		//arrX.push([i]);
	}
	return arrX;
} 
/*组装Y轴数据*/
function arrY(data){
	var arrY = new Array();//将Y轴:某日的流量值,存入数组中
	var x = data[0];//当前只有一条数据
	for(var i in x) {
		arrY.push([x[i]]);
		/*if(x[i] == null || x[i] == ''){
			arrY.push([0]);
		}else{
			arrY.push([x[i]]);
		}*/
	}
	return arrY;
} 
//var tdWidth = "34px";//定义列表表头的宽度
/*加载列表数据*/
function refreshRpGuestData(page,query_flag){
	/*if(query_flag){
		query_today = $("#flow_queryTime").val();//查询时间
	}*/
	if(($("#guest_queryTime").val()=="")||($("#guest_queryTime").val()==null)){
		showMsg({
			msg : "月份不能为空！",
			type : "error"
		});
		return;
	}
	var rows = com_page_account; //暂定每页显示10行
	var requestParams = { //发送参数
			page : page ==null?1:page,//当前页
			rows : rows,//每页显示的记录数
			queryFlag :'guest',
			queryTime: $("#guest_queryTime").val(),//当前时间
			
	};
	$.ajax({
		type : 'POST',
		url : ctx+"/work/trpguestdata/queryRpGuestData",
		data : requestParams,
		async : true,
		success : function(result) {
			//{rows=[{1=0.0, 2=101.0, 3=0.0, 4=201.0, 5=101.0, 6=101.0, 7=402.0, 8=401.0, 9=1102.0, 10=0.0, 11=0.0, 12=0.0, 13=0.0, 14=0.0, 15=0.0, 16=0.0, 17=0.0, 18=0.0, 19=0.0, 20=0.0, 21=0.0, 22=0.0, 23=0.0, 24=0.0, 25=0.0, 26=0.0, 27=0.0, 28=0.0}]}
			var query_data = result.data;//后台的响应数据
			var query_list = query_data.rows;//响应数据中的记录数据
			$("#datagrid").empty();//清空表格-数据
			var arrX = this.arrX(query_list);//获取选择月份的日-即横轴的值
			var arrY = this.arrY(query_list);//获取每日的流量值-即纵轴的值
			//获取当月的日,循环生成动态的列表表头
			$.each(arrX,function(index,value){
				$("<col style=\"width:60px;\"/>").appendTo($("#datagrid"));
			});
			var thB = $("<thead></thead>");
			thB.appendTo($("#datagrid"));
			var thrB = $("<tr></tr>");
			thrB.appendTo(thB);
			
			//var arrX = this.arrX(query_list);//获取选择月份的日
			$.each(arrX,function(index,value){
				$("<th>" + value + "</th>").appendTo(thrB);
			});
			var toB = $("<tbody id='guest_data_tbody'></tbody>");//tbody
			toB.appendTo($("#datagrid"));
			var trB = $("<tr></tr>");//tbody中增加行-显示每列的数据
			trB.appendTo($("#guest_data_tbody"));
			if(!jQuery.isEmptyObject(query_list) && query_list.length > 0){
				$.each(arrY,function(index,value){
					$("<td style='text-align:center;'><div class='ellipsis' title='"+value+"'>" + value + "</div></td>").appendTo(trB);
					/*if(value == null || value == ''){//此月数据不存在时，每天显示0
						$("<td style='text-align:center;'>" + 0 + "</td>").appendTo(trB);
					}else{
						$("<td style='text-align:center;'>" + value + "</td>").appendTo(trB);
					}*/
				});
				
				var obj = {};
				obj.data = arrY;//Y轴数据
				obj.xAxis = arrX;//X轴数据
				setCharts(obj);
			}else{//未查询出任何数据时,每天显示0
				$.each(arrX,function(index,value){
					$("<td style='text-align:center;'>" + 0 + "</td>").appendTo(trB);
				});
			}
			var trB2 = $("<tr></tr>");//tbody中增加行-显示数据单位说明
			trB2.appendTo($("#guest_data_tbody"));
			$("<td><div style=\"width:50px;\">单位:人</div></td>").appendTo(trB2);
		},
		error : function() {
		}
	});
}
// 设置柱状图
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('main')); 
            
            var option = {
            	    tooltip : {
            	        show: true,
            	        trigger: 'item'
            	    },
            	    legend: {
            	        data:['访客(人)']
            	    },
            	    toolbox: {
            	        show : true,
            	        feature : {
            	            /*mark : {show: true},
            	            dataView : {show: true, readOnly: false},
            	            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            	            restore : {show: true},
            	            saveAsImage : {show: true}*/
            	        	saveAsImage : {show: true}
            	        }
            	    },
            	    calculable : true,
            	    xAxis : [
            	        {
            	            type : 'category',
            	            data : obj.xAxis  //纵轴数据
            	        }
            	    ],
            	    yAxis : [
            	        {
            	            type : 'value',
            	            splitArea : {show : true}
            	        }
            	    ],
            	    series : [
            	        /*{
            	            name:'访客',
            	            type:'bar',
            	            itemStyle: {        // 系列级个性化样式，纵向渐变填充
            	                normal: {
            	                    borderColor:'red',
            	                    color : (function (){
            	                        var zrColor = require('zrender/tool/color');
            	                        return zrColor.getLinearGradient(
            	                            0, 400, 0, 300,
            	                            [[0, 'green'],[1, 'yellow']]
            	                        )
            	                    })()
            	                },
            	                emphasis: {
            	                    borderWidth: 5,
            	                    borderColor:'green',
            	                    color: (function (){
            	                        var zrColor = require('zrender/tool/color');
            	                        return zrColor.getLinearGradient(
            	                            0, 400, 0, 300,
            	                            [[0, 'red'],[1, 'orange']]
            	                        )
            	                    })(),
            	                    label : {
            	                        show : true,
            	                        position : 'top',
            	                        formatter : "{a} {b} {c}",
            	                        textStyle : {
            	                            color: 'blue'
            	                        }
            	                    }
            	                }
            	            },
            	            data:[220, 232, 101, 234, 190, 330, 210]
            	        },
            	        {
            	            name:'联盟广告',
            	            type:'bar',
            	            stack: '总量',
            	            data:[120, '-', 451, 134, 190, 230, 110]
            	        },*/
            	        {
            	            name:'访客(人)',
            	            type:'bar',
            	            stack: '总量',
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
            	            /*data:[
            	                320, 332, 100, 334, 500, 330, 320
            	            ]*/
            	            //横轴数据
            	            data:obj.data
            	        }/*,
            	        {
            	            name:'搜索引擎',
            	            type:'bar',
            	            barWidth: 40,                   // 系列级个性化，柱形宽度
            	            itemStyle: {
            	                normal: {                   // 系列级个性化，横向渐变填充
            	                    borderRadius: 5,
            	                    color : (function (){
            	                        var zrColor = require('zrender/tool/color');
            	                        return zrColor.getLinearGradient(
            	                            0, 0, 1000, 0,
            	                            [[0, 'rgba(30,144,255,0.8)'],[1, 'rgba(138,43,226,0.8)']]
            	                        )
            	                    })(),
            	                    label : {
            	                        show : true,
            	                        textStyle : {
            	                            fontSize : '20',
            	                            fontFamily : '微软雅黑',
            	                            fontWeight : 'bold'
            	                        }
            	                    }
            	                }
            	            },
            	            data:[
            	                620, 732, 
            	                {
            	                    value: 701,
            	                    itemStyle : { normal: {label : {position: 'inside'}}}
            	                },
            	                734, 890, 
            	                {
            	                    value: 930,
            	                    itemStyle : { normal: {label : {show: false}}}
            	                },
            	                820
            	            ],
            	            markPoint : {
            	                data : [
            	                    {name : '最高', value : 930, xAxis: '周六', yAxis: 930, symbolSize:14}
            	                ]
            	            },
            	            markLine : {
            	                data : [
            	                    [
            	                        {type : 'average', name : '平均值'},
            	                        {type : 'max'},
            	                        {type : 'min'}
            	                    ]
            	                ]
            	            }
            	        }*/
            	    ]
            	};
    
            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
    );
}