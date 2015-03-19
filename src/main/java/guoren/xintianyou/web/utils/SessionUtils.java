//package guoren.xintianyou.web.utils;
//
//import java.util.List;
//import java.util.Map;
//
//import guoren.xintianyou.web.domain.SysUser;
//
//import javax.servlet.http.HttpSession;
//
///**  
//*   
//* 类名称：SessionUtils  
//* 类描述：  -== Session工具类 ==-
//* 创建人：yuanqi.jing  
//* 创建时间：2015-2-4 下午3:59:11  
//* 修改备注：  
//* @version  1.0 
//*   
//*/ 
//public class SessionUtils {
//	private static SessionUtils utils = null;
//	
//	private SessionUtils() {
//		init();
//	}
//	/**
//	 * 初始化需要执行的代码 
//	 */
//	public void init() {
//		// todo
//	}
//
//	/**
//	 * 重置该工具类
//	 */
//	public void reset() {
//		init();
//	}
//
//	/**
//	 * 获取该单例工具类实例
//	 * @return SessionUtils
//	 */
//	public static SessionUtils getInstance() {
//		if (utils == null) {
//			create();
//		}
//		return utils;
//	}
//
//	/**
//	 * 线程安全的创建实例，防止并发多次创建
//	 */
//	private static synchronized void create() {
//		if (utils == null) {
//			utils = new SessionUtils();
//		}
//	}
//	 
//	/**
//	 * 从session里取得提示信息
//	 * @param req
//	 * @return
//	 */
////	public String getSessionMess(HttpServletRequest req){
////		String s = (String)req.getSession().getAttribute(FgConstants.SESSION_MESSAGE_NAME);
////		req.getSession().removeAttribute(FgConstants.SESSION_MESSAGE_NAME);
////		return s;
////	}
//	
//	/**
//	 * 获取登录的用户对象
//	 * @param session
//	 * @return User
//	 */
//	public SysUser getUserInSession(HttpSession session) {
//		return (SysUser) session.getAttribute(ConstantUtils.USER_IN_SESSION);
//	}
//	
//	/**
//	 * 将登录用户对象放入session
//	 * @param session
//	 * @return User
//	 */
//	public void putUserInSession(SysUser user, HttpSession session) {
//		session.setAttribute(ConstantUtils.USER_IN_SESSION, user);
//	}
//	
//	/**
//	 * 获取登录失败的用户对象
//	 * @param session
//	 * @return User
//	 */
//	public SysUser getLoginFailedUserInSession(HttpSession session) {
//		return (SysUser) session.getAttribute(ConstantUtils.LOGIN_FAILED_USER_IN_SESSION);
//	}
//	
//	/**
//	 * 将登录失败用户对象放入session
//	 * @param session
//	 * @return User
//	 */
//	public void putLoginFailedUserInSession(SysUser user, HttpSession session) {
//		session.setAttribute(ConstantUtils.LOGIN_FAILED_USER_IN_SESSION, user);
//	}
//	
//	/**
//	 * @Title: putModelMapListInSession 
//	 * @Description:将登录用户可以访问的 模块列表放入session 
//	 * @param modelMapList
//	 * @param session 
//	 * @return void    返回类型
//	 * @throws 
//	 * @author yuanqi.jing
//	 * @date 2015年2月13日 下午1:29:01
//	 * @version V1.0 
//	 */
//	public void putPermissionMapListInSession(
//			List<Map<String, Object>> modelMapList, HttpSession session) {
//		session.setAttribute(ConstantUtils.PERMISSION_IN_SESSION, modelMapList);
//	}
//	
//	/**
//	 * 获取登录用户可以访问的 模块列表
//	 * @param session
//	 * @return User
//	 */
//	public List<Map<String, Object>> getPermissionMapListInSession(HttpSession session) {
//		return (List<Map<String, Object>>)session.getAttribute(ConstantUtils.PERMISSION_IN_SESSION);
//	}
	
	
	
	
	
	
	
