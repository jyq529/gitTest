package guoren.xintianyou.web.core.config;


import guoren.xintianyou.web.listener.SessionListener;

import org.springframework.boot.context.embedded.ServletListenerRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 配置监听器
 * 
 * @author yuanqi.jing
 * 
 */

@Configuration
public class ListenerConfig {

	@Bean
	public ServletListenerRegistrationBean<SessionListener> jsfConfigureListener() {
		return new ServletListenerRegistrationBean<SessionListener>(
				new SessionListener());
	}

}