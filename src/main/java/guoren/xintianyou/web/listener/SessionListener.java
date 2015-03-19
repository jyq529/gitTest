package guoren.xintianyou.web.listener;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SessionListener implements HttpSessionListener {

	protected final Logger log = LoggerFactory.getLogger(getClass());
	
//    @Autowired
//    private RpOperateLogService rpOperateLogService;
    
	 /**
	  * Title：sessionCreated
	  * Description:Session创建事件 
	  * user: yuanqi.jing
	  * date:  2015 2015年3月18日
	  * @param se
	  * @see javax.servlet.http.HttpSessionListener#sessionCreated(javax.servlet.http.HttpSessionEvent)
	  */
	@Override
	public void sessionCreated(HttpSessionEvent se) {
		log.debug("-----sessionCreated......");
		
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent se) {
//		SysUser userInSession = SessionUtils.getInstance().getUserInSession(se.getSession());
//		
//		// session销毁，记录日志
//		if(userInSession != null) {
//			RpOperateLog rpol = new RpOperateLog();
//			rpol.setAction(ConstantUtils.OPTLOG_LOGOUT);
//			rpol.setContent("退出成功");
//			rpOperateLogService.saveRpOperateLog(se.getSession(), rpol);
//		}
		log.debug("-----sessionDestroyed......");
		
	}
	
}
