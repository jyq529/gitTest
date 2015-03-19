//package guoren.xintianyou.web.utils;
//
//import guoren.xintianyou.web.core.memcache.xmemcached.MemCacheTemplate;
//import guoren.xintianyou.web.domain.SysUser;
//
//import java.util.List;
//import java.util.Map;
//
//import javax.servlet.http.HttpSession;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
///**  
//*   
//* 类名称：MemCacheUtils  
//* 类描述：  -== MemCacheUtils工具类 ==-
//* 创建人：yuanqi.jing  
//* 创建时间：2015-3-10 上午午11:51:11  
//* 修改备注：  
//* @version  1.0 
//*   
//*/ 
//@Component
//public class MemCacheUtils {
//	
//	@Autowired
//	private MemCacheTemplate mt;
//	
//	/**
//	 * 获取登录的用户对象
//	 * @param MemCacheTemplate
//	 * @return User
//	 */
//	public SysUser getUserInMemcache(HttpSession session) {
//		return mt.get(ConstantUtils.USER_IN_MEMCACHE + session.getId());
//	}
//	
//	/**
//	 * 将登录用户对象放入MemCache
//	 * @param mt
//	 * @return User
//	 */
//	public void putUserInMemcache(SysUser user, HttpSession session) {
//		mt.set(ConstantUtils.USER_IN_MEMCACHE + session.getId(), user, ConstantUtils.LOGIN_TIMEOUT);
//	}
//	
//	/**
//	 * 获取登录失败的用户对象
//	 * @param mt
//	 * @return User
//	 */
//	public SysUser getLoginFailedUserInMemcache(HttpSession session) {
//		return (SysUser) mt.get(ConstantUtils.LOGIN_FAILED_USER_IN_MEMCACHE + session.getId());
//	}
//	
//	/**
//	 * 将登录失败用户对象放入Memcache
//	 * @param mt
//	 * @return User
//	 */
//	public void putLoginFailedUserInMemcache(SysUser user, HttpSession session) {
//		mt.set(ConstantUtils.LOGIN_FAILED_USER_IN_MEMCACHE + session.getId(), user, ConstantUtils.LOGIN_TIMEOUT);
//	}
//	
//	/**
//	 * @Title: putPermissionMapListInMemcache 
//	 * @Description:将登录用户可以访问的 模块列表放入Memcache 
//	 * @param modelMapList
//	 * @param mt 
//	 * @return void    返回类型
//	 * @throws 
//	 * @author yuanqi.jing
//	 * @date 2015年2月13日 下午1:29:01
//	 * @version V1.0 
//	 */
//	public void putPermissionMapListInMemcache(
//			List<Map<String, Object>> modelMapList, HttpSession session) {
//		mt.set(ConstantUtils.PERMISSION_IN_MEMCACHE + session.getId(), modelMapList, ConstantUtils.LOGIN_TIMEOUT);
//	}
//	
//	/**
//	 * 获取登录用户可以访问的 模块列表
//	 * @param Memcache
//	 * @return User
//	 */
//	public List<Map<String, Object>> getPermissionMapListInMemcache(HttpSession session) {
//		return mt.get(ConstantUtils.PERMISSION_IN_MEMCACHE + session.getId());
//	}
//	
//	/** 
//	 * @Title：invalidateMemcacheForLogout
//	 * @Description: 用户登出，清除memcache中登录会话状态的变量
//	 * @author yuanqi.jing 
//	 * @date 2015年3月10日 下午2:53:30
//	 * @param mt
//	 */
//	public void invalidateMemcacheForLogout(HttpSession session) {
//		// 删除登录用户对象
//		mt.delete(ConstantUtils.USER_IN_MEMCACHE + session.getId());
//		
//		// 删除登录失败用户对象
//		mt.delete(ConstantUtils.LOGIN_FAILED_USER_IN_MEMCACHE + session.getId());
//		
//		// 删除登录用户可以访问的 模块列表
//		mt.delete(ConstantUtils.PERMISSION_IN_MEMCACHE + session.getId());
//	}
//	
//	/** 
//	 * @Title：resetLoginTimeOut
//	 * @Description: 重新设置memcache中登录会话状态的变量的时效
//	 * @author yuanqi.jing 
//	 * @date 2015年3月10日 下午2:53:30
//	 * @param mt
//	 */
//	public void resetLoginTimeOut(HttpSession session) {
//		// 重新设置登录用户对象时效
//		SysUser userInMemcache = mt.get(ConstantUtils.USER_IN_MEMCACHE + session.getId());
//		if(userInMemcache != null) {
//			mt.add(ConstantUtils.USER_IN_MEMCACHE + session.getId(), userInMemcache, ConstantUtils.LOGIN_TIMEOUT);
//		}
//		
//		// 重新设置登录失败用户对象时效
//		SysUser userLoginFailedInMemcache = (SysUser) mt.get(ConstantUtils.LOGIN_FAILED_USER_IN_MEMCACHE + session.getId());
//		if(userLoginFailedInMemcache != null) {
//			mt.add(ConstantUtils.LOGIN_FAILED_USER_IN_MEMCACHE + session.getId(), userLoginFailedInMemcache, ConstantUtils.LOGIN_TIMEOUT);
//		}
//		
//		// 删除登录用户可以访问的 模块列表
//		List<Map<String, Object>> permissionMapListInMemcache = mt.get(ConstantUtils.PERMISSION_IN_MEMCACHE + session.getId());
//		if(permissionMapListInMemcache != null) {
//			mt.add(ConstantUtils.PERMISSION_IN_MEMCACHE + session.getId(), permissionMapListInMemcache, ConstantUtils.LOGIN_TIMEOUT);
//		}
//	}
//	
//}
