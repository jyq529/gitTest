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
  <script type="text/javascript" src="${ctx}/static/js/work/appinfo/appfeedback.js"></script>
  <script src="${ctx}/static/js/time.js"></script>
  <script src="${ctx}/static/js/datePicker/WdatePicker.js"></script>
</head>
<!-- 正文标题 -->
<title_area>APP反馈上报</title_area>
<query_area>
	<div style="float:left;width:200px;">
		<label class="control-label" for="appFeedbackUserTel">用户电话</label>
		<input class="form-control" id="appFeedbackUserTel" style="float:left;width:130px;"/>
	</div>
	<div style="float:left;width:220px;">
		<label class="control-label" for="beginTime">反馈时间</label>
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
	<button type="submit" class="btn btn-warning" id="appFeedback_query" onclick="appFeedbackQueryConditions();">查询</button>&nbsp;&nbsp;
	<button class="btn btn-default" id="appFeedback_resetBtn" onclick="appFeedbackResetform();">重置</button>
</query_button_area>
<!-- 列表 -->
<grid_area>
	<col style="width:25%;"/>
	<col style="width:25%;"/>
	<col style="width:50%;"/>
	<thead>
		<tr>
			<th>用户电话</th>
			<th>反馈内容</th>
			<th>反馈时间</th>
		</tr>
	</thead>
	<tbody id="appFeedback_data_tbody"></tbody>
</grid_area>
<!-- 分页区域 -->
<grid_page_area>
	<div id="appFeedback_list"></div>
	<ul id="appFeedback_page"></ul>
</grid_page_area>