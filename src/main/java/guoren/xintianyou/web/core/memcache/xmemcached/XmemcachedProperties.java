///**
// * Project Name:guoren-xintianyou-web
// * File Name:XmemcachedProperties.java
// * Package Name:guoren.xintianyou.web.core.memcache.xmemcached
// * Date:2015年2月10日下午4:51:47
// * Copyright (c) 2015, www.sim.com All Rights Reserved.
// *
// */
//
//package guoren.xintianyou.web.core.memcache.xmemcached;
//
//import org.springframework.boot.context.properties.ConfigurationProperties;
//
//import com.google.common.base.Joiner;
//
///**
// * ClassName:XmemcachedProperties <br/>
// * Function: TODO ADD FUNCTION. <br/>
// * Reason: TODO ADD REASON. <br/>
// * Date: 2015年2月10日 下午4:51:47 <br/>
// * 
// * @author he.sun
// * @version
// * @since JDK 1.7
// * @see
// */
//@ConfigurationProperties(prefix = XmemcachedProperties.PREFIX)
//public class XmemcachedProperties {
//    public static final String PREFIX = "memcache";
//
//    /**
//     * memcache服务的数组.
//     */
//    private String[] servers;
//
//    /**
//     * 服务权限的数组
//     */
//    private int[] weights;
//
//    /**
//     * 连接池大小
//     */
//    private int connectionPoolSize;
//
//    public String getServersJion() {
//        return Joiner.on(" ").join(servers);
//    }
//
//    public String[] getServers() {
//        return servers;
//    }
//
//    public void setServers(String[] servers) {
//        this.servers = servers;
//    }
//
//    public int[] getWeights() {
//        return weights;
//    }
//
//    public void setWeights(int[] weights) {
//        this.weights = weights;
//    }
//
//    public int getConnectionPoolSize() {
//        return connectionPoolSize;
//    }
//
//    public void setConnectionPoolSize(int connectionPoolSize) {
//        this.connectionPoolSize = connectionPoolSize;
//    }
//
//}
