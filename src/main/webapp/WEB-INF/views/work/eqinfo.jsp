<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/layouts/public.jsp"%>
<!DOCTYPE html>
<head>
<script src="${ctx}/static/js/work/eqinfo.js"></script>
<script src="${ctx}/static/js/time.js"></script>
<script src="${ctx}/static/js/datePicker/WdatePicker.js"></script>
</head>


<!-- 正文标题 -->
<title_area>设备信息</title_area>

<!-- 正文 -->
<query_area><!-- 命名与模态窗口区分 -->
	<div style="float:left;width:200px;">
		<label class="control-label" for="equinfo_mac">设备MAC</label>
		<input class="form-control" id="equinfo_mac" style="float:left;width:130px;"/>
	</div>
	<c:choose> 
	<c:when test="${userInMem.roleId == '1'}">
	<div style="float:left;width:180px;">
		<label class="control-label" for="userTel">用户手机号</label>
		<input class="form-control" id="userTel" style="float:left;width:95px;"/>
	</div>
	</c:when>
	</c:choose>
	<div style="float:left;width:165px;">
		<label class="control-label" for="workModel">工作模式</label>
		<select style="float:left;width:98px;" class="form-control" id="workModel">
			<option value="">--请选择--</option>
			<option value="WAN">WAN</option>
			<option value=3G>3G</option>
		</select>
	</div>
	<div style="float:left;width:245px;">
		<label class="control-label" for="beginTime">最后使用时间</label>
		<input id="beginTime" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'#F{$dp.$D(\'endTime\',{d:-7});}',maxDate:'#F{$dp.$D(\'endTime\')||\'%y-%M-%d  %H:%m:%s\'}'})" data-options="prompt: ''"  class='Wdate' 
			readonly="readonly" style="float:left;width:150px;height:26px;border:1px solid #ccc;"/>
	</div>
	<div style="float:left;width:210px;">
		<label class="control-label" for="endTime">至&nbsp;&nbsp;</label>
		<input  id="endTime" onfocus="var date = getMaxDate(); WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:date,minDate:'#F{$dp.$D(\'beginTime\')}'})" data-options="prompt: ''" class='Wdate'  
			readonly="readonly" style="float:left;width:150px;height:26px;border:1px solid #ccc;align:left;"/>&nbsp;&nbsp;
	</div>
</query_area>

<query_button_area>
	<button type="submit" class="btn btn-warning" id="query" onclick="refreshEqinfo(null,true);">查询</button>&nbsp;&nbsp;
	<button class="btn btn-default" id="resetBtn" onclick="resetform();">重置</button>
</query_button_area>

<grid_area>
	<col style="width:130px;"/>
	<col style="width:120px;"/>
	<col style="width:120px;"/>
	<col style="width:80px;"/>
	<col style="width:130px;"/>
	<col style="width:80px;"/>
	<c:choose> 
	<c:when test="${userInMem.roleId == '1'}">
	<col style="width:100px;"/>
	</c:when>
	</c:choose>
	<col style="width:100px;"/>
	<col style="width:100px;"/>
	<col style="width:110px;"/>
	<col style="width:100px;"/>
	<thead><tr><th>设备MAC</th><th>IMEI</th><th>IMSI</th><th style="padding-left:2px;padding-right:2px;">工作模式</th><th>最后使用时间</th><th style="padding-left:2px;padding-right:2px;">设备状态</th>
	<c:choose> 
	<c:when test="${userInMem.roleId == '1'}">
	<th>用户手机号</th>
	</c:when>
	</c:choose>
	<th>流量卡号码</th><th>总流量值(M)</th><th>已使用流量(M)</th><th>经理姓名</th></tr></thead>
	<tbody id="eqinfo_tbody"></tbody>
</grid_area>


<grid_page_area>
	<ul id="eqinfo_page"></ul>
</grid_page_area>



