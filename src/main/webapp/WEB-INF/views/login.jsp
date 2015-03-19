<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>数据导出、导入-登录</title>
<script type="text/javascript">
	var ctx = "${ctx}";
</script>

<script type="text/javascript"
	src="${ctx}/static/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="${ctx}/static/js/jacy-js-tools.js"></script>


<!-- Bootstrap -->
<link href="${ctx}/static/css/bootstrap_div.css" rel="stylesheet">
<link href="${ctx}/static/css/bootstrap.min.css" rel="stylesheet">
<!-- head css -->
<link href="${ctx}/static/css/header.css" rel="stylesheet">
<!-- login -->
<%-- <link href="${ctx}/static/jquery-validation/1.11.1/validate.css" --%>
<!-- 	type="text/css" rel="stylesheet" /> -->
<!-- login -->
<link href="${ctx}/static/css/login.css" rel="stylesheet">
<!-- check-->
<link
	href="${ctx}/static/js/jquery-validation-engine-ciaoca-2.6.2/css/validationEngine.jquery.css"
	rel="stylesheet">
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="${ctx}/static/js/bootstrap.min.js"></script>
<script src="${ctx}/static/js/bootstrap-dialog.js"></script>
<script src="${ctx}/static/js/bootstrap-paginator.js"></script>
<script type="text/javascript" src="${ctx}/static/js/manage.js"></script>
<script type="text/javascript" src="${ctx}/static/js/base.js"></script>
<script type="text/javascript" src="${ctx}/static/js/login.js"></script>
<script
	src="${ctx}/static/js/jquery-validation-engine-ciaoca-2.6.2/js/jquery.validationEngine-zh_CN.js"></script>
<script
	src="${ctx}/static/js/jquery-validation-engine-ciaoca-2.6.2/js/jquery.validationEngine-jacy-1.01.min.js"></script>
<script type="text/javascript">
	$(function() {
		$("#btn_login").bind("click", function() {
			// 			console.log("btn_imp_data    click");
			var pwd = $("#txt_pwd").val();
			// 			console.log("pwd:" + pwd);
			window.location.href=ctx + "/expAndImpDatePage/" + pwd;
		});


	});
</script>


</head>
<body>
	<center>
		<table style="margin-top: 250px;">
			<tr>
				<td>密码：</td>
				<td><input id="txt_pwd" type="text" /></td>
				<td><input id="btn_login" type="button" value="登录" /></td>
			</tr>
		</table>
		
	</center>
</body>
</html>
