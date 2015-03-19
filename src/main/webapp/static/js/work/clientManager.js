var query_managerName=""; //用于存储搜索条件的全局变量
var query_managerTel=""; //用于存储搜索条件的全局变量
var query_workNo=""; //用于存储搜索条件的全局变量



/*打开页面自动加载全部列表*/
$(document).ready(function() {
	refreshClientManager();
});




/*重置*/
function resetform(){
	$("#managerName").val("");
	$("#managerTel").val("");
	$("#workNo").val("");
}



/*刷新分页列表*/
function refreshClientManager(page,query_flag) {
	common.showLoading("clientManager_tbody", "table", 4); // 显示加载中必加
	if (query_flag) {
		query_managerName = $("#managerName").val();
		query_managerTel = $("#managerTel").val();
		query_workNo = $("#workNo").val();
		
	}
	
	var rows = com_page_account; 

	var requestParams = { //发送参数
			page : page ==null?1:page,
			rows : rows,
			managerName : query_managerName,
			managerTel : query_managerTel,
			workNo: query_workNo
	};

	$.ajax({
		type : 'POST',
		url : "queryClientManager",
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
					 		+"</tr>";
				}
				$("#clientManager_tbody").html(alterdata);
			} else {
				$("#clientManager_tbody").html("<tr><td colspan='4' align='center'>未查询出符合条件的数据！</td></tr>");
			}
			paging({
				id : "clientManager_page",
				currentPage : requestParams.page,
				totalPages : data.data.pageCount,
				callback : function(page) {
					refreshClientManager(page);
				}
			});
		}
	})
//	$.post(
//			"queryClientManager",
//			requestParams,
//			function(data) {
//				if (data.data.rows.length > 0) {
//					var alterdata = "";
//					for (var i = 0; i < data.data.rows.length; i++) {
//						alterdata+="<tr id="+data.data.rows[i].id+"><td align='center'>"+data.data.rows[i].managerName+"</td>"
//						 		+"<td align='center'>"+data.data.rows[i].managerTel+"</td>" 						
//						 		+"<td align='center'>"+data.data.rows[i].workNo+"</td>" 					
//						 		+"<td align='center'>"+(data.data.rows[i].area == null ? "":data.data.rows[i].area)+"</td>" 					
//						 		+"</tr>";
//					}
//					$("#clientManager_tbody").html(alterdata);
//				} else {
//					$("#clientManager_tbody").html("<tr><td colspan='4' align='center'>未查询出符合条件的数据！</td></tr>");
//				}
//				paging({
//					id : "clientManager_page",
//					currentPage : requestParams.page,
//					totalPages : data.data.pageCount,
//					callback : function(page) {
//						refreshClientManager(page);
//					}
//				});
//			});
}


