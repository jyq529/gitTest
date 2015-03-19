<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<head>
<script src="${ctx}/static/js/work/clientManager.js"></script>
<script src="${ctx}/static/js/time.js"></script>
<%-- <script src="${ctx}/static/js/datePicker/WdatePicker.js"></script> --%>
</head>

<!-- 正文标题 -->
<title_area>客户经理信息</title_area>

<!-- 正文 -->
<query_area><!-- 命名与模态窗口区分 -->
	<div style="float:left;width:120px;">
		<label class="control-label" for="managerName">姓名</label>
		<input class="form-control" id="managerName" style="float:left;width:80px;"/>
	</div>
	<div style="float:left;width:135px;">
		<label class="control-label" for="managerTel">电话</label>
		<input class="form-control" id="managerTel" style="float:left;width:95px;"/>
	</div>
	<div style="float:left;width:160px;">
		<label class="control-label" for="workNo">工号</label>
		<input class="form-control" id="workNo" style="float:left;width:120px;"/>
	</div>
</query_area>

<query_button_area>
	<button type="submit" class="btn btn-warning" id="query" onclick="refreshClientManager(null,true);">查询</button>&nbsp;&nbsp;
	<button class="btn btn-default" id="resetBtn" onclick="resetform();">重置</button>
</query_button_area>

<grid_area>
	<col style="width:25%;"/>
	<col style="width:36%;"/>
	<col style="width:25%;"/>
	<col style="width:25%;"/>
	<thead><tr><th>姓名</th><th>电话</th><th>工号</th><th>所属区域</th></tr></thead>
	<tbody id="clientManager_tbody"></tbody>
</grid_area>


<grid_page_area>
	<ul id="clientManager_page"></ul>
</grid_page_area>




<modal_area_header><font id="addModalHeader"></font></modal_area_header>

<modal_area_content>
				<form id="loginAccountForm" onsubmit="return false">
					<input type="hidden" name="id" id="idHiddenInput"/><!-- 如果是修改需要传id -->
					<table class="table" style="text-align:center;margin-top: 20px">
						<tr><td width="25%">用户名：</td><td width="45%">
						<input class="form-control validate[required,maxSize[200],custom[loginusername]]" id="loginAccountName" name="name" maxlength="50" /></td><td width="35%">
						</td></tr>
						<tr><td>备注：</td><td>
						<textarea class="form-control validate[maxSize[200]]" style="resize:none;width:100%;height:90px;" id="loginAccountRemark"
						name="remark" maxlength="200"></textarea>
						</td><td></td></tr>
					</table>
</modal_area_content>
<modal_area_button>
					<!-- <button type="submit" class="btn btn-primary" id="save" onclick="saveLoginAccount();">保存</button>&nbsp;&nbsp; -->
					<button  id="saveBtn" type="submit" class="btn btn-primary">保存</button>&nbsp;&nbsp;
					<img id="waitingImg" src="${ctx}/static/images/waiting.gif" style="display:none">
					<button id="cancelBtn" type="button" class="btn btn-default" id="cancel" onclick="closeMyModal();">取消</button>&nbsp;&nbsp;
				</form>
</modal_area_button>

<modal_area_others>

<%-- <!-- 新建、修改 -->
<div class="modal fade bs-example-modal-lg" id="addModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header" style="height:45px;" id="addModalHeader">
				</div>
				<div class="modal-body" id="addModalBody" style="overflow-y:auto;height:230px;">	
				<form id="loginAccountForm" onsubmit="return false">
					<input type="hidden" name="id" id="idHiddenInput"/><!-- 如果是修改需要传id -->
					<table class="table" style="text-align:center;margin-top: 20px">
						<tr><td width="25%">用户名：</td><td width="45%">
						<input class="form-control validate[required,maxSize[200],custom[loginusername]]" id="loginAccountName" name="name" maxlength="50" /></td><td width="35%">
						</td></tr>
						<tr><td>备注：</td><td>
						<textarea class="form-control validate[maxSize[200]]" style="resize:none;width:100%;height:90px;" id="loginAccountRemark"
						name="remark" maxlength="200"></textarea>
						</td><td></td></tr>
					</table>
				</div>
				<div class="modal-footer">
					<!-- <button type="submit" class="btn btn-primary" id="save" onclick="saveLoginAccount();">保存</button>&nbsp;&nbsp; -->
					<button  id="saveBtn" type="submit" class="btn btn-primary">保存</button>&nbsp;&nbsp;
					<img id="waitingImg" src="${ctx}/static/images/waiting.gif" style="display:none">
					<button id="cancelBtn" type="button" class="btn btn-default" id="cancel" onclick="closeMyModal();">取消</button>&nbsp;&nbsp;
				</div>
				</form>
			</div>
		</div>
</div> --%>

<!-- 权限管理 -->
<div class="modal fade bs-example-modal-lg" id="permissionModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header" style="height:45px;" id="permissionModalBody">
					<!-- <button type="button" class="close btn-remove" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></button> -->
				</div>
				<div class="modal-body" style="overflow-y:auto;height:580px;">
				新增权限：<select id="pmsList" onchange="reloadTable();"></select><br/><br/>
				<!-- 创建表头 -->
				<table  class="table table-bordered table-hover" id="datagrid" style="table-layout: fixed" border=0>
					<thead><tr><th>微信号</th><th>名称</th><th>介绍</th><th>操作</th></tr></thead>
					<tbody id="permission_tbody"></tbody>
				</table>
				</div>
				<div class="modal-footer">
					<button type="submit" class="btn btn-primary" id="savePermission" onclick="savePermission();">保存</button>&nbsp;&nbsp;
					<img id="permission_waitingImg" src="${ctx}/static/images/waiting.gif" style="display:none">
					<button type="submit" class="btn btn-default" id="cancelPermission" onclick="closeModal('permissionModal');">取消</button>&nbsp;&nbsp;
				</div>
			</div>
		</div>
	</div>
</modal_area_others>

