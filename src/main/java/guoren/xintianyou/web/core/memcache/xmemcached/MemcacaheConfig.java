//package guoren.xintianyou.web.core.memcache.xmemcached;
//
//import java.io.IOException;
//
//import net.rubyeye.xmemcached.MemcachedClient;
//import net.rubyeye.xmemcached.MemcachedClientBuilder;
//import net.rubyeye.xmemcached.XMemcachedClientBuilder;
//import net.rubyeye.xmemcached.utils.AddrUtil;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.context.properties.EnableConfigurationProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
///**
// * ClassName: MemcacaheConfig <br/>
// * date: 2015年2月10日 下午4:21:01 <br/>
// *
// * @author he.sun
// * @version
// * @since JDK 1.7
// */
//@Configuration
//@EnableConfigurationProperties(XmemcachedProperties.class)
//public class MemcacaheConfig {
//	protected final Logger logger = LoggerFactory.getLogger(getClass());
//
//	@Autowired
//	private XmemcachedProperties xmemcachedProperties;
//
//	@Bean(name = "memcachedClient")
//	public MemcachedClient getXmemcachedClient() {
//		MemcachedClient memcachedClient = null;
//		MemcachedClientBuilder builder = new XMemcachedClientBuilder(
//				AddrUtil.getAddresses(xmemcachedProperties.getServersJion()),
//				xmemcachedProperties.getWeights());
//		// 连接池大小
//		builder.setConnectionPoolSize(xmemcachedProperties
//				.getConnectionPoolSize());
//		try {
//			// 创建了。。
//			memcachedClient = builder.build();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		logger.debug("MemcacaheConfig -> {}", memcachedClient);
//		return memcachedClient;
//	}
//
//	@Bean(name = "memCacheTemplate")
//	public MemCacheTemplate getMemCacheTemplate() {
//		MemcachedClient mc = getXmemcachedClient();
//		logger.debug("getMemCacheTemplate MemcachedClient-> {}", mc);
//
//		return new MemCacheTemplate(mc);
//	}
//}