//	/**
//	 * 是否都去过cookie
//	 * @param req 请求信息
//	 * @return true读取过  false未读取
//	 */
//	public boolean isReadCookieOver(HttpServletRequest req){
//		return S.COOKIE_READ_SUCCESS.equals((String)req.getAttribute(S.IS_COOKIE_READ));
//	}
//	
//	/**
//	 * 设置读取过cookie
//	 * @param req 请求的 request
//	 */
//	public void setReadCookieOver(HttpServletRequest req){
//		req.getSession().setAttribute(S.IS_COOKIE_READ, S.COOKIE_READ_SUCCESS);
//	}
//	
//	
//	
//	/**
//	 * 获取一个cookie
//	 * @param req 请求
//	 * @param name cookie名
//	 * @return
//	 */
//	public Cookie getCookie(HttpServletRequest req, String name){
//		//getCookie(request);
//		Cookie[] cks = req.getCookies();
//		if(cks!=null){
//			for(int i=0;i<cks.length;i++){
//				Cookie ck = cks[i];
//				if(ck.getName().equals(name)){
//					return ck;
//				}
//			}
//		}
//		return null;
//	}
//	/**
//	 * 获取cookie的值
//	 * @param req
//	 * @param name
//	 * @return
//	 */
//	public String getCookieValue(HttpServletRequest req, String name){
//		Cookie ck = getCookie(req,name);
//		if(ck==null)return null;
//		try {
//			return URLDecoder.decode(ck.getValue(),"utf-8");
//		} catch (UnsupportedEncodingException e) {
//			e.printStackTrace();
//			return ck.getValue();
//		}
//	}
//	
//	/**
//	 * 输出所有cookie信息
//	 * @param req 请求
//	 */
//	public void showCookie(HttpServletRequest req){
//		Cookie[] cks = req.getCookies();
//		if(cks!=null){
//			for(int i=0;i<cks.length;i++){
//				Cookie ck = cks[i];
//				System.out.println(ck.getName()+":"+ck.getValue()+":"+ck.getMaxAge());
//			}
//		}
//	}
//	
//	/**
//	 * 设置一个cookie
//	 * @param response
//	 * @param name 名称
//	 * @param value 值
//	 * @param age 生存时间（小于0是当前浏览器，0表示删除，大于零是生存时间-单位秒）
//	 */
//	public void setCookie(HttpServletResponse response,String name,String value,int age){
//		Cookie ck = createCookie(name,value,age);
//		addCookie(response,ck);
//	}
//	
//	/**
//	 * 删除一个cookie
//	 * @param response
//	 * @param name 要删除cookie的name
//	 */
//	public void delCookie(HttpServletResponse response,String name){
//		addCookie(response,createCookie(name, "", 0));
//	}
//	
//	/**
//	 * 创建 一个 cookie
//	 * @param name 名称
//	 * @param value 值
//	 * @param age 生存时间（小于0，是当前浏览器，0表示删除，大于零是生存时间-单位秒）
//	 */
//	public Cookie createCookie(String name,String value,int age){
//		if(name==null||value==null){
//			return null;
//		}
//		Cookie ck = new Cookie(name,StringTools.getFactory().urlEncoder(value));
//		ck.setPath("/"); 
////		if(age>=0){//不set最大过期时间，默认是-1 随着浏览器失效
////			
////		}
//		ck.setMaxAge(age);
//		return ck;
//	}
//	
//	/**
//	 * 添加一个cookie
//	 * @param ck
//	 */
//	public void addCookie(HttpServletResponse response,Cookie ck){
//		if(response!=null && ck!=null){
//			try{
//				response.addCookie(ck);
//			}catch(Exception e){
//				System.out.println("退出 cookie 错误："+ck.getName()+":"+ck.getValue());
//			}
//		}
//	}
//
//	/**
//	 * 删除一个cookie
//	 * @param response 
//	 * @param cookieName 要删除的 cookie 名
//	 */
//	public void removeCookie(HttpServletResponse response,String cookieName){
//		if(response!=null && cookieName!=null){
//			addCookie(response, createCookie(cookieName,"-",0));
//		}
//	}



//}
