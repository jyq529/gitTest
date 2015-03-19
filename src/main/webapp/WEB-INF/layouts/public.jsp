<%@page import="com.google.gson.JsonElement"%>
<%@page import="guoren.xintianyou.web.domain.SysUser"%>
<%@page import="org.springframework.web.context.support.WebApplicationContextUtils"%>
<%@page import="org.springframework.context.ApplicationContext"%>
<%@page import="com.google.gson.Gson"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<% 
// Gson gson = new Gson();
// //JsonElement je = gson.toJsonTree((SysUser)session.getAttribute(ConstantUtils.USER_IN_SESSION));
// ServletContext sc = this.getServletConfig().getServletContext();
// ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext(sc);
// MemCacheUtils mu = (MemCacheUtils)ac.getBean("memCacheUtils");
// SysUser user = mu.getUserInMemcache(session);
// // JsonElement je = gson.toJsonTree(user);
// request.setAttribute("userInMem", user);
%>