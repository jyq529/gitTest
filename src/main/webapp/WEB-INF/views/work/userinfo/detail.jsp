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

<!--  <title>信息详情</title> -->

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="assets/js/html5shiv.min.js"></script>
  <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->

<!--[if lt IE 9]>
  <link href="assets/css/lt-ie9.css" type="text/css" rel="stylesheet">
  <![endif]-->
<script type="text/javascript"
	src="${ctx}/static/js/work/user/detail.js"></script>
</head>
<!-- 正文标题 -->
<title_area>用户管理</title_area>
<!-- 搜索框 -->
<query_area>
<div style="float: left; width: 200px;">
	<label class="control-label" for="query_userName">用户名</label> <input
		style="float: left; width: 140px;" type="text" class="form-control"
		id="query_userName" name="clientName">
</div>
<div style="float: left; width: 210px;">
	<label class="control-label" for="query_phoneNum">手机号码</label> <input
		style="float: left; width: 140px;" type="text" class="form-control"
		id="query_phoneNum" name="phoneNum">
</div>
<div style="float:left;width:170px;">
	<label for="query_roleId">角色</label>
	<select style="float:left;width:110px;" class="form-control" id="query_roleId">
		<option value="" selected="selected">--请选择--</option>
		<c:forEach items="${roleList}" var="role">
			<option value="${role.id}" >${role.name}</option>
		</c:forEach>
	</select>
</div>
</query_area>
<query_button_area>
<button type="submit" class="btn btn-warning" id="detail_query"
	onclick="detailQueryConditions();">查询</button>
<button class="btn btn-default" id="detail_resetBtn"
	onclick="detailResetform();">重置</button>
</query_button_area>
<!-- 列表 -->
<grid_area>
<col style="width: 20%;" />
<col style="width: 20%;" />
<col style="width: 20%;" />
<col style="width: 20%;" />
<%-- <col style="width:250px;"/> --%>
<thead>
	<tr>
		<th>用户名</th>
		<th>手机号码</th>
		<th>角色</th>
		<!-- 		<th>区域</th> -->
		<th>操作</th>
	</tr>
</thead>
<tbody id="detail_data_tbody"></tbody>
</grid_area>
<!-- 分页区域 -->
<grid_page_area>
<div id="detail_list"></div>
<ul id="detail_page"></ul>
</grid_page_area>

<modal_area_others>
<div id="modifyRoleModal" class="modal fade bs-example-modal-sm"
	tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
	aria-hidden="true" data-backdrop="static">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header" style="height: 35px; padding: 10px;">
				<font id="deleteModalTitle">修改角色</font>
				<button id="close_icon" type="button" class="close btn-remove"
					data-dismiss="modal">
					<span class="glyphicon glyphicon-remove"></span>
				</button>
			</div>
			<div class="modal-body" style="height: 100px;">
				<!-- 隐藏域，选中用户的id -->
				<input id="userId" type="hidden" />
				<table>
					<tr>
						<td width="25%" align="right" style="padding-right: 10px;">角色</td>
						<td width="45%"><select class="form-control" id="sel_role"
							name="">
						</select></td>
					</tr>
				</table>
			</div>
			<div class="modal-footer" style="height: 60px; padding: 10px;">
				<input id="btn_modi_subm" type="button" class="btn btn-warning"
					value="确定" /> <input id="btn_modi_cancle" type="button"
					class="btn btn-default" value="取消" />
			</div>
		</div>
	</div>
</div>
</modal_area_others>

<!-- 修改角色窗口 -->
<%-- <div class="modal fade" id="modifyRoleModal" tabindex="-1"
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
								class="form-control validate[maxSize[50]]"
								id="loginUserName_header" /><br /></td>
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
</div> --%>
