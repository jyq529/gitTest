<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/layouts/public.jsp"%>
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
  <script type="text/javascript" src="${ctx}/static/js/work/clientinfo/detail.js"></script>
</head>


<%-- <%=request.getAttribute("userInMem") %> --%>
<!-- 正文标题 -->
<title_area>信息详情</title_area>
<c:choose>
	<c:when test="${userInMem.roleId=='1'}">
		<!-- 搜索框 -->
		<query_area>
			<div style="float:left;width:120px;">
				<label class="control-label" for="query_clientName">姓名</label>
				<input style="float:left;width:80px;" type="text" class="form-control" id="query_clientName" name="clientName">
			</div>
			<div style="float:left;width:165px;">
				<label class="control-label" for="query_phoneNum">手机号码</label>
			   	<input style="float:left;width:95px;" type="text" class="form-control" id="query_phoneNum" name="phoneNum">
			</div>
			<!-- <div style="float:left;width:220px;">
				<label class="control-label" for="query_idCard">身份证号</label>
				<input style="float:left;width:145px;" type="text" class="form-control" id="query_idCard" name="idCard">
			</div> -->
			<!-- <div style="float:left; width:260px;">
				<label style="float:left;height:34px;line-height:34px;" class="control-label" for="query_storeName">商户名称</label>
				<input style="float:left;width:140px;" type="text" class="form-control" id="query_storeName" name="storeName">
			</div> -->
		</query_area>
		<query_button_area>
			<button type="submit" class="btn btn-warning" id="detail_query" onclick="detailQueryConditions();">查询</button>&nbsp;&nbsp;
			<button class="btn btn-default" id="detail_resetBtn" onclick="detailResetform();">重置</button>
		</query_button_area>
		<!-- 分页区域 -->
		<grid_page_area>
			<div id="detail_list"></div>
			<ul id="detail_page"></ul>
		</grid_page_area>
	</c:when>
</c:choose>



<!-- 列表 -->
<grid_area>
	<col style="width:20%;"/>
	<col style="width:20%;"/>
	<col style="width:20%;"/>
	<col style="width:20%;"/>
	<col style="width:20%;"/>
	<thead>
		<tr>
			<th>姓名</th>
			<th>手机号码</th>
			<th>店员电话</th>
			<th>总机号码</th>
			<th>直线号码</th>
		</tr>
	</thead>
	<tbody id="detail_data_tbody"></tbody>
</grid_area>


