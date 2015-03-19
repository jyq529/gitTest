<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <!--<link rel="icon" href="../../favicon.ico">-->

  <!-- <title>信息详情</title> -->

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
  <script src="assets/js/html5shiv.min.js"></script>
  <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!--[if lt IE 9]>
  <link href="assets/css/lt-ie9.css" type="text/css" rel="stylesheet">
  <![endif]-->
  <script type="text/javascript" src="${ctx}/static/js/work/rpguestdata/guest.js"></script>
  <script src="${ctx}/static/js/time.js"></script>
  <script src="${ctx}/static/js/datePicker/WdatePicker.js"></script>
</head>
<!-- 正文标题 -->
<title_area>访客月统计图表</title_area>
<query_area>
	<div style="float:left; width:180px;">
		<label class="control-label" for="guest_queryTime">月份</label>
		<input id="guest_queryTime" onfocus="WdatePicker({dateFmt:'yyyy-MM',maxDate:'%y-%M-%d'})" data-options="prompt: ''"  class='Wdate' 
			readonly="readonly" style="float:left;width:75px;height:26px;border:1px solid #ccc;"/>
	</div>
</query_area>
<query_button_area>
	<button type="submit" class="btn btn-warning" id="guest_query" onclick="guestQueryConditions();">查询</button>&nbsp;&nbsp;
	<button class="btn btn-default" id="guest_resetBtn" onclick="guestResetform();">重置</button>
</query_button_area>