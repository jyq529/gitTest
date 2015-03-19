/**
 * APP登录上报信息js
 */
/*定义用于存储搜索条件的全局变量*/
var query_userIdy = "";//用户标识
var query_beginTime = "";//上报起始时间
var query_endTime = "";//上报结束时间

$(document).ready(function(){
	refreshAppLoginList();//查询列表数据
	
});
/*条件查询*/
function appLoginQueryConditions(){
	refreshAppLoginList(null,true);
}
/*清空搜索表单*/
function appLoginResetform(){
	$("#appLoginUserIdy").val("");//用户标识
	$("#beginTime").val("");//上报起始时间
	$("#endTime").val("");//上报结束时间
	query_userIdy = "";//用户标识
	query_beginTime = "";//上报起始时间
	query_endTime = "";//上报结束时间
}
/*加载列表数据*/
function refreshAppLoginList(page,query_flag){
	common.showLoading("appLogin_data_tbody", "table", 5); // 显示加载中必加
	if(query_flag){
		query_userIdy = $("#appLoginUserIdy").val();//用户标识
		query_beginTime = $("#beginTime").val();//上报起始时间
		query_endTime = $("#endTime").val();//上报结束时间
		
	}
	var rows = com_page_account; //暂定每页显示10行
	var requestParams = { //发送参数
			page : page ==null?1:page,//当前页
			rows : rows,//每页显示的记录数
			userIdy: query_userIdy,//用户标识
			beginTime: query_beginTime,//上报起始时间
			endTime: query_endTime,//上报结束时间
	};
	$.ajax({
		type : 'POST',
		url : ctx + "/work/appaction/queryAppLoginInfoByPage",
		data : requestParams,
		async : true,
		success : function(result) {
			common_set_page_data(result.data, requestParams.page); // 分页设置必加
			$("#appLogin_data_tbody").empty();
			var query_data = result.data;//后台的响应数据
			var query_list = query_data.rows;//响应数据中的记录数据
			if(!jQuery.isEmptyObject(query_list) && query_list.length > 0){
				for(var i = 0;i < query_list.length;i++){
					var trB = $("<tr></tr>");
					trB.appendTo($("#appLogin_data_tbody"));
					var tdB1 = $("<td style='display:none;'>" + query_list[i].id + "</td>");//id
					var tdB2 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].userIdy) + "</td>");//用户标识
					var tdB3 = $("<td style='text-align:center;'>" + dateFmt(query_list[i].createTime) + "</td>");//上报时间
					//var tdB4 = $("<td>" + query_list[i].idCard + "</td>");//身份证号
					var tdB5 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].phoneOs) + "</td>");//手机系统类型
					var tdB6 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].appVersion) + "</td>");//APP版本号
					var tdB7 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].userMac) + "</td>");//用户手机端MAC
					tdB1.appendTo(trB);
					tdB2.appendTo(trB);
					tdB3.appendTo(trB);
					//tdB4.appendTo(trB);
					tdB5.appendTo(trB);
					tdB6.appendTo(trB);
					tdB7.appendTo(trB);
				}
			}else{
				var trB2 = $("<tr></tr>");
				trB2.appendTo($("#appLogin_data_tbody"));
				var tdB21 = $("<td colspan=\"5\" align=\"center\">未查询到符合条件的数据!</td>");
				tdB21.appendTo(trB2);
			}
			paging({
				id : "appLogin_page",
				currentPage : requestParams.page,//当前页
				totalPages : query_data.pageCount,//总页数
				callback : function(page) {
					refreshAppLoginList(page);
				}
			});
		},
		error : function() {
		}
	});
}
//日期格式化-将毫秒格式化为 年月日时分秒
function dateFmt(dateStr){
	if(dateStr === undefined || dateStr === "" || dateStr === null){
		return "";
	}else{
		var date = new Date(parseInt(dateStr));
		return date.pattern("yyyy-MM-dd HH:mm:ss");
	}
}