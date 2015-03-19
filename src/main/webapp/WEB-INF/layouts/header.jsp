<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!-- 
if(是管理员) {
	显示管理员菜单
	if (pl_id不等于空) {
		显示左侧菜单
	} else {
		不显示左侧菜单
	}
}
 -->
<%-- <script type="text/javascript" src="${ctx}/static/js/work/admin/modify_password.js"></script>
<script type="text/javascript" src="${ctx}/static/js/work/admin/modify_password_check.js"></script> --%>
<style type="text/css">
.blank {
	border: 0px solid #ddd;
}
</style>
<script>
	// 加载修改用户信息页
	function loadUserInfo() {
// 		console.log("loadUserInfo...");
		$.ajax({
			type : 'POST',
			url : ctx + "/work/user/modifyPersonalPage",
			data : {},
			async : true,
			success : function(data) {
 				//console.log(data.data);
				$("#loginUserName_header").val(data.data.userName);
				$("#phoneNumber_header").val(data.data.phoneNum);
			},
			error : function() {
			}
		});
		$("#modifyAccountInfoModal").modal("show");
	}

	// 加载修改密码信息页
	function loadModiPwd() {
// 		console.log("loadModiPwd...");

		// 清空表单，防止浏览器记住密码
		$("#fo_modi_pwd")[0].reset();
		
		// 显示“获取验证码”按钮
		$("#identifying_times").css("visibility","hidden");
		
		// 隐藏倒计时
		$("#btn_modi_pwd_get_sms").removeAttr("disabled");

		$.ajax({
			cache : true,
			type : "post",
			url : ctx + '/work/user/checkPwdEmpty',
			data : {},
			async : false,
			success : function(data) {
				if (data.valid) {// 密码为空，需要输入短信验证码
					$("#tr_old_pwd").css("display", "none");
					$("#tr_sms").css("display", "");

				} else {// 密码不为空，需要输入原密码
					$("#tr_old_pwd").css("display", "");
					$("#tr_sms").css("display", "none");
					$("#txt_old_password").focus();
				}
			}
		});

		$("#modifyPwdModal").modal("show");
	}

	function common_setBtnAble(flag) {
		if (flag) {
			setBtnAble('waitingImg','btn_save_userInfo',["modipwd_cancelBtn","modipwd_close_icon"]); // 启用按钮
			setBtnAble('waitingImg2','modipwd_saveBtn',["modipwd_cancelBtn","modipwd_close_icon"]); // 启用按钮
		} else {
			setBtnDisabled('waitingImg','btn_save_userInfo',["modipwd_cancelBtn","modipwd_close_icon"]); //禁用按钮
			setBtnDisabled('waitingImg2','modipwd_saveBtn',["modipwd_cancelBtn","modipwd_close_icon"]); //禁用按钮
		}
	}
	$(function() {
		// 修改用户信息验证、提交
		$("#fo_modi_userInfo").validationEngine("attach", {
			promptPosition : "centerRight:0,0",// 提示信息位置：右，偏移量：x:0,y:0
			validationEventTrigger : "blur",// 触发验证事件
			binded : true,// 非即时验证
			// addPromptClass: 'formError-noArrow formError-small',
			showOneMessage : true,
			ajaxFormValidationMethod : 'post',
			maxErrorsPerField : 1,// 单个元素显示错误提示的最大数量，值设为数值。默认 false 表示不限制
			autoHidePrompt : true,// 是否自动隐藏提示信息
			autoHideDelay : 3000,// 自动隐藏提示信息的延迟时间（单位：ms）
			fadeDuration : 0.9,// 隐藏提示信息淡出的时间
			scroll : false, // 提示信息不滚屏
			onValidationComplete : function(form, status) {// 表单提交验证完成时的回调函数,即使验证都通过也不提交表单
				if (status) {// 表单验证通过
					common_setBtnAble(false);
					$.ajax({
						cache : true,
						type : "post",
						url : ctx + '/work/user/modifyPersonal ',
						data : $(form).serialize(),
						async : true,
						success : function(data) {
							if (data.valid) {// 修改成功
								if ($("#loginUserName_header").val() != "") {
									$("#userNameView").html($("#loginUserName_header").val());
								} else {
									$("#userNameView").html($("#phoneNumber_header").val());
								}
								$("#modifyAccountInfoModal").modal("hide");
								showMsg({
									msg : data.msg,
									type : "info"
								});
							} else {
								common_setBtnAble(true);
								showMsg({
									msg : data.msg,
									type : "error"
								});
							}
						}
					});
				}
			}
		});

		$('#modifyAccountInfoModal').on('hidden.bs.modal', function (e) {
			common_setBtnAble(true);
		})
		
		// 修改密码验证、提交
		$("#fo_modi_pwd").validationEngine("attach", {
			promptPosition : "centerRight:0,0",// 提示信息位置：右，偏移量：x:0,y:0
			validationEventTrigger : "blur",// 触发验证事件
			binded : true,// 非即时验证
			// addPromptClass: 'formError-noArrow formError-small',
			showOneMessage : true,
			ajaxFormValidationMethod : 'post',
			maxErrorsPerField : 1,// 单个元素显示错误提示的最大数量，值设为数值。默认 false 表示不限制
			autoHidePrompt : true,// 是否自动隐藏提示信息
			autoHideDelay : 3000,// 自动隐藏提示信息的延迟时间（单位：ms）
			fadeDuration : 0.9,// 隐藏提示信息淡出的时间
			scroll : false, // 提示信息不滚屏
			onValidationComplete : function(form, status) {// 表单提交验证完成时的回调函数,即使验证都通过也不提交表单
				if (status) {// 表单验证通过
					common_setBtnAble(false);
					$.ajax({
						cache : true,
						type : "post",
						url : ctx + '/work/user/modifyPassword ',
						data : $(form).serialize(),
						async : true,
						success : function(data) {
							if (data.valid) {// 修改成功

								$("#modifyPwdModal").modal("hide");

								showMsg({
									msg : data.msg,
									type : "info"
								});
							} else {
								common_setBtnAble(true);
								showMsg({
									msg : data.msg,
									type : "error"
								});
							}
						}
					});
				}
			}
		});

		$('#modifyPwdModal').on('hidden.bs.modal', function (e) {
			common_setBtnAble(true);
		})
		// 发送验证码
		$("#btn_modi_pwd_get_sms").bind("click", function() {
// 			console.log("btn_modi_pwd_get_sms click...");
						getIdentifying();
			$.ajax({
				cache : true,
				type : "post",
				url : ctx + '/sendSms/modiPwd',
				data : {},
				async : true,
				success : function(data) {
					if (data.valid) {

					} else {

					}
				}
			});
		});

	});
	

	//设定倒数秒数  
	var t = 60; 
	// 获取验证码
	function getIdentifying() {
		$("#identifying_times").css("visibility","visible");
		$("#btn_modi_pwd_get_sms").attr("disabled",true);
		showTime();  
	}

	//显示倒数秒数  
	function showTime(){  
	  t -= 1;  
	  $("#times").html(t+"秒内");  
	  if(t==0){  
			$("#identifying_times").css("visibility","hidden");
			$("#btn_modi_pwd_get_sms").removeAttr("disabled");
			t = 60;
			return;
	  }  
	  //每秒执行一次,showTime()  
	  setTimeout("showTime()",1000);  
	}  
