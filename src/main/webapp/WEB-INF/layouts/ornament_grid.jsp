<%-- <%@page import="guoren.xintianyou.web.utils.MemCacheUtils"%> --%>
<%-- <%@page import="org.springframework.web.context.support.WebApplicationContextUtils"%> --%>
<%-- <%@page import="org.springframework.context.ApplicationContext"%> --%>
<%-- <%@page import="com.google.gson.JsonElement"%> --%>
<%-- <%@page import="com.google.gson.Gson"%> --%>
<%-- <%@page import="guoren.xintianyou.web.utils.SessionUtils"%> --%>
<%-- <%@page import="guoren.xintianyou.web.domain.SysUser"%> --%>
<%-- <%@page import="guoren.xintianyou.web.utils.ConstantUtils"%> --%>
<%-- <%@ page contentType="text/html;charset=UTF-8"%> --%>
<%-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> --%>
<%-- <c:set var="ctx" value="${pageContext.request.contextPath}" /> --%>
<!-- <!DOCTYPE html> -->
<!-- <html lang="zh-cn"> -->
<!-- <head> -->
<!-- <meta charset="utf-8"> -->
<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
<!-- <title><sitemesh:write property='title' />MIFI网管系统平台</title> -->

<!-- <!-- Bootstrap --> -->
<%-- <link href="${ctx}/static/css/bootstrap_div.css" rel="stylesheet"> --%>
<%-- <link href="${ctx}/static/css/bootstrap.min.css" rel="stylesheet"> --%>
<!-- <!-- head css --> -->
<%-- <link href="${ctx}/static/css/header.css" rel="stylesheet"> --%>
<%-- <link href="${ctx}/static/css/custom.css" rel="stylesheet"> --%>
<!-- <!-- login --> -->
<%-- <link href="${ctx}/static/jquery-validation/1.11.1/validate.css" type="text/css" rel="stylesheet" /> --%>
<!-- <!-- check--> -->
<%-- <link href="${ctx}/static/js/jquery-validation-engine-ciaoca-2.6.2/css/validationEngine.jquery.css" rel="stylesheet"> --%>
<%-- <script src="${ctx}/static/js/jquery.min.js"></script> --%>
<!-- <!-- Include all compiled plugins (below), or include individual files as needed --> -->
<%-- <script src="${ctx}/static/js/bootstrap.min.js"></script> --%>
<%-- <script src="${ctx}/static/js/bootstrap-dialog.js"></script> --%>
<%-- <script src="${ctx}/static/js/bootstrap-paginator.js"></script> --%>
<%-- <script type="text/javascript" src="${ctx}/static/js/manage.js"></script> --%>
<%-- <script type="text/javascript" src="${ctx}/static/js/base.js"></script> --%>
<!-- <script -->
<%-- src="${ctx}/static/js/jquery-validation-engine-ciaoca-2.6.2/js/jquery.validationEngine-zh_CN.js"></script> --%>
<!-- <script -->
<%-- src="${ctx}/static/js/jquery-validation-engine-ciaoca-2.6.2/js/jquery.validationEngine-jacy-1.01.min.js"></script> --%>
<%-- <script type="text/javascript" src="${ctx}/static/js/bootstrap-tooltip.js"></script> --%>
<%-- <script type="text/javascript" src="${ctx}/static/js/bootstrap-popover.js"></script> --%>
<!-- <script src="http://echarts.baidu.com/build/dist/echarts.js"></script> -->
<!-- <!--[if lt IE 9]> -->
<!--      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script> -->
<!--      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script> -->
<!--    <![endif]--> -->
<!-- <sitemesh:write property='head' />	 -->
<!-- <script type="text/javascript"> -->
// var ctx = '${ctx}';

<%-- <%  --%>
// Gson gson = new Gson();
// //JsonElement je = gson.toJsonTree((SysUser)session.getAttribute(ConstantUtils.USER_IN_SESSION));
// ServletContext sc = this.getServletConfig().getServletContext();
// ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext(sc);
// MemCacheUtils mu = (MemCacheUtils)ac.getBean("memCacheUtils");
// SysUser user = mu.getUserInMemcache(session);
// JsonElement je = gson.toJsonTree(user);
// request.setAttribute("userInMem", user);
<%-- %> --%>
<%-- var userModel = <%=je %>; --%>

<!-- </script> -->
<!-- </head> -->

<!-- <body bgcolor="#EAEFF2"> -->
<%-- <%@ include file="/WEB-INF/layouts/header.jsp"%> --%>
<!-- <div class="container bs-docs-container"> -->
<!-- 	<div class="row"> -->
<!-- 		<table style="width:100%;"> -->
<%-- 			<col style="width:183px;"/> --%>
<%-- 			<col/> --%>
<!-- 			<tr> -->
<!-- 				<td valign="top"> -->
<%-- 					<%@ include file="/WEB-INF/layouts/left.jsp"%> --%>
<!-- 				</td> -->
<!-- 				<td style="padding-left:13px;" valign="top"> -->
<!-- 					<div class="container-fluid" style="float:left;padding-left:0px;padding-right:0px;width: 100%;"> -->
					
