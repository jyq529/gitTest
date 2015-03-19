/**
 *用户管理信息-信息详情js 
 */
/*定义用于存储搜索条件的全局变量*/
var query_userName = "";//用户名
var query_phoneNum = "";//手机号码
var query_roleId = "";//角色id
//var query_areaId = "";//区域id

$(document).ready(function(){
	refreshUserInfoList();//查询列表数据
	/**
	 * 重置密码
	 */
	$("input[id^='btn_reset_pwd_']").live("click", function() {
		var id = $(this).attr("id").split("_")[3];
//		console.log("btn_reset_pwd_   click....." + id);
		$.ajax({
			type : 'POST',
			url : "resetPwd",
			data : {'id':id},
			async : true,
			success : function(data) {
				if (data.valid) {
					// 重置成功
					showMsg({
						msg : data.msg,
						type : "info"
					});
				} else {// 重置失败
					showMsg({
						msg : data.msg,
						type : "error"
					});
				}
			},
			error : function() {
			}
		});
	});
	
	/**
	 * 修改角色弹窗
	 */
	$("input[id^='btn_modi_role_']").live("click", function() {
		var userId = $(this).attr("id").split("_")[3];
//		console.log("btn_modi_role_   click....." + id);
//		console.log($("#modifyRoleModal"));
		$.ajax({
			type : 'POST',
			url : "initModiRole/" + userId,
			data : {},
			async : true,
			success : function(data) {
				var roleId = data.data.roleId;
				var roleArr = data.data.roleList;
				if (data.valid) {
					
					$("#userId").val(userId);
					
					// 清空下拉
					$("#sel_role").empty();
					
					// 下拉回填
					$.each( roleArr, function(i, role){
//					  console.log( "Name: " + i + ", Value: " + role.name );
					  $("#sel_role").append("<option value='" + role.id + "'>" + role.name + "</option>");
					});
					
					// 选中角色
					$("#sel_role").val(roleId);
					
				} else {// 失败
					showMsg({
						msg : data.msg,
						type : "error"
					});
				}
			},
			error : function() {
			}
		});
		
		// 显示弹窗
		$("#modifyRoleModal").modal("show");
	});
	
	/**
	 * 提交修改用户角色
	 */
	$("#btn_modi_subm").bind("click", function() {
//		console.log("btn_modi_role_subm click...");
		var userId = $("#userId").val();
		var roleId = $("#sel_role").val();
		console.log("userId:" + userId);
		console.log("roleId:" + roleId);
		$.ajax({
			type : 'POST',
			url : "modiRoleId/" + userId + "/" + roleId,
			data : {},
			async : true,
			success : function(data) {
				if (data.valid) {
					// 关闭弹窗
					$("#modifyRoleModal").modal("hide");
					
					// 重新查询用户列表
					detailQueryConditions();
					
					// 修改用户角色成功
					showMsg({
						msg : data.msg,
						type : "info"
					});
				} else {// 修改用户角色失败
					showMsg({
						msg : data.msg,
						type : "error"
					});
				}
			},
			error : function() {
			}
		});
	});
	
	// 关闭按钮
	$("#btn_modi_cancle").bind("click", function() {
		// 关闭弹窗
		$("#modifyRoleModal").modal("hide");
	});
	
});
/*加载列表数据*/
function refreshUserInfoList(page,query_flag){
	common.showLoading("detail_data_tbody", "table", 4); // 显示加载中必加
	if(query_flag){
		query_userName = $("#query_userName").val();//姓名
		query_phoneNum = $("#query_phoneNum").val();//手机号码
		query_roleId = $("#query_roleId").val();//角色
	}
	var rows = com_page_account; //暂定每页显示10行
	var requestParams = { //发送参数
			page : page ==null?1:page,//当前页
			rows : rows,//每页显示的记录数
			userName: query_userName,//姓名
			phoneNum: query_phoneNum,
			roleId: query_roleId
			
	};
	$.ajax({
		type : 'POST',
		url : "queryUser",
		data : requestParams,
		async : true,
		success : function(result) {
			common_set_page_data(result, requestParams.page); // 分页设置必加
			//console.log("yes 有权限");
			//console.log(result);
			// 清空数据
			$("#detail_data_tbody").empty();
			var query_data = result;//后台的响应数据
			var query_list = query_data.rows;//响应数据中的记录数据
			//console.log(query_list);
			if(!jQuery.isEmptyObject(query_list) && query_list.length > 0){
				for(var i = 0;i < query_list.length;i++){
					var trB = $("<tr></tr>");
					trB.appendTo($("#detail_data_tbody"));
					var tdB1 = $("<td style='display:none;text-align:center;'>" + query_list[i].id + "</td>");//id
					var tdB2 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].userName) + "</td>");//用户名
					var tdB3 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].phoneNum) + "</td>");//手机号码
					var tdB4 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].roleName) + "</td>");//角色
				
					// 区域 放到二期显示
//					var tdB5 = $("<td style='text-align:center;'>" + nullToStr(query_list[i].areaId) + "</td>");//区域
					
					var tdB6 = $("<td align='center'><input value='修改角色' style='color:#EB6202;border:solid 1px #EB6202;border-radius:2px;' type='button' id='btn_modi_role_" + query_list[i].id + "'/>&nbsp;<input value='重置密码' style='color:#EB6202;border:solid 1px #EB6202;border-radius:2px;' type='button' id='btn_reset_pwd_" + query_list[i].id + "'/></td>");
					// 不可以修改系统管理员的角色
					if(nullToStr(query_list[i].roleId) == '1') {
						tdB6 = $("<td align='center'>&nbsp;<input value='重置密码' style='color:#EB6202;border:solid 1px #EB6202;border-radius:2px;' type='button' id='btn_reset_pwd_" + query_list[i].id + "'/></td>");
					}
					tdB1.appendTo(trB);
					tdB2.appendTo(trB);
					tdB3.appendTo(trB);
					tdB4.appendTo(trB);
//					tdB5.appendTo(trB);
					tdB6.appendTo(trB);
				}
			}else{
				var trB2 = $("<tr></tr>");
				trB2.appendTo($("#detail_data_tbody"));
				var tdB21 = $("<td colspan=\"4\" align=\"center\">未查询到符合条件的数据!</td>");
				tdB21.appendTo(trB2);
			}
			paging({
				id : "detail_page",
				currentPage : requestParams.page,//当前页
				totalPages : query_data.pageCount,//总页数
				callback : function(page) {
					refreshUserInfoList(page);
				}
			});
		},
		error : function() {
			//console.log("2222");
		}
	});
}
/*条件查询*/
function detailQueryConditions(){
	refreshUserInfoList(null,true);
}
/*清空搜索表单*/
function detailResetform(){
	$("#query_userName").val("");//姓名
	$("#query_phoneNum").val("");//手机号码
	$("#query_roleId").val("");//角色
	query_userName = "";//姓名
	query_phoneNum = "";//手机号码
	query_roleId = "";//角色
}