</script>




<header class="navbar navbar-static-top bs-docs-nav" id="top"
	role="banner" style="background-color: #EB6202; border: 0px;">
	<div class="container">
		<div class="navbar-header">
			<button class="navbar-toggle collapsed" type="button"
				data-toggle="collapse" data-target=".bs-navbar-collapse">
				<span class="sr-only">Toggle navigation</span> <span
					class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<div class="navbar-header" style="margin-top: 0px;">
				<c:choose>
					<c:when test="${userInMem.roleId == '1'}">
						<a style="cursor: pointer;" href="${ctx}/work/welcome/admin">
					</c:when>
					<c:otherwise>
						<a style="cursor: pointer;" href="${ctx}/work/welcome/user">
					</c:otherwise>
				</c:choose>
				<img src="${ctx}/static/images/top_02.png"> </a>
			</div>
		</div>
		<nav class="collapse navbar-collapse bs-navbar-collapse">
			<ul class="nav navbar-nav navbar-right">
				<li id="nav_admin_gzpt" class="dropdown"><a
					id="userAccountNameHref" data-toggle="modal"
					onclick="loadUserInfo();" style="cursor: pointer; font-size: 14px;">
						<img src="${ctx}/static/images/top_10.png">&nbsp;&nbsp;Hi,&nbsp;
						<span id="userNameView">
							<c:choose>
								<c:when
										test="${userInMem.userName != '' && userInMem.userName != null}">
						  			${userInMem.userName}
					  			</c:when>
								<c:otherwise>
					  				${userInMem.phoneNum}
					  			</c:otherwise>
							</c:choose>
						</span>
				</a></li>
				<li id="nav_admin_gzpt" class="dropdown"><a id=""
					data-toggle="modal" onclick="loadModiPwd();"
					style="cursor: pointer; font-size: 14px; padding-top: 0px;">
						<div style="text-align: center; height: 25px;">
							<img src="${ctx}/static/images/top_05.png">
						</div> 修改密码
				</a></li>
				<li><a href="${ctx }/logout"
					style="cursor: pointer; font-size: 14px; padding-top: 0px;">
						<div style="text-align: center; height: 25px;">
							<img src="${ctx}/static/images/top_07.png">
						</div> 退出
				</a></li>
			</ul>
		</nav>
	</div>
