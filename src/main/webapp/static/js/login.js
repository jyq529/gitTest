//ie兼容光标定位 
function fcs() {
	document.getElementById("name").focus();
	scroll(0, 0);
}

// 回车切换焦点
function handleEnter(field, event) {
	var keyCode = event.keyCode ? event.keyCode : event.which ? event.which
			: event.charCode;
	if (keyCode == 13) {
		var i;
		for (i = 0; i < field.form.elements.length - 1; i++) {
			if (field == field.form.elements[i])
				break;
		}
		if (i == 0) {
			field.form.elements[1].focus();
		}
		if (i == 1) {
			document.getElementById("subLogin").click();
		}
		return false;
	} else
		return true;
}

$(function() {
	// $("#exampleInputAccount").focus();
	// 将表单提交及其表单项的验证绑定到jquery validation engine

	// 登录验证、提交
	$("#loginForm").validationEngine(
			"attach",
			{
				promptPosition : "centerRight:0,0",// 提示信息位置：右，偏移量：x:0,y:0
				validationEventTrigger : "blur",// 触发验证事件
				binded : false,// 非即时验证
				// addPromptClass: 'formError-noArrow formError-small',
				showOneMessage : true,
				ajaxFormValidationMethod : 'post',
				maxErrorsPerField : 1,// 单个元素显示错误提示的最大数量，值设为数值。默认 false 表示不限制
				autoHidePrompt: true,// 是否自动隐藏提示信息
				autoHideDelay: 3000,// 自动隐藏提示信息的延迟时间（单位：ms）
				// fadeDuration: 0.9,// 隐藏提示信息淡出的时间
				scroll : false, // 提示信息不滚屏
				onValidationComplete : function(form, status) {// 表单提交验证完成时的回调函数,即使验证都通过也不提交表单
					if (status) {// 表单验证通过
						$.ajax({
							cache : true,
							type : "post",
							url : ctx + '/work/user/login ',
							data : $('#loginForm').serialize(),
							async : true,
							success : function(data) {
								if (data.valid) {
									// 登陆成功
									if (data.roleId == "1") { // 管理员
										window.location.href = ctx+'/work/welcome/admin';
									} else { // 商户
										window.location.href = ctx+'/work/welcome/user';
									}
								} else {
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
	
	// 短信登录验证、提交
	$("#loginFormSms").validationEngine(
			"attach",
			{
				promptPosition : "centerRight:0,0",// 提示信息位置：右，偏移量：x:0,y:0
				validationEventTrigger : "blur",// 触发验证事件
				binded : true,// 非即时验证
				// addPromptClass: 'formError-noArrow formError-small',
				showOneMessage : true,
				ajaxFormValidationMethod : 'post',
				maxErrorsPerField : 1,// 单个元素显示错误提示的最大数量，值设为数值。默认 false 表示不限制
				autoHidePrompt: true,// 是否自动隐藏提示信息
				autoHideDelay: 3000,// 自动隐藏提示信息的延迟时间（单位：ms）
				// fadeDuration: 0.9,// 隐藏提示信息淡出的时间
				scroll : false, // 提示信息不滚屏
				onValidationComplete : function(form, status) {// 表单提交验证完成时的回调函数,即使验证都通过也不提交表单
					if (status) {// 表单验证通过
						$.ajax({
							cache : true,
							type : "post",
							url : ctx + '/work/user/login ',
							data : $('#loginFormSms').serialize(),
							async : true,
							success : function(data) {
								if (data.valid) {
									// 登陆成功
									if (data.roleId == "1") { // 管理员
										window.location.href = ctx + '/work/welcome/admin';
									} else { // 商户
										window.location.href = ctx + '/work/welcome/user';
									}
								} else {
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
	
	// 发送验证码
	$("#identifying").bind("click", function() {
//		console.log("identifying click...");
		var phoneNum = $("#txt_phoneNum_sms").val();
//		console.log("phoneNum：" + phoneNum);
		if(phoneNum=="") {
			$("#txt_phoneNum_sms").validationEngine("showPrompt","* 此处不可空白","error");
			return;
		}
		if(!jsFunc.isMobile(phoneNum)) {
			$("#txt_phoneNum_sms").validationEngine("showPrompt","* 无效的电话号码","error");
			return;
		}
		$.ajax({
			cache : true,
			type : "post",
			url : ctx + '/sendSms/login',
			data : {"phoneNum" : phoneNum},
			async : true,
			success : function(data) {
				if (data.valid) {
					getIdentifying();
				} else {
					showMsg({
						msg : data.msg,
						type : "error"
					});
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
	$("#identifying").attr("disabled",true);
	showTime();  
}

//显示倒数秒数  
function showTime(){  
  t -= 1;  
  $("#times").html(t+"秒内");  
  if(t==0){  
		$("#identifying_times").css("visibility","hidden");
		$("#identifying").removeAttr("disabled");
		t = 60;
		return;
  }  
  //每秒执行一次,showTime()  
  setTimeout("showTime()",1000);  
}  