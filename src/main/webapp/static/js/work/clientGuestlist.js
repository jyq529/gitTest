var eq_Mac=""; //用于存储搜索条件的全局变量
var guest_Mac=""; //用于存储搜索条件的全局变量
var guest_Status=""; //用于存储搜索条件的全局变量

function getCurrentDate(){
	var nowDate = new Date();
	var currentDate = ""+nowDate.getFullYear()+"-"+addZero(nowDate.getMonth()+1)+"-"+addZero(nowDate.getDate());
	return currentDate;
}



/*打开页面自动加载全部列表*/
$(document).ready(function() {
	$("#queryDate").val(getCurrentDate());
	refreshClientGuestlist();	
});

/*点击日期控件判断是否隐藏在线下拉框*/
function clickDatehideOnlineStatus(){
	if($("#queryDate").val()==getCurrentDate()){
		//如果日期等于当前日期,显示是否在线下拉框
		$("#onlineStatus").show();		
	}else{
		$("#onlineStatus").hide();		
	}
}

/*重置*/
function resetform(){
	$("#eqMac").val("");
	$("#guestMac").val("");
	$("#guestStatus").val("");	
	$("#queryDate").val(getCurrentDate());
}



/*刷新登录用户分页列表*/
function refreshClientGuestlist(page,query_flag) {
	if(($("#queryDate").val()=="")||($("#queryDate").val()==null)){
		showMsg({
			msg : "日期不能为空！",
			type : "error"
		});
		return;
	}
	common.showLoading("clientGuestlist_tbody", "table", 4); // 显示加载中必加
	if (query_flag) {
		eq_Mac = $("#eqMac").val();
		guest_Mac = $("#guestMac").val();
		guest_Status = $("#guestStatus").val();
		
	}
	
	var rows = com_page_account; 

	var requestParams = { //发送参数
			page : page ==null?1:page,
			rows : rows,
			eqMac : eq_Mac,
			guestMac : guest_Mac,
			guestStatus: guest_Status,
			queryDate : $("#queryDate").val()
	};
	$.ajax({
		type : 'POST',
		url : "queryClientGuestByPage",
		data : requestParams,
		async : true,
		success : function(data) {
			common_set_page_data(data.data, requestParams.page); // 分页设置必加
			if (data.data.rows.length > 0) {
			var alterdata = "";
			for (var i = 0; i < data.data.rows.length; i++) {
				var onlineState = "";
				if(data.data.rows[i].guestStatus=="online"){
					onlineState += "<td align='center'><span style='color: white;background-color: #8BCC4C;border-radius: 0px;'>&nbsp;&nbsp;我在线&nbsp;&nbsp;</span></td>";
				}else if(data.data.rows[i].guestStatus=="offline"){
					onlineState += "<td align='center'><span style='color: white;background-color: #9C9C9C;border-radius: 0px;'>&nbsp;&nbsp;下线了&nbsp;&nbsp;</span></td>";
				}else{
					onlineState += "<td align='center'>&nbsp;</span></td>";
				}									
				alterdata+="<tr id="+data.data.rows[i].id+"><td align='center'>"+data.data.rows[i].eqMac+"</td>"
				 		+"<td align='center'>"+data.data.rows[i].guestMac+"</td>" 						
				 		+"<td align='center'>"+myTimeStr(data.data.rows[i].conSttime)+"</td>" 					
				 		+onlineState 					
				 		+"</tr>";
			}
			$("#clientGuestlist_tbody").html(alterdata);
		} else {			
			$("#clientGuestlist_tbody").html("<tr><td colspan='4' align='center'>未查询出符合条件的数据！</td></tr>");			
		}
		paging({
			id : "clientGuestlist_page",
			currentPage : requestParams.page,
			totalPages : data.data.pageCount,
			callback : function(page) {
				refreshClientGuestlist(page);
			}
		});
		}
	})
//	$.post(
//			"queryClientGuestByPage",
//			requestParams,
//			function(data) {
//				if (data.data.rows.length > 0) {
//					var alterdata = "";
//					for (var i = 0; i < data.data.rows.length; i++) {
//						var onlineState = "";
//						if(data.data.rows[i].guestStatus=="online"){
//							onlineState += "<td align='center'><span style='color: white;background-color: #00B8EE;border-radius: 0px;'>&nbsp;&nbsp;我在线&nbsp;&nbsp;</span></td>";
//						}else{
//							onlineState += "<td align='center'><span style='color: white;background-color: #FF6600;border-radius: 0px;'>&nbsp;&nbsp;下线了&nbsp;&nbsp;</span></td>";
//						}
//						alterdata+="<tr id="+data.data.rows[i].id+"><td align='center'>"+data.data.rows[i].eqMac+"</td>"
//						 		+"<td align='center'>"+data.data.rows[i].guestMac+"</td>" 						
//						 		+"<td align='center'>"+myTimeStr(data.data.rows[i].conSttime)+"</td>" 					
//						 		+onlineState 					
//						 		+"</tr>";
//					}
//					$("#clientGuestlist_tbody").html(alterdata);
//				} else {
//					$("#clientGuestlist_tbody").html("<tr><td colspan='4' align='center'>未查询出符合条件的数据！</td></tr>");
//				}
//				paging({
//					id : "clientGuestlist_page",
//					currentPage : requestParams.page,
//					totalPages : data.data.pageCount,
//					callback : function(page) {
//						refreshClientGuestlist(page);
//					}
//				});
//			});
}



function myTimeStr(totalSeconds) {
	var result = "";
	var second = totalSeconds % 60;// 秒
	var totalMinutes = parseInt(totalSeconds / 60);
	var minute = totalMinutes % 60;// 分
	var totalHours = parseInt(totalMinutes / 60);
	var hour = totalHours % 24;// 时
	var totalDays = parseInt(totalHours / 24);	
	if(totalDays>0){
		result += totalDays+"天"+hour+"时"+minute+"分"+second+"秒";
		return result;
	}else if(hour>0){
		result += hour+"时"+minute+"分"+second+"秒";
		return result;
	}else if(minute>0){
		result += minute+"分"+second+"秒";
		return result;
	}else if(second>0){
		result += second+"秒";
		return result;
	}else{
		return result;
	}	
}