</header>

<!-- 修改登录用户信息窗口 -->
<div class="modal fade" id="modifyAccountInfoModal" tabindex="-1"
	role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
	data-backdrop="static">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button id="modipwd_close_icon" type="button"
					class="close btn-remove" data-dismiss="modal">
					<span class="glyphicon glyphicon-remove"></span>
				</button>
				<h4 class="modal-title" id="myModalLabel">账户信息：</h4>
			</div>
			<form id="fo_modi_userInfo" onsubmit="return false">
				<div class="modal-body">
					<table id="accountinfoTable"
						style="margin-left: 80px; text-align: center;">
						<tr>
							<td class="blank"><input type="hidden" name="" /></td>
						</tr>
						<tr>
							<td class="blank" width="60px"><label for="loginUserName_header">用户名：</label></td>
							<!-- 名字长一些，避免饮用header的其他页面出现重名 -->
							<td class="blank"><input name="userName"
								class="form-control validate[maxSize[20]]"
								id="loginUserName_header" maxlength="20"/><br /></td>
						</tr>
					</table>
					<input type="text" id="phoneNumber_header" style="display:none;"/>
				</div>
				<div class="modal-footer">
					<img id="waitingImg" src="${ctx}/static/images/waiting.gif" style="display:none;">
					<button id="btn_save_userInfo" type="submit"
						class="btn btn-warning">保存</button>
					<button id="modipwd_cancelBtn" type="button"
						class="btn btn-default" data-dismiss="modal">取消</button>
				</div>
			</form>
		</div>
	</div>
</div>

<!-- 修改密码信息窗口 -->
<div class="modal fade" id="modifyPwdModal" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true"
	data-backdrop="static">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button id="modipwd_close_icon" type="button"
					class="close btn-remove" data-dismiss="modal">
					<span class="glyphicon glyphicon-remove"></span>
				</button>
				<h4 class="modal-title" id="myModalLabel">修改密码：</h4>
			</div>
			<form id="fo_modi_pwd" onsubmit="return false">
				<div class="modal-body">
					<table id="accountinfoTable"
						style="margin-left: 80px; text-align: center;">
						<tr>
							<td class="blank"><input type="hidden" name="" /></td>
							<td></td>
							<td></td>
						</tr>
						<tr id="tr_sms">
							<td class="blank" id="" style="text-align: right;">短信验证码：</td>
							<td><input class="form-control validate[required]"
								id="txt_sms" type="text" name="sms" /><br /></td>
							<!-- 							<td><button id="btn_modi_pwd_get_sms" >获取验证码</button></td> -->
							<td><input id="btn_modi_pwd_get_sms" type="button"
								value="获取验证码" /></td>
						</tr>
						<tr id="tr_old_pwd">
							<td class="blank" id="" style="text-align: right;">原密码：</td>
							<td><input
								class="form-control validate[required,minSize[6],maxSize[20]]"
								id="txt_old_password" type="password" name="oldPassword" /><br /></td>
							<td></td>
						</tr>
						<tr>
							<td class="blank" id="" style="text-align: right;">新密码：</td>
							<td><input
								class="form-control validate[required,minSize[6],maxSize[20]]"
								id="txt_new_password" type="password" name="newPassword"
								maxlength="20" /><br /></td>
							<td></td>
						</tr>
						<tr>
							<td class="blank" id="" style="text-align: right;">重复新密码：</td>
							<td><input
								class="form-control validate[required,minSize[6],maxSize[20],equals[txt_new_password]]"
								id="txt_repeat_password" type="password" name="repeatPassword"
								maxlength="20" /><br /></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td class="label-tip" colspan="2">
								<div id="identifying_times" style="visibility: hidden;">
									请在<span id="times"
										style="color: #FF6600; font-weight: bold; margin-left: 5px; margin-right: 5px;"></span>输入验证码
								</div>
							</td>
						</tr>
					</table>
				</div>
				<div class="modal-footer">
					<img id="waitingImg2" src="${ctx}/static/images/waiting.gif" style="display:none;">
					<button id="modipwd_saveBtn" type="submit" class="btn btn-warning">保存</button>
					<button id="modipwd_cancelBtn" type="button"
						class="btn btn-default" data-dismiss="modal">取消</button>
				</div>
			</form>
		</div>
	</div>
</div>
