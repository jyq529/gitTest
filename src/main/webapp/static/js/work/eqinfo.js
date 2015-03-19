var query_mac=""; //用于存储搜索条件的全局变量
var query_userTel=""; //用于存储搜索条件的全局变量
var query_beginTime=""; //用于存储搜索条件的全局变量
var query_endTime=""; //用于存储搜索条件的全局变量
var query_workModel=""; //用于存储搜索条件的全局变量



/*打开页面自动加载全部列表*/
$(document).ready(function() {
	refreshEqinfo();
});



/*重置*/
function resetform(){
	$("#equinfo_mac").val("");
	$("#userTel").val("");
	$("#beginTime").val("");
	$("#endTime").val("");
	$("#workModel").val("");
}



/*刷新登录用户分页列表*/
function refreshEqinfo(page,query_flag) {
	if (userModel.roleId == "1") {
		common.showLoading("eqinfo_tbody", "table", 11); // 显示加载中必加
	} else {
		common.showLoading("eqinfo_tbody", "table", 10); // 显示加载中必加
	}
	if (query_flag) {
		query_mac = $("#equinfo_mac").val();
		query_userTel = $("#userTel").val();
		query_beginTime = $("#beginTime").val();
		query_endTime = $("#endTime").val();
		query_workModel = $("#workModel").val();
		
	}
	
	var rows = com_page_account; 

	var requestParams = { //发送参数
			page : page ==null?1:page,
			rows : rows,
			mac : query_mac,
			userTel : query_userTel,
			beginTime: query_beginTime,
			endTime: query_endTime,
			workModel : query_workModel
	};

	$.ajax({
		type : 'POST',
		url : "queryEqinfo",
		data : requestParams,
		async : true,
		success : function(data) {
			common_set_page_data(data.data, requestParams.page); // 分页设置必加
			if (data.data.rows.length > 0) {
				var alterdata = "";
				for (var i = 0; i < data.data.rows.length; i++) {
					var rowdata = data.data.rows[i];
					var editdataflowhtml = "";
					var onlineState = "";
					if(rowdata.cardImsi!=null){
						editdataflowhtml += "<input value='获取' style='color:#428bca;border:solid 1px #428bca;border-radius:2px;' type='button' id='getDataButton'" 														
							+" onclick='getDataflow("+ rowdata +")'/>";
					}
					if(rowdata.currentOnlineFlag=="online"){
						onlineState += "<td align='center'><span style='color: white;background-color: #8BCC4C;border-radius: 0px;'>&nbsp;&nbsp;我在线&nbsp;&nbsp;</span></td>";
					}else{
						onlineState += "<td align='center'><span style='color: white;background-color: #9C9C9C;border-radius: 0px;'>&nbsp;&nbsp;下线了&nbsp;&nbsp;</span></td>";
					}
					alterdata+="<tr id="+rowdata.id+"><td align='center'>"+rowdata.mac+"</td>"
					 		+"<td align='center'>"+(rowdata.imei == null?"":rowdata.imei)+"</td>" 						
					 		+"<td align='center'>"+(rowdata.imsi == null?"":rowdata.imsi)+"</td>" 					
					 		+"<td align='center'>"+(rowdata.workModel == null?"":rowdata.workModel)+"</td>" 
	//				 		+"<td>"+rowdata.createTime+"</td>" 						
					 		+"<td align='center'>"+(rowdata.lastTime == null?"":rowdata.lastTime)+"</td>" 					
					 		+onlineState;	
					 		if(userModel.roleId=="1"){
					 			alterdata+="<td  align='center'>"+(rowdata.userTel == null?"":rowdata.userTel)+"</td>";
					 		}												 								 		 						
					 		alterdata+="<td  align='center'>"+(rowdata.simNum == null?"":rowdata.simNum)+"</td>" 					
	//				 		+"<td>"+(rowdata.packageSize == null?"":rowdata.packageSize)+"</td>" 
					 		+"<td align='center'>"+(rowdata.totalDataflow == null?"":changeTwoDecimal(rowdata.totalDataflow))+"</td>" 											
					 		+"<td align='center'>"+(rowdata.monthTotalFlow == null?"":changeTwoDecimal(rowdata.monthTotalFlow))+"</td>" 
					 		+"<td align='center'>"+(rowdata.managerName == null?"":rowdata.managerName)+"</td>" 					
					 		/*+"<td align='center'><span id='dataflowId'></span>&nbsp;&nbsp;&nbsp;"+editdataflowhtml+"</td>" */
					 		+"</tr>";
				}
				$("#eqinfo_tbody").html(alterdata);
			} else {
				if(userModel.roleId=="1"){
					$("#eqinfo_tbody").html("<tr><td colspan='11' align='center'>未查询出符合条件的数据！</td></tr>");
				}else{
					$("#eqinfo_tbody").html("<tr><td colspan='10' align='center'>未查询出符合条件的数据！</td></tr>");
				}
				
			}
			paging({
				id : "eqinfo_page",
				currentPage : requestParams.page,
				totalPages : data.data.pageCount,
				callback : function(page) {
					refreshEqinfo(page);
				}
			});
		}
	})
//	$.post(
//			"queryEqinfo",
//			requestParams,
//			function(data) {
//				if (data.data.rows.length > 0) {
//					var alterdata = "";
//					for (var i = 0; i < data.data.rows.length; i++) {
//						var rowdata = data.data.rows[i];
//						var editdataflowhtml = "";
//						var onlineState = "";
//						if(rowdata.cardImsi!=null){
//							editdataflowhtml += "<input value='获取' style='color:#428bca;border:solid 1px #428bca;border-radius:2px;' type='button' id='getDataButton'" 														
//								+" onclick='getDataflow("+ rowdata +")'/>";
//						}
//						if(rowdata.eqState=="online"){
//							onlineState += "<td><span style='color: white;background-color: #00B8EE;border-radius: 0px;'>&nbsp;&nbsp;我在线&nbsp;&nbsp;</span></td>";
//						}else{
//							onlineState += "<td><span style='color: white;background-color: #FF6600;border-radius: 0px;'>&nbsp;&nbsp;下线了&nbsp;&nbsp;</span></td>";
//						}
//						alterdata+="<tr id="+rowdata.id+"><td>"+rowdata.mac+"</td>"
//						 		+"<td>"+rowdata.imei+"</td>" 						
//						 		+"<td>"+rowdata.imsi+"</td>" 					
//						 		+"<td>"+rowdata.workModel+"</td>" 
//						 		+"<td>"+rowdata.createTime+"</td>" 						
//						 		+"<td>"+rowdata.lastTime+"</td>" 					
//						 		+onlineState;	
//						 		if(userModel.roleId=="1"){
//						 			alterdata+="<td>"+(rowdata.userTel == null?"":rowdata.userTel)+"</td>";
//						 		}												 								 		 						
//						 		alterdata+="<td>"+(rowdata.simNum == null?"":rowdata.simNum)+"</td>" 					
//						 		+"<td>"+(rowdata.packageSize == null?"":rowdata.packageSize)+"</td>" 
//						 		+"<td>"+(rowdata.totalDataflow == null?"":rowdata.totalDataflow)+"</td>" 						
//						 		+"<td>"+(rowdata.managerName == null?"":rowdata.managerName)+"</td>" 					
//						 		+"<td>"+(rowdata.managerTel == null?"":rowdata.managerTel)+"</td>" 
//						 		/*+"<td align='center'><span id='dataflowId'></span>&nbsp;&nbsp;&nbsp;"+editdataflowhtml+"</td>" */
//						 		+"</tr>";
//					}
//					$("#eqinfo_tbody").html(alterdata);
//				} else {
//					$("#eqinfo_tbody").html("<tr><td colspan='13' align='center'>未查询出符合条件的数据！</td></tr>");
//				}
//				paging({
//					id : "eqinfo_page",
//					currentPage : requestParams.page,
//					totalPages : data.data.pageCount,
//					callback : function(page) {
//						refreshEqinfo(page);
//					}
//				});
//			});
}


