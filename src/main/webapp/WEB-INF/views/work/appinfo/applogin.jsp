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
  <script type="text/javascript" src="${ctx}/static/js/work/appinfo/applogin.js"></script>
  <script src="${ctx}/static/js/time.js"></script>
  <script src="${ctx}/static/js/datePicker/WdatePicker.js"></script>
</head>
<!-- 正文标题 -->
<title_area>APP登录上报</title_area>
<!-- 搜索框 -->
<query_area>
	<div style="float:left;width:200px;">
		<label class="control-label" for="appLoginUserIdy">用户标识</label>
		<input class="form-control" id="appLoginUserIdy" style="float:left;width:130px;"/>
	</div>
	<div style="float:left;width:220px;">
		<label class="control-label" for="beginTime">上报时间</label>
		<input id="beginTime" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'#F{$dp.$D(\'endTime\',{d:-7});}',maxDate:'#F{$dp.$D(\'endTime\')||\'%y-%M-%d  %H:%m:%s\'}'})" data-options="prompt: ''"  class='Wdate' 
			readonly="readonly" style="float:left;width:150px;height:26px;border:1px solid #ccc;"/>
	</div>
	<div style="float:left;width:200px;">
		<label class="control-label" for="endTime">至&nbsp;&nbsp;</label>
		<input  id="endTime" onfocus="var date = getMaxDate(); WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:date,minDate:'#F{$dp.$D(\'beginTime\')}'})" data-options="prompt: ''" class='Wdate'  
			readonly="readonly" style="float:left;width:150px;height:26px;border:1px solid #ccc;align:left;"/>&nbsp;&nbsp;
	</div>
</query_area>
<query_button_area>
	<button type="submit" class="btn btn-warning" id="appLogin_query" onclick="appLoginQueryConditions();">查询</button>&nbsp;&nbsp;
	<button class="btn btn-default" id="appLogin_resetBtn" onclick="appLoginResetform();">重置</button>
</query_button_area>
<!-- 列表 -->
<grid_area>
	<col style="width:30%;"/>
	<col style="width:20%;"/>
	<col style="width:15%;"/>
	<col style="width:15%;"/>
	<col style="width:20%;"/>
	<thead>
		<tr>
			<th>用户标识</th>
			<th>上报时间</th>
			<th>手机系统类型</th>
			<th>APP版本号</th>
			<th>用户手机端MAC</th>
		</tr>
	</thead>
	<tbody id="appLogin_data_tbody"></tbody>
</grid_area>
<!-- 分页区域 -->
<grid_page_area>
	<div id="appLogin_list"></div>
	<ul id="appLogin_page"></ul>
</grid_page_area>