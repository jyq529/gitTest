package guoren.xintianyou.web.utils;

/**
 * 
* @ClassName: ConstantUtils 
* @Description: 常量工具类 
* @author yuanqi.jing
* @date 2015年2月4日 下午3:23:34 
*
 */
public class ConstantUtils {
	
	/**
	 * 登录默认值
	 */
	public static final int LOGIN_DEFAULT = -1;
	
	/**
	 * 登录验证状态码:登录异常
	 */
	public static final int LOGIN_EXCEPTION = 0;
	
	/**
	 * 登录验证状态码:手机号或用户名不存在
	 */
	public static final int LOGIN_PHONENUM_OR_USERNAME_NOT_EXIST = 1; 
	
	/**
	 * 登录验证状态码:手机号、用户名或者密码错误
	 */
	public static final int LOGIN_PHONENUMOR_USERNAME_OR_PWD_ERROR = 2;
	
	/**
	 * 登录验证状态码:登录成功
	 */
	public static final int LOGIN_SUCCESS = 3;
	
	/**
	 * 登录验证状态码:验证码错误
	 */
	public static final int LOGIN_SMS_ERROR = 4;
	
	/**
	 * 登录用户保存在session中的key
	 */
	public static final String USER_IN_SESSION = "userInSession";
	
	/**
	 * 登录用户保存在memcache中的key
	 */
	public static final String USER_IN_MEMCACHE = "userInMemcache";
	
	/**
	 * 登录失败的用户保存在memcache中key
	 */
	public static final String LOGIN_FAILED_USER_IN_MEMCACHE = "loginFailedUserInMemcache";
	
	/**
	 * 登录失败的用户保存在session中key
	 */
	public static final String LOGIN_FAILED_USER_IN_SESSION = "loginFailedUserInSession";
	
	/**
	 * 登录用户权限列表保存在memcache中key
	 */
	public static final String PERMISSION_IN_MEMCACHE = "permissionInMemcache";
	
	/**
	 * 登录用户权限列表保存在session中key
	 */
	public static final String PERMISSION_IN_SESSION = "permissionInSession";
	
	/**
	   * @Fields VCODE : 放在session中的验证码key
	  */
	public static final String VCODE = "verificationCode";
	
	/**
	 * 管理员
	 */
	public static final String ROLE_ADMIN = "1";
	
	/**
	 * 商户
	 */
	public static final String ROLE_CLIENT = "2";
	
	/**
	 * 管理员获取7天在线数据的常量
	 */
	public static final int WEEK_GUESTDATA = 7;
	
	/**
	 * 日志常量，登录
	 */
	public static final String OPTLOG_LOGIN = "登录";
	
	/**
	 * 日志常量，修改密码
	 */
	public static final String OPTLOG_MODIFY_PWD = "修改密码";
	
	/**
	 * 日志常量，重置密码
	 */
	public static final String OPTLOG_RESET_PWD = "重置密码";
	
	/**
	 * 短信验证码过期毫秒值
	 */
	public static final Integer SMS_TIMEOUT= 1*60*1000;
	
	/**
	 * 登录过期毫秒值
	 */
	public static final Integer LOGIN_TIMEOUT= 30*60*1000;
//	public static final Integer LOGIN_TIMEOUT= 20*1000;
	
	//APP接口开始
	public static final String A01_SUCCESS = "{\"code\":\"200\",\"desc\":\"上报成功\"}";
	public static final String A01_FAILURE = "{\"code\":\"204\",\"desc\":\"发送验证码异常\"}";
	public static final String A02_SUCCESS = "{\"code\":\"200\",\"desc\":\"上报成功\"}";
	public static final String A02_FAILURE = "{\"code\":\"204\",\"desc\":\"校验失败\"}";
	public static final String A03_SUCCESS = "{\"code\":\"200\",\"desc\":\"上报成功\"}";
	public static final String A03_FAILURE = "{\"code\":\"204\",\"desc\":\"未注册\"}";
	public static final String A04_SUCCESS = "{\"code\":\"200\",\"desc\":\"上报成功\"}";
	public static final String A04_FAILURE = "{\"code\":\"204\",\"desc\":\"注册失败\"}";
	public static final String A21_SUCCESS = "{\"code\":\"200\",\"desc\":\"上报成功\"}";
	public static final String A21_FAILURE = "{\"code\":\"204\",\"desc\":\"绑定失败\"}";
	public static final String A3X_SUCCESS = "{\"code\":\"200\",\"desc\":\"上报成功\"}";
	public static final String A3X_FAILURE = "{\"code\":\"204\",\"desc\":\"上报失败\"}";
	public static final String SMS_CODE_BEGIN = "验证码:【";
	public static final String SMS_CODE_END = "】【沃商宝】";
	public static final Integer OVER_TIME = 5*60*1000;
	public static final String A4X_SUCCESS_CODE = "200";
	public static final String A4X_FAILURE_CODE = "204";
	public static final String A4X_SUCCESS_DESC = "上报成功";
	public static final String A4X_FAILURE_DESC = "上报失败";
	//APP接口结束
	
	
	public static final String LOCATION_MODEL = "locationModel";
	public static final String LOCATION_TEMP_MODEL = "locationTempModel";
}