<!-- 								<h3> -->
<!-- 									模块名称区域 -->
<!-- 									<sitemesh:write property='title_area' id="title_area" /> -->
<!-- 								</h3> -->
<!-- 						<div class="panel panel-default" id="orn_main" style="border-radius:0px;"> -->
<!-- 							<div class="panel-heading">
<!-- 								<h3 class="panel-title"> -->
<!-- 									模块名称区域 -->
<!-- 									<sitemesh:write property='title_area' id="title_area" /> -->
<!-- 								</h3> -->
<!-- 							</div> --> -->
<!-- 							<div class="panel-body" style="padding:0px;"> -->
<!-- 								<div style="margin-bottom:8px;padding-left:5px;padding-top:8px;"> -->
<!-- 									<div id="ornament_form"> -->
<!-- 										查询条件区域 -->
<!-- 										<sitemesh:write property='query_area' id="query_area" /> -->
<!-- 										查询条件同行的按钮区域  -->
<!-- 										<sitemesh:write property='query_button_area' id="query_button_area" /> -->
<!-- 									</div> -->
<!-- 								</div> -->
<!-- 								<div class="container-table" style="overflow:auto;"> -->
<!-- 									<table class="table table-striped" id="datagrid" style="max-width:100%;background-color:#FDF6F0;margin-bottom:0px;" border=0> -->
<!-- 										数据列表区域 -->
<!-- 										<sitemesh:write property='grid_area' id="grid_area" /> -->
<!-- 									</table> -->
<!-- 								</div> -->
<!-- 								<div style="text-align:left; font-size:14px;margin-left:20px;" id="page_div"> -->
<!-- 									<sitemesh:write property='grid_page_area' id="grid_page_area" /> -->
<!-- 									<div style="color:#757577;vertical-align:middle;"> -->
<!-- 										<span style="margin-left:20px;">跳转到第</span> -->
<!-- 										<input id="goto_page" onkeypress="return common_goto_page_enter(this, event)" onblur="common_goto_page_blur()" style="text-align:center; width:50px;height: 34px;"/> -->
<!-- 										/<span id ="total_pages"></span>页 -->
<!-- 										<div style=" margin-right:20px; float:right;padding-top:6px;"> -->
<!-- 											显示<span id ="current_rows"></span>条,共计<span id ="total_rows"></span>条 -->
<!-- 										</div> -->
<!-- 									</div> -->
<!-- 								</div> -->
<!-- 								<form class="form-inline" role="form"> -->
<!-- 									数据列表下方区域(一般用于多选之后,一起操作的动作,例如:添加到分组) -->
<!-- 									<sitemesh:write property='grid_footer_area' id="grid_footer_area" /> -->
<!-- 								</form> -->
<!-- 							<br/> -->
<!-- 						</div> -->
<!-- 					</div> -->
<!-- 					<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-backdrop="static" id="ornament_modal"> -->
<!-- 						<div class="modal-dialog modal-lg"> -->
<!-- 							<div class="modal-content"> -->
<!-- 								<div class="modal-header" style="height:45px;"> -->
<!-- 									模态窗口上方名称区域 -->
<!-- 									<sitemesh:write property='modal_area_header' id="modal_area_header" /> -->
<!-- 									<button id="close_icon" type="button" class="close btn-remove" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></button> -->
<!-- 								</div> -->
<!-- 								<div class="modal-body" style="overflow-y:auto;height:400px;"> -->
<!-- 									模态窗口中间内容区域 -->
<!-- 									<sitemesh:write property='modal_area_content' id="modal_area_content" /> -->
<!-- 								</div> -->
<!-- 								<div class="modal-footer"> -->
<!-- 									模态窗口下方按钮区域 -->
<!-- 									<sitemesh:write property='modal_area_button' id="modal_area_button" /> -->
<!-- 								</div> -->
<!-- 							</div> -->
<!-- 						</div> -->
<!-- 					</div> -->
<!-- 					<sitemesh:write property='modal_area_others' id="modal_area_others" /> -->
<!-- 				</td> -->
<!-- 			<tr> -->
<!-- 		</table> -->
<!-- 	</div> -->
<!-- </div> -->
<%-- <%@ include file="/WEB-INF/layouts/footer.jsp"%> --%>

<!-- <script type="text/javascript"> -->
// 	$("#orn_main").css("min-height",document.documentElement.clientHeight-170);
<!-- </script> -->

<!-- <sitemesh:write property='js_area' /> -->
<!-- </body> -->
<!-- </html> -->