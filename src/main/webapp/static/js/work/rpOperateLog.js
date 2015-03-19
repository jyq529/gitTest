var query_userName=""; //用于存储搜索条件的全局变量
var query_userTel=""; //用于存储搜索条件的全局变量
var query_action=""; //用于存储搜索条件的全局变量
var query_begin="";
var query_endTime="";


/*打开页面自动加载全部列表*/
$(document).ready(function() {
	refreshRpOperateLog();
});



/*重置*/
function resetform(){
	if(userModel.roleId=="1"){
		$("#userName").val("");
		$("#userTel").val("");
	}	
	$("#action").val("");
	$("#beginTime").val("");
	$("#endTime").val("");
}



/*刷新登录用户分页列表*/
function refreshRpOperateLog(page,query_flag) {
	common.showLoading("rpOperateLog_tbody", "table", 7); // 显示加载中必加
	if (query_flag) {
		if(userModel.roleId=="1"){
			query_userName = $("#userName").val();
			query_userTel = $("#userTel").val();
		}		
		query_action = $("#action").val();
		query_begin= $("#beginTime").val();
		query_endTime= $("#endTime").val();
	}
	
	var rows = com_page_account; 

	var requestParams = { //发送参数
			page : page ==null?1:page,
			rows : rows,
			userName : query_userName,
			userTel : query_userTel,
			action: query_action,
			beginTime : query_begin ==""?query_begin:(query_begin+" 00:00:01"),
			endTime: query_endTime ==""?query_endTime:(query_endTime+" 23:59:59")
	};

	$.ajax({
		type : 'POST',
		url : "queryRpoperatelogByPage",
		data : requestParams,
		async : true,
		success : function(data) {
			common_set_page_data(data.data, requestParams.page); // 分页设置必加
			if (data.data.rows.length > 0) {
			var alterdata = "";
			for (var i = 0; i < data.data.rows.length; i++) {						
				alterdata+="<tr id="+data.data.rows[i].id+"><td align='center'>"+(data.data.rows[i].userName == null?"":data.data.rows[i].userName)+"</td>"
				 		+"<td align='center'>"+(data.data.rows[i].userTel == null?"":data.data.rows[i].userTel)+"</td>" 						
				 		+"<td align='center'>"+(data.data.rows[i].roleName == null?"":data.data.rows[i].roleName)+"</td>"
				 		+"<td align='center'>"+data.data.rows[i].ip+"</td>" 						
				 		+"<td align='center'>"+data.data.rows[i].createTime+"</td>"
				 		+"<td align='center'>"+data.data.rows[i].action+"</td>" 						
				 		+"<td align='center'>"+(data.data.rows[i].content == null?"":data.data.rows[i].content)+"</td>"						 					
				 		+"</tr>";
			}
			$("#rpOperateLog_tbody").html(alterdata);
		} else {
			$("#rpOperateLog_tbody").html("<tr><td colspan='7' align='center'>未查询出符合条件的数据！</td></tr>");
		}
		paging({
			id : "rpOperateLog_page",
			currentPage : requestParams.page,
			totalPages : data.data.pageCount,
			callback : function(page) {
				refreshRpOperateLog(page);
			}
		});
			}
		})
//	$.post(
//			"queryRpoperatelogByPage",
//			requestParams,
//			function(data) {
//				if (data.data.rows.length > 0) {
//					var alterdata = "";
//					for (var i = 0; i < data.data.rows.length; i++) {
//						var roleIdhtml = "";
//						if(data.data.rows[i].userRole=="1"){
//							roleIdhtml = "管理员";
//						}
//						if(data.data.rows[i].userRole=="2"){
//							roleIdhtml = "商户";
//						}						
//						alterdata+="<tr id="+data.data.rows[i].id+"><td align='center'>"+(data.data.rows[i].userName == null?"":data.data.rows[i].userName)+"</td>"
//						 		+"<td align='center'>"+(data.data.rows[i].userTel == null?"":data.data.rows[i].userTel)+"</td>" 						
//						 		+"<td align='center'>"+roleIdhtml+"</td>"
//						 		+"<td align='center'>"+data.data.rows[i].ip+"</td>" 						
//						 		+"<td align='center'>"+timeToDate(data.data.rows[i].createTime,19)+"</td>"
//						 		+"<td align='center'>"+data.data.rows[i].action+"</td>" 						
//						 		+"<td align='center'>"+(data.data.rows[i].content == null?"":data.data.rows[i].content)+"</td>"						 					
//						 		+"</tr>";
//					}
//					$("#rpOperateLog_tbody").html(alterdata);
//				} else {
//					$("#rpOperateLog_tbody").html("<tr><td colspan='7' align='center'>未查询出符合条件的数据！</td></tr>");
//				}
//				paging({
//					id : "rpOperateLog_page",
//					currentPage : requestParams.page,
//					totalPages : data.data.pageCount,
//					callback : function(page) {
//						refreshRpOperateLog(page);
//					}
//				});
//			});
}

function deleteRpOperateLog(){
	$("#rpOperateLog_modal").modal("show");	
	//清空开始时间与结束时间框值
	$("#deleteBeginTime").val("");
	$("#deleteEndTime").val("");
//	$("#ornament_modal").find(".modal-body").height("50px");
	
}


function cancelDelete(){
	$("#rpOperateLog_modal").modal("hide");	
}

function saveDelete(){
	var deleteBeginTime = $("#deleteBeginTime").val();
	var deleteEndTime = $("#deleteEndTime").val();
	if((deleteBeginTime=="")&&(deleteEndTime=="")){
		showMsg({
			msg : "开始时间和结束时间都不能为空！",
			type : "error"
		});
		return;
	}else{
		if(deleteBeginTime==""){
			showMsg({
				msg : "开始时间不能为空！",
				type : "error"
			});
			return;
		}
		if(deleteEndTime==""){
			showMsg({
				msg : "结束时间不能为空！",
				type : "error"
			});
			return;
		}
	}

	showMsg({
		msg : "确定删除吗？",
		type : "question",
		mode : 1,
		success : function() {
			deleteBeginTime = deleteBeginTime+" 00:00:01";
			deleteEndTime = deleteEndTime+" 23:59:59";
			$.ajax({
				type: "post",
		        url: "deleteRpoperatelog",
		        data: {deleteBeginTime:deleteBeginTime,deleteEndTime:deleteEndTime},
		        dataType: "json",
		        success: function(data){
		        	if(data.valid==true){
		        		showMsg({
		        			msg : "删除成功！",
		        			type : "success"
		        		});
		        	} else {
		        		showMsg({
		        			msg : "删除失败！",
		        			type : "error"
		        		});
		        	}
		        	$("#rpOperateLog_modal").modal("hide");	
		        	refreshRpOperateLog();
		        }
			}) 
		}
	})
}