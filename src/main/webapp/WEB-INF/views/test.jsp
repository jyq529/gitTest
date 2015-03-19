<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript">
	var ctx = "${ctx}";
	var serialNum = "${serialNum}";
</script>
<script type="text/javascript"
	src="${ctx}/static/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript">
	$(function() {
		console.log("init");
		$.ajax({
			type : 'POST',
			url : "test2",
			data : {},
			async : true,
			success : function(result) {
				console.log("yes 有权限");
			},
			error : function() {
				console.log("2222");
			}
		});
	});
</script>
<title>Insert title here</title>
</head>
<body>

</body>
</html>