<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><sitemesh:write property='title' />微信管理平台</title>

<!-- Bootstrap -->
<link href="${ctx}/static/css/bootstrap_div.css" rel="stylesheet">
<link href="${ctx}/static/css/bootstrap.min.css" rel="stylesheet">
<!-- manage css -->
<link href="${ctx}/static/css/manage-theme.css" rel="stylesheet">
<!-- head css -->
<link href="${ctx}/static/css/header.css" rel="stylesheet">
<link href="${ctx}/static/css/custom.css" rel="stylesheet">
<!-- body css -->
<link href="${ctx}/static/css/common.css" rel="stylesheet">
<!-- login -->
<link href="${ctx}/static/jquery-validation/1.11.1/validate.css" type="text/css" rel="stylesheet" />
<!-- check-->
<link href="${ctx}/static/js/jquery-validation-engine-ciaoca-2.6.2/css/validationEngine.jquery.css" rel="stylesheet">
	<script src="${ctx}/static/js/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="${ctx}/static/js/bootstrap.min.js"></script>
	<script src="${ctx}/static/js/bootstrap-dialog.js"></script>
	<script src="${ctx}/static/js/bootstrap-paginator.js"></script>
	<script type="text/javascript" src="${ctx}/static/js/manage.js"></script>
	<script type="text/javascript" src="${ctx}/static/js/base.js"></script>
	<script
    src="${ctx}/static/js/jquery-validation-engine-ciaoca-2.6.2/js/jquery.validationEngine-zh_CN.js"></script>
    <script
    src="${ctx}/static/js/jquery-validation-engine-ciaoca-2.6.2/js/jquery.validationEngine-jacy-1.01.min.js"></script>
	<script type="text/javascript" src="${ctx}/static/js/bootstrap-tooltip.js"></script>
	<script type="text/javascript" src="${ctx}/static/js/bootstrap-popover.js"></script>
	<sitemesh:write property='head' />
	
<script type="text/javascript">
var ctx = '${ctx}';
</script>
</head>

<body>
	<%@ include file="/WEB-INF/layouts/header.jsp"%>
	
	<div class="container-fluid">
		<sitemesh:write property='body' />
	</div>
	<%@ include file="/WEB-INF/layouts/footer.jsp"%>
</body>
</html>