<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>信天游-登录</title>
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
		$("#btn_imp_data1").bind("click", function() {
			// 			console.log("btn_imp_data    click");
			var startId = $("#txt_startId").val();
			var endId = $("#txt_endId").val();
			// 			console.log("startId:" + startId);
			// 			console.log("endId:" + endId);
			$.post(ctx + "/trToLtm", {
				"startId" : startId,
				"endId" : endId,
			}, function(data) {
				alert(data.msg);
			});
		});

		$("#btn_imp_data2").bind("click", function() {
			// 			console.log("btn_imp_data2    click");
			var skip = $("#txt_skip").val();
			var limit = $("#txt_limit").val();
			// 			console.log("skip:" + skip);
			// 			console.log("limit:" + limit);
			$.post(ctx + "/ltmToLm", {
				"skip" : skip,
				"limit" : limit,
			}, function(data) {
				alert(data.msg);
			});
		});

		$("#btn_unlock").bind("click", function() {
			console.log("unlock");
			$("#btn_imp_data2").prop("disabled", "");
		});

	});
</script>


</head>
<body>
	<center>
		<table style="margin-top: 250px;">
			<tr>
				<td colspan="5"><font color="red">tracker2</font>库<font color="red">t_terminal_report</font>表导入<font color="red">basestation</font>库<font color="red">locationTempModel</font>临时表</td>
			</tr>
			<tr>
				<td>开始ID:</td>
				<td><input id="txt_startId" name="startId" type="text" /></td>
				<td>结束ID:</td>
				<td><input id="txt_endId" name="endId" type="text" /></td>
				<td><input id="btn_imp_data1" name="" type="button" value="导入" /></td>
			</tr>
		</table>
		<table style="margin-top: 100px;">
			<tr>
				<td colspan="1"><input id="btn_unlock" name="" type="button" value="解锁" /></td>
				<td colspan="4"><font color="red">basestation</font>库<font color="red">locationTempModel</font>临时表导入<font color="red">basestation</font>库<font color="red">locationModel</font>表</td>
			</tr>
			<tr>
				<td>skip:</td>
				<td><input id="txt_skip" name="startId" type="text" value="0" /></td>
				<td>limit:</td>
				<td><input id="txt_limit" name="endId" type="text" value="1000000" /></td>
				<td><input id="btn_imp_data2" name="" type="button" disabled="disabled" value="导入" /></td>
			</tr>
		</table>
	</center>
</body>
</html>
