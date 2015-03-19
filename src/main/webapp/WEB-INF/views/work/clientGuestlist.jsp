<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<head>
<script src="${ctx}/static/js/work/clientGuestlist.js"></script>
<script src="${ctx}/static/js/time.js"></script>
<script src="${ctx}/static/js/datePicker/WdatePicker.js"></script>
</head>

<!-- 正文标题 -->
<title_area>访客信息列表</title_area>

<!-- 正文 -->
<query_area><!-- 命名与模态窗口区分 -->
	<div style="float:left;width:140px;">
		<label class="control-label" for="queryDate">日期</label>
		<input id="queryDate" onfocus="WdatePicker({onpicked:clickDatehideOnlineStatus(),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})" data-options="prompt: ''"  class='Wdate' 
			readonly="readonly" style="float:left;width:100px;height:26px;border:1px solid #ccc;"  />
	</div>
	<div style="float:left;width:200px;">
		<label class="control-label" for="eqMac">设备MAC</label>
		<input class="form-control" id="eqMac" style="float:left;width:130px;"/>
	</div>
	<div style="float:left;width:200px;">
		<label class="control-label" for="guestMac">访客MAC</label>
		<input class="form-control" id="guestMac" style="float:left;width:130px;"/>
	</div>
	<div style="float:left;width:180px;" id="onlineStatus">
		<label for="guestStatus">在线状态</label>
		<select style="float:left;width:98px;" class="form-control" id="guestStatus"  >
			<option value="">--请选择--</option>
			<option value="online">在线</option>
			<option value="offline">离线</option>
		</select>
	</div>
	<!-- <div style="float:left; width:200px;">
		<label style="float:left;width:80px;height:34px;line-height:34px;" class="control-label" for="beginTime">创建时间:&nbsp;&nbsp;</label>
		<input id="beginTime" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'endTime\',{d:-7});}',maxDate:'#F{$dp.$D(\'endTime\')||\'%y-%M-%d  %H:%m:%s\'}'})" data-options="prompt: ''"  class='Wdate' 
			readonly="readonly" style="float:left;width:100px;height:34px;border-radius:4px;border:1px solid #ccc;"/>
	</div>
	<div style="float:left; width:138px;">
		<label style="float:left;text-align:center;width:18px;height:34px;line-height:34px;" class="control-label" for="endTime">至&nbsp;&nbsp;</label>
		<input  id="endTime" onfocus="var date = getMaxDate(); WdatePicker({dateFmt:'yyyy-MM-dd',maxDate:date,minDate:'#F{$dp.$D(\'beginTime\')}'})" data-options="prompt: ''" class='Wdate'  
			readonly="readonly" style="float:left;width:100px;height:34px;border-radius:4px;border:1px solid #ccc;align:left;"/>&nbsp;&nbsp;
	</div> -->
</query_area>

<query_button_area>
	<button type="submit" class="btn btn-warning" id="query" onclick="refreshClientGuestlist(null,true);">查询</button>&nbsp;&nbsp;
	<button class="btn btn-default" id="resetBtn" onclick="resetform();">重置</button>
</query_button_area>

<grid_area>
	<col style="width:30%;"/>
	<col style="width:36%;"/>
	<col style="width:20%;"/>
	<col style="width:20%;"/>
	<thead><tr><th>设备MAC</th><th>访客MAC</th><th>连接时间</th><th>在线状态</th></tr></thead>
	<tbody id="clientGuestlist_tbody"></tbody>
</grid_area>


<grid_page_area>
	<ul id="clientGuestlist_page"></ul>
</grid_page_area>



