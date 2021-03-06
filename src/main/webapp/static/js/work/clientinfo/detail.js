/**
 *个人信息-信息详情js 
 */
/*定义用于存储搜索条件的全局变量*/
var query_clientName = "";//姓名
var query_phoneNum = "";//手机号码
//var query_idCard = "";//身份证号

$(document).ready(function(){
	if (userModel.roleId == "1") {
		$("#page_div").show();
	} else {
		$("#page_div").hide();
	}
	refreshClientInfoList();//查询列表数据
	
});
/*加载列表数据*/
function refreshClientInfoList(page,query_flag){
	common.showLoading("detail_data_tbody", "table", 5); // 显示加载中必加
	if(query_flag){
		query_clientName = $("#query_clientName").val();//姓名
		query_phoneNum = $("#query_phoneNum").val();//手机号码
		//query_idCard = $("#query_idCard").val();//身份证号
		
	}
	var rows = com_page_account; //暂定每页显示10行
	var requestParams = { //发送参数
			page : page ==null?1:page,//当前页
			rows : rows,//每页显示的记录数
			clientName: query_clientName,//姓名
			phoneNum: query_phoneNum,//手机号码
			//idCard: query_idCard,//身份证号
			
	};
	$.ajax({
		type : 'POST',
		url : ctx + "/work/clientinfo/init",
		data : requestParams,
		async : true,
		success : function(result) {
			if (userModel.roleId == "1") {
				common_set_page_data(result.data, requestParams.page); // 分页设置必加
			}
			// 清空数据
			$("#detail_data_tbody").empty();
			var query_data = result.data;//后台的响应数据
			var query_list = query_data.rows;//响应数据中的记录数据
			if(!jQuery.isEmptyObject(query_list) && query_list.length > 0){
				for(var i = 0;i < query_list.length;i++){
					var trB = $("<tr></tr>");
					trB.appendTo($("#detail_data_tbody"));
					var tdB1 = $("<td style='display:none;'>" + query_list[i].id + "</td>");//id
					var tdB2 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].clientName) + "</td>");//姓名
					var tdB3 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].phoneNum) + "</td>");//手机号码
//					var tdB4 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].idCard) + "</td>");//身份证号
					var tdB5 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].cenTelnum) + "</td>");//店员电话
					var tdB6 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].cenTelnum) + "</td>");//总机号码
					var tdB7 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].dirNum) + "</td>");//直线号码
					tdB1.appendTo(trB);
					tdB2.appendTo(trB);
					tdB3.appendTo(trB);
//					tdB4.appendTo(trB);
					tdB5.appendTo(trB);
					tdB6.appendTo(trB);
					tdB7.appendTo(trB);
				}
			}else{
				var trB2 = $("<tr></tr>");
				trB2.appendTo($("#detail_data_tbody"));
				var tdB21 = $("<td colspan=\"5\" align=\"center\">未查询到符合条件的数据!</td>");
				tdB21.appendTo(trB2);
			}
			paging({
				id : "detail_page",
				currentPage : requestParams.page,//当前页
				totalPages : query_data.pageCount,//总页数
				callback : function(page) {
					refreshClientInfoList(page);
				}
			});
		},
		error : function() {
		}
	});
}
/*条件查询*/
function detailQueryConditions(){
	refreshClientInfoList(null,true);
	
}
/*清空搜索表单*/
function detailResetform(){
	$("#query_clientName").val("");//姓名
	$("#query_phoneNum").val("");//手机号码
	//$("#query_idCard").val("");//身份证号
	query_clientName = "";//姓名
	query_phoneNum = "";//手机号码
	//query_idCard = "";//身份证号
}