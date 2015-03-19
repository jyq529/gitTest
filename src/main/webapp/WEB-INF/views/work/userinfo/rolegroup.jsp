<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<head>
<link rel="stylesheet" href="${ctx}/static/js/zTree_v3/css/zTreeStyle/zTreeStyle.css" >
<script src="${ctx}/static/js/zTree_v3/js/jquery.ztree.all-3.5.min.js"></script>
<script src="${ctx}/static/js/work/user/rolegroup.js"></script>
 </head>

<!-- 正文标题 -->
<title_area>权限管理</title_area>

<query_area><!-- 命名与模态窗口区分 -->
	<div style="float:left;width:170px;">
		<label class="control-label" for="role_name">角色名称</label>
		<input class="form-control" id="role_name" style="float:left;width:80px;"/>
	</div>
</query_area>
	
<query_button_area>
    <button type="submit" class="btn btn-warning" id="query" onclick="roleGroupQueryConditions();">查询</button>&nbsp;&nbsp;
	<button class="btn btn-default" id="resetBtn" onclick="resetform();">重置</button>&nbsp;&nbsp;
	<button class="btn btn-warning" id="add_roleGroup" onclick="openRoleGroup();">新建</button>
</query_button_area>

<grid_area>
	<col style="width:25%;"/>
	<col style="width:55%;"/>
	<col style="width:20%;"/>	
	<thead><tr><th>角色名称</th><th>备注</th><th>操作</th></tr></thead>
	<tbody id="rolegroup_tbody"></tbody>
</grid_area>


<grid_page_area>
	<ul id="rolegroup_page"></ul>
</grid_page_area>

<modal_area_header>
权限分配
</modal_area_header>

<modal_area_content>
</modal_area_content>

<modal_area_button>
保存
</modal_area_button>


<modal_area_others>
	<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" data-backdrop="static"  aria-hidden="true" id="menutreemodal">
	  <div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header" style="height:45px;">
					权限分配
					<button id="permissions_close_icon" type="button" class="close btn-remove" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></button>
				</div>
				<div class="modal-body">
					<input type="text" id="roleId" style="display:none;"/>
					<ul id="module_auth_tree" class="ztree">
					</ul>
				</div>
				<div class="modal-footer">
					<img id="waitingImg_permissions" src="${ctx}/static/images/waiting.gif" style="display:none;">
					<button class="btn btn-warning" id="btn_save_permissions" onclick="savePermissions();">保存</button>
					<button id="modiPermissions_cancelBtn" type="button"
						class="btn btn-default" data-dismiss="modal">取消</button>
				</div>
			</div>
	  </div>
	</div>
	
<div class="modal fade" id="modifyRoleGroupInfoModal" tabindex="-1"
	role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
	data-backdrop="static">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button id="modiRoleGroup_close_icon" type="button"
					class="close btn-remove" data-dismiss="modal">
					<span class="glyphicon glyphicon-remove"></span>
				</button>
				<font id="roleGroup_myModalLabel">新建角色组信息</font>
				<!-- <h4 class="modal-title" id="roleGroup_myModalLabel">新建角色组信息</h4> -->
			</div>
			<div class="modal-body">
				<form class="form-horizontal" role="form" id="fo_modi_roleGroup" onsubmit="return false">
						<input type="hidden" id="roleGroup_id" name="id"/>
						<div class="form-group">
							<label for="roleGroupName" class="col-sm-3 control-label">角色名称：</label>
							<div class="col-sm-8">
								<input name="name" class="form-control validate[required,maxSize[20]]" id="roleGroupName" maxlength="20"/>
							</div>
						</div>
						<div class="form-group">
							<label for="roleGroupRemark" class="col-sm-3 control-label">备注：</label>
							<div class="col-sm-8">
								<textarea class="form-control validate[maxSize[20]]" style="resize:none;width:100%;height:90px;" id="roleGroupRemark"
										name="remark" data-errormessage-range-underflow="备注最大长度为20个字符" maxlength="20"></textarea>
							</div>
						</div>
					<div class="modal-footer">
						<img id="waitingImg_roleGroup" src="${ctx}/static/images/waiting.gif" style="display:none;">
						<button id="btn_save_roleGroupInfo" type="submit"
							class="btn btn-warning">保存</button>
						<button id="modiRoleGroup_cancelBtn" type="button"
							class="btn btn-default" data-dismiss="modal">取消</button>
					</div>
				</form>
			</div>
			<%-- <form id="fo_modi_roleGroup" onsubmit="return false">
				<div class="modal-body">
					<table id="roleGroupfoTable"
						style="margin-left: 80px; text-align: center;">
						<input type="hidden" id="roleGroup_id" name="id"/>
						<!-- <tr>
							<td class="blank"><input type="hidden" name="" /></td>
						</tr> -->
						<tr>
							<td class="blank" style="width:75px"><label for="roleGroupName">角色名称：</label></td>
							<!-- 名字长一些，避免饮用header的其他页面出现重名 -->
							<td class="blank"><input name="name"
								class="form-control validate[required,maxSize[20]]"
								id="roleGroupName" maxlength="20"/><br /></td>
						</tr>
						<tr>
							<td class="blank" style="width:75px"><label for="roleGroupRemark">备注：</label></td>
							<!-- 名字长一些，避免饮用header的其他页面出现重名 -->
							<td class="blank">
								<textarea class="form-control validate[maxSize[20]]" style="resize:none;width:100%;height:90px;" id="roleGroupRemark"
								name="remark" maxlength="20" data-errormessage-range-underflow="备注最大长度为20个字符"></textarea>
							</td>
						</tr>
					</table>
				</div>
				<div class="modal-footer">
					<img id="waitingImg_roleGroup" src="${ctx}/static/images/waiting.gif" style="display:none;">
					<button id="btn_save_roleGroupInfo" type="submit"
						class="btn btn-warning">保存</button>
					<button id="modiRoleGroup_cancelBtn" type="button"
						class="btn btn-default" data-dismiss="modal">取消</button>
				
				</div>
			
			</form> --%>
		</div>
	</div>
</div>
<!-- 新建修改角色组信息窗口 -->
<%-- <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-backdrop="static" id="modifyRoleGroupInfoModal">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header" style="height:35px; padding:10px;">
				<font id="roleGroup_myModalLabel">新建角色组信息</font>
					<button id="modiRoleGroup_close_icon" type="button" class="close btn-remove" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></button>
				</div>
				<div class="modal-body" style="height:100px;">
					<table>
					<tr><td width="25%">角色名称:</td>
					<td width="45%">
						<input name="name" class="form-control validate[required,maxSize[20]]" id="roleGroupName" maxlength="20"/>							
						</td></tr>
					<tr><td>&nbsp;</td></tr>	
					<tr><td width="25%">备注:&nbsp;&nbsp;</td>
					<td width="45%">
						<textarea class="form-control validate[maxSize[20]]" style="resize:none;width:100%;height:90px;" id="roleGroupRemark"
										name="remark" data-errormessage-range-underflow="备注最大长度为20个字符" maxlength="20"></textarea>&nbsp;&nbsp;							
					</td></tr>
					</table>		
		  		</div>
				<div class="modal-footer" style="height:60px; padding:10px;">
					<img id="waitingImg_roleGroup" src="${ctx}/static/images/waiting.gif" style="display:none;">
						<button id="btn_save_roleGroupInfo" type="submit"
							class="btn btn-warning">保存</button>
						<button id="modiRoleGroup_cancelBtn" type="button"
							class="btn btn-default" data-dismiss="modal">取消</button>
				</div>
			</div>
		</div>
	</div> --%>
</modal_area_others>

