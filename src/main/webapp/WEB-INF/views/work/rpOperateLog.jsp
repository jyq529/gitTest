<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/layouts/public.jsp"%>
<!DOCTYPE html>
<head>
<script src="${ctx}/static/js/work/rpOperateLog.js"></script>
<script src="${ctx}/static/js/time.js"></script>
<script src="${ctx}/static/js/datePicker/WdatePicker.js"></script>
</head>

<!-- 正文标题 -->
<title_area>系统日志管理</title_area>

<!-- 正文 -->
<query_area><!-- 命名与模态窗口区分 -->
	<c:choose> 
		<c:when test="${userInMem.roleId == '1'}">
			<div style="float:left; width:140px;">
				<label class="control-label" for="userName">用户名</label>
				<input class="form-control" id="userName" style="float:left;width:80px;"/>
			</div>
			<div style="float:left; width:180px;">
				<label class="control-label" for="userTel">用户手机号</label>
				<input class="form-control" id="userTel" style="float:left;width:95px;"/>
			</div>
		</c:when>
	</c:choose>
	<div style="float:left; width:170px;">
		<label for="action">操作类型</label>
		<select style="float:left;width:98px;" class="form-control" id="action">
			<option value="">--请选择--</option>
			<option value="登录">登录</option>
			<option value="修改密码">修改密码</option>
			<option value="重置密码">重置密码</option>
		</select>
	</div>
	<div style="float:left; width:170px;">
		<label class="control-label" for="beginTime">创建时间</label>
		<input id="beginTime" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'endTime\',{d:-7});}',maxDate:'#F{$dp.$D(\'endTime\')||\'%y-%M-%d  %H:%m:%s\'}'})" data-options="prompt: ''"  class='Wdate' 
			readonly="readonly" style="float:left;width:100px;height:26px;border-radius:0px;border:1px solid #ccc;"/>
	</div>
	<div style="float:left; width:130px;">
		<label class="control-label" for="endTime">至</label>
		<input  id="endTime" onfocus="var date = getMaxDate(); WdatePicker({dateFmt:'yyyy-MM-dd',maxDate:date,minDate:'#F{$dp.$D(\'beginTime\')}'})" data-options="prompt: ''" class='Wdate'  
			readonly="readonly" style="float:left;width:100px;height:26px;border-radius:0px;border:1px solid #ccc;align:left;margin-right: 5px;"/>&nbsp;&nbsp;
	</div>
</query_area>

<query_button_area>
	<button type="submit" class="btn btn-warning" id="query" onclick="refreshRpOperateLog(null,true);">查询</button>&nbsp;&nbsp;
	<button class="btn btn-default" id="resetBtn" onclick="resetform();">重置</button>&nbsp;&nbsp;
	<c:choose> 
	<c:when test="${userInMem.roleId == '1'}">
	<button type="submit" class="btn btn-default" id="delete" onclick="deleteRpOperateLog();">删除</button>
	</c:when>
	</c:choose>
</query_button_area>




<grid_area>
	<col style="width:12%;"/>
	<col style="width:12%;"/>
	<col style="width:12%;"/>
	<col style="width:15%;"/>
	<col style="width:15%;"/>
	<col style="width:12%;"/>
	<col style="width:25%;"/>
	<%-- <col style="width:20%;"/> --%>
	<thead><tr><th>用户名</th><th>用户电话</th><th>用户角色</th><th>用户IP</th><th>创建时间</th><th>用户动作</th><th>具体内容</th></tr></thead>
	<tbody id="rpOperateLog_tbody"></tbody>
</grid_area>

<grid_page_area>
	<ul id="rpOperateLog_page"></ul>
</grid_page_area>



<!-- <modal_area_header>
删除管理
</modal_area_header>

<modal_area_content>
	<div style="float:left;">
		<label class="control-label" for="deleteBeginTime">开始时间&nbsp;&nbsp;</label>
		<input id="deleteBeginTime" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'endTime\',{d:-7});}',maxDate:'#F{$dp.$D(\'endTime\')||\'%y-%M-%d  %H:%m:%s\'}'})" data-options="prompt: ''"  class='Wdate' 
			readonly="readonly" style="float:left;width:100px;height:26px;border-radius:0px;border:1px solid #ccc;"/>
	</div>
	<div style="float:left;">	  
	    <label class="control-label" for="deleteEndTime">至&nbsp;&nbsp;</label>
		<input  id="deleteEndTime"  onfocus="var date = getMaxDate(); WdatePicker({dateFmt:'yyyy-MM-dd',maxDate:date,minDate:'#F{$dp.$D(\'beginTime\')}'})" data-options="prompt: ''" class='Wdate'  
			readonly="readonly" style="float:left;width:100px;height:26px;border-radius:0px;border:1px solid #ccc;align:left;"/>&nbsp;&nbsp;
	</div>
</modal_area_content>


<modal_area_button>
<input type="submit" class="btn btn-warning" id="deleteSubmit" value="确定" onclick="saveDelete();">
<input type="button" class="btn btn-default" id="cancelButton" value="关闭" onclick="cancelDelete();">
</modal_area_button>
 -->


<modal_area_others>
	<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-backdrop="static" id="rpOperateLog_modal">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header" style="height:35px; padding:10px;">
				<font id="deleteModalTitle">删除管理</font>
					<button id="close_icon" type="button" class="close btn-remove" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></button>
				</div>
				<div class="modal-body" style="height:100px;">
					<table>
					<tr><td width="25%">开始时间:</td>
					<td width="45%">
						<input id="deleteBeginTime" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'deleteEndTime\',{d:-7});}',maxDate:'#F{$dp.$D(\'deleteEndTime\')||\'%y-%M-%d  %H:%m:%s\'}'})" data-options="prompt: ''"  class='Wdate' 
								readonly="readonly" style="float:left;width:100px;height:26px;border-radius:0px;border:1px solid #ccc;"/>							
						</td></tr>
					<tr><td>&nbsp;</td></tr>	
					<tr><td width="25%">结束时间:&nbsp;&nbsp;</td>
					<td width="45%">
						<input  id="deleteEndTime"  onfocus="var date = getMaxDate(); WdatePicker({dateFmt:'yyyy-MM-dd',maxDate:date,minDate:'#F{$dp.$D(\'deleteBeginTime\')}'})" data-options="prompt: ''" class='Wdate'  
								readonly="readonly" style="float:left;width:100px;height:26px;border-radius:0px;border:1px solid #ccc;align:left;"/>&nbsp;&nbsp;							
					</td></tr>
					</table>		
		  		</div>
				<div class="modal-footer" style="height:60px; padding:10px;">
					<input type="submit" class="btn btn-warning" id="deleteSubmit" value="确定" onclick="saveDelete();">
					<input type="button" class="btn btn-default" id="cancelButton" value="取消" onclick="cancelDelete();">
				</div>
			</div>
		</div>
	</div>
</modal_area_others>
