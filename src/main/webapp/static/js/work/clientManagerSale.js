var query_managerName=""; //用于存储搜索条件的全局变量
var query_managerTel=""; //用于存储搜索条件的全局变量
var query_workNo=""; //用于存储搜索条件的全局变量
var query_monthTime="";//用于存储搜索条件的全局变量

function setCurrentDate(){
	var date = new Date();
	$("#monthTime").val(""+date.getFullYear() + "-" + addZero(date.getMonth()+1));
}

/*打开页面自动加载全部列表*/
$(document).ready(function() {
	setCurrentDate();
	refreshClientManagerSale();
});




/*重置*/
function resetform(){
	$("#managerName").val("");
	$("#managerTel").val("");
	$("#workNo").val("");
	setCurrentDate();
}



/*刷新分页列表*/
function refreshClientManagerSale(page,query_flag) {
	common.showLoading("clientManagerSale_tbody", "table", 6); // 显示加载中必加
	if (query_flag) {
		query_managerName = $("#managerName").val();
		query_managerTel = $("#managerTel").val();
		query_workNo = $("#workNo").val();		
		
	}
	query_monthTime = $("#monthTime").val();
	var rows = com_page_account; 

	var requestParams = { //发送参数
			page : page ==null?1:page,
			rows : rows,
			managerName : query_managerName,
			managerTel : query_managerTel,
			workNo: query_workNo,
			monthTime: query_monthTime
	};

	$.ajax({
		type : 'POST',
		url : "queryClientManagerSale",
		data : requestParams,
		async : true,
		success : function(data) {
			common_set_page_data(data.data, requestParams.page); // 分页设置必加
			if (data.data.rows.length > 0) {
				var alterdata = "";
				for (var i = 0; i < data.data.rows.length; i++) {
					alterdata+="<tr id="+data.data.rows[i].id+"><td align='center'>"+data.data.rows[i].managerName+"</td>"
					 		+"<td align='center'>"+data.data.rows[i].managerTel+"</td>" 						
					 		+"<td align='center'>"+data.data.rows[i].workNo+"</td>" 					
					 		+"<td align='center'>"+(data.data.rows[i].area == null ? "":data.data.rows[i].area)+"</td>"
					 		+"<td align='center'>"+data.data.rows[i].saleNum+"</td>"
					 		//+"<td align='center'><button type='button' class='btn btn-warning' id='detailButton' onclick='detailManager("+ data.data.rows[i].id +")'>查看详情</button></td>"
					 		+"<td align='center'><input value='查看详情' style='color:#EB6202;border:solid 1px #EB6202;border-radius:2px;' " 
					 		+" type='button' id='detailButton' onclick='detailManager("+ data.data.rows[i].id +")'/></td>"
					 		+"</tr>";
				}
				$("#clientManagerSale_tbody").html(alterdata);
			} else {
				$("#clientManagerSale_tbody").html("<tr><td colspan='6' align='center'>未查询出符合条件的数据！</td></tr>");
			}
			paging({
				id : "clientManagerSale_page",
				currentPage : requestParams.page,
				totalPages : data.data.pageCount,
				callback : function(page) {
					refreshClientManagerSale(page);
				}
			});
		}
	})
	
//	$.post(
//			"queryClientManagerSale",
//			requestParams,
//			function(data) {
//				if (data.data.rows.length > 0) {
//					var alterdata = "";
//					for (var i = 0; i < data.data.rows.length; i++) {
//						alterdata+="<tr id="+data.data.rows[i].id+"><td align='center'>"+data.data.rows[i].managerName+"</td>"
//						 		+"<td align='center'>"+data.data.rows[i].managerTel+"</td>" 						
//						 		+"<td align='center'>"+data.data.rows[i].workNo+"</td>" 					
//						 		+"<td align='center'>"+(data.data.rows[i].area == null ? "":data.data.rows[i].area)+"</td>"
//						 		+"<td align='center'>"+data.data.rows[i].saleNum+"</td>"
//						 		//+"<td align='center'><button type='button' class='btn btn-warning' id='detailButton' onclick='detailManager("+ data.data.rows[i].id +")'>查看详情</button></td>"
//						 		+"<td align='center'><input value='查看详情' style='color:#EB6202;border:solid 1px #EB6202;border-radius:2px;' " 
//						 		+" type='button' id='detailButton' onclick='detailManager("+ data.data.rows[i].id +")'/></td>"
//						 		+"</tr>";
//					}
//					$("#clientManagerSale_tbody").html(alterdata);
//				} else {
//					$("#clientManagerSale_tbody").html("<tr><td colspan='5' align='center'>未查询出符合条件的数据！</td></tr>");
//				}
//				paging({
//					id : "clientManagerSale_page",
//					currentPage : requestParams.page,
//					totalPages : data.data.pageCount,
//					callback : function(page) {
//						refreshClientManagerSale(page);
//					}
//				});
//			});
}


function detailManager(managerId){
	//console.log(managerId);
	$("#ornament_modal").modal("show");	
	$("#ornament_modal").find(".modal-body").height("400px");
	//console.log('in on func');
	$.ajax({
		type: "post",
        url: "queryClientManagerSaleMonth",
        data: {id:managerId,monthTime:query_monthTime},
        dataType: "json",
        async : true,
        success: function(data){
        	//console.log('ajax successed');
        	//console.log('before:' + document.getElementById('managerMainId'));
        	var obj = {};
        	var xArray = [];
        	var yArray = [];
        	var dateRows = data.data;
        	for(var i=0;i<dateRows.length;i++){
        		xArray.push(dateRows[i].date);
        		yArray.push(dateRows[i].dateNum);
        	}
        	obj.yAxis = yArray;//Y轴数据
			obj.xAxis = xArray;//X轴数据
//			console.log(xArray);
//			console.log(yArray);
			//console.log(obj);
			setManagerSaleCharts(obj);
			//$("#managerMainId").html("<h1>test</h1>");
			//console.log('after biuld:' + document.getElementById('managerMainId'));
        }
	});
	//console.log('after ajax');
	
	 
}


function cancelPush(){
	$("#ornament_modal").modal("hide");
}


//设置柱状图
function setManagerSaleCharts(obj) {

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
            var myChart = ec.init(document.getElementById('managerMainId')); 
            
            var option = {
            	    tooltip : {
            	        show: true,
            	        trigger: 'item'
            	    },
            	    legend: {
            	        data:['销售量(台)']
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
            	            data : obj.xAxis,  
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
            	            name:'销售量(台)',
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
            	            //Y轴数据
            	            data:obj.yAxis
            	        }
            	    ]
            	};
    
            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
    );
}
