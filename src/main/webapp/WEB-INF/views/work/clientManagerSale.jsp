<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<head>
<script src="${ctx}/static/js/work/clientManagerSale.js"></script>
<script src="${ctx}/static/js/time.js"></script>
<script src="${ctx}/static/js/datePicker/WdatePicker.js"></script>
<script src="http://echarts.baidu.com/build/dist/echarts.js"></script>
</head>

<!-- 正文标题 -->
<title_area>销售月统计图表</title_area>

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
	<div style="float:left;width:120px;">
		<label class="control-label" for="workNo">工号</label>
		<input class="form-control" id="workNo" style="float:left;width:80px;"/>
	</div>
	<div style="float:left;width:120px;">
		<label class="control-label" for="monthTime">月份</label>
		<input id="monthTime" onfocus="WdatePicker({dateFmt:'yyyy-MM',maxDate:'%y-%M-%d'})" data-options="prompt: ''"  class='Wdate' 
			readonly="readonly" style="float:left;width:75px;height:26px;border:1px solid #ccc;"/>
	</div>
</query_area>

<query_button_area>
	<button type="submit" class="btn btn-warning" id="query" onclick="refreshClientManagerSale(null,true);">查询</button>&nbsp;&nbsp;
	<button class="btn btn-default" id="resetBtn" onclick="resetform();">重置</button>
</query_button_area>

<grid_area>
	<col style="width:15%;"/>
	<col style="width:20%;"/>
	<col style="width:15%;"/>
	<col style="width:20%;"/>
	<col style="width:15%;"/>
	<col style="width:15%;"/>
	<thead><tr><th>姓名</th><th>电话</th><th>工号</th><th>所属区域</th><th>月销售量(台)</th><th>操作</th></tr></thead>
	<tbody id="clientManagerSale_tbody"></tbody>
</grid_area>


<grid_page_area>
	<ul id="clientManagerSale_page"></ul>
</grid_page_area>

<modal_area_header>
销售月统计
</modal_area_header>

<modal_area_content>
	<div id="managerMainId" style="width:860px;height:400px;"></div>
</modal_area_content>


<modal_area_button>
<input type="button" class="btn btn-default" id="cancelButton" value="关闭" onclick="cancelPush();">
</modal_area_button>


