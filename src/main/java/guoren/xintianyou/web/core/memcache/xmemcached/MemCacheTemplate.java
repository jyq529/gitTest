///**
// * Project Name:guoren-xintianyou-web
// * File Name:MemCacheTemplate.java
// * Package Name:guoren.xintianyou.web.core.memcache.xmemcached
// * Date:2015年2月10日下午5:11:25
// * Copyright (c) 2015, www.sim.com All Rights Reserved.
// *
// */
//
//package guoren.xintianyou.web.core.memcache.xmemcached;
//
//import net.rubyeye.xmemcached.MemcachedClient;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
///**
// * ClassName:MemCacheTemplate <br/>
// * Function: TODO ADD FUNCTION. <br/>
// * Reason: TODO ADD REASON. <br/>
// * Date: 2015年2月10日 下午5:11:25 <br/>
// * 
// * @author he.sun
// * @version
// * @since JDK 1.7
// * @see
// */
//public class MemCacheTemplate {
//    protected final Logger logger = LoggerFactory.getLogger(getClass());
//
//    private MemcachedClient memcachedClient;
//
//    public MemCacheTemplate(MemcachedClient memcachedClient) {
//        this.memcachedClient = memcachedClient;
//    }
//
//    /**
//     * 缓存时效30秒
//     */
//    public static final int CACHE_EXP_SECOND_30 = 30 * 1000;
//    /**
//     * 登陆时效24小时
//     */
//    public static final int CACHE_EXP_HOUR_24 = 24 * 60 * 60 * 1000;
//    /**
//     * 缓存时效 永久 0 表示永久存储（默认是一个月）
//     */
//    public static final int CACHE_EXP_FOREVER = 0;
//    /**
//     * 冲突延时 1秒
//     */
//    public static final int MUTEX_EXP = 1 * 1000;
//
//    /**
//     * Set,replace方式添加数据 无论何时都保存 add 仅当存储空间中不存在键相同的数据时才保存
//     * 
//     * @param key
//     *            exp:过期时间 毫秒
//     * @return
//     */
//    public boolean set(String key, Object value, Integer exp) {
//        // TODO Auto-generated method stub
//        boolean result = true;
//        try {
//            result = memcachedClient.set(key, exp, value);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//        }
//        return result;
//    }
//
//    /**
//     * replace 更新数据
//     * 
//     * @param key
//     *            exp:过期时间 毫秒
//     * @return
//     */
//    public boolean replace(String key, Object value, Integer exp) {
//        // TODO Auto-generated method stub
//        boolean result = true;
//        try {
//            result = memcachedClient.replace(key, exp, value);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//        }
//        return result;
//    }
//
//    /**
//     * 判断添加的key是否存在
//     * 
//     * @param key
//     * @param exp
//     *            毫秒
//     * @return
//     */
//    public boolean isMutex(String key) {
//        return isMutex(key, MUTEX_EXP);
//    }
//
//    /**
//     * 判断添加的key是否存在
//     * 
//     * @param key
//     * @param exp
//     *            时效时间 毫秒
//     * @return
//     */
//    public boolean isMutex(String key, int exp) {
//        boolean status = true;
//        try {
//            if (memcachedClient.add(key, exp, "")) {
//                status = false;
//            }
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//        }
//        return status;
//    }
//
//    /**
//     * Get方式获取数据
//     * 
//     * @param key
//     * @return
//     */
//    @SuppressWarnings("unchecked")
//    public <T> T get(String key) {
//        T object = null;
//        try {
//            object = (T) memcachedClient.get(key);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//        }
//        return object;
//    }
//
//    /**
//     * Get方式获取数据
//     * 
//     * @param key
//     * @return
//     */
//    @SuppressWarnings("unchecked")
//    public <T> T getObject(String key, Integer exp) {
//        T object = null;
//        try {
//            object = (T) memcachedClient.get(key, exp);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//        }
//        return object;
//    }
//
//    /**
//     * add
//     * 
//     * @param key
//     * @param exp
//     *            毫秒
//     * @param value
//     * @return
//     */
//    public boolean add(String key, Object value, int exp) {
//        boolean result = true;
//        try {
//            result = memcachedClient.add(key, exp, value);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//        }
//        return result;
//    }
//
//    /**
//     * 根据key删除数据
//     * 
//     * @param key
//     * @return
//     */
//    public boolean delete(String key) {
//        boolean result = true;
//        try {
//            result = memcachedClient.delete(key);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//        }
//        return result;
//    }
//}
