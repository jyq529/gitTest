/**
 * Project Name:guoren-xintianyou-web
 * File Name:BaseService.java
 * Package Name:guoren.xintianyou.web.service
 * Date:2015年2月4日上午11:27:25
 * Copyright (c) 2015, www.sim.com All Rights Reserved.
 *
 */

package guoren.xintianyou.web.service;

import guoren.xintianyou.web.core.jdbc.BaseRepository;
import guoren.xintianyou.web.core.jdbc.common.DataGridModel;
import guoren.xintianyou.web.core.jdbc.common.PageModel;

import java.io.Serializable;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * ClassName:BaseService <br/>
 * service 基类 Date: 2015年2月4日 上午11:27:25 <br/>
 * 
 * @author he.sun
 * @version
 * @see
 */
public abstract class BaseService<T, PK extends Serializable> {
    protected final Logger log = LoggerFactory.getLogger(getClass());

    protected BaseRepository<T, PK> res;

    /**
     * findOne:根据ID获得实体. <br/>
     *
     * @author he.sunF
     * @param id
     * @return
     */
    public T findOne(PK id) {
        return res.findOne(id);
    }

    /**
     * findAll:获得所有实体<br/>
     *
     * @author he.sun
     * @return
     */
    public List<T> findAll() {
        return res.findAll();

    }

    /**
     * delete:根据ID删除实体. <br/>
     *
     * @author he.sun
     * @param id
     * @return
     */
    public int delete(PK id) {
        return res.delete(id);
    }

    /**
     * delete:根据ID删除实体. <br/>
     *
     * @author 根据实体删除实体
     * @param t
     * @return
     */
    public int delete(T t) {
        return res.delete(t);
    }

    /**
     * save:保存实体 <br/>
     *
     * @author he.sun
     * @param t
     * @return
     */
    public T save(T t) {
        res.save(t);
        return t;
    }

    public void deleteAll(PK[] ids) {

        res.delete(ids);
    }

    /**
     * update:更新实体 <br/>
     *
     * @author he.sun
     * @param t
     * @return
     */
    public T update(T t) {
        res.update(t);
        return t;
    }

    /**
     * update:更新或者保存实体 <br/>
     *
     * @author he.sun
     * @param t
     * @return
     */
    public T saveOrUpdate(T t) {
        return res.saveOrUpdate(t);
    }

    /**
     * findPage:最简单的方式获得分页的信息列表.但是因为太简单了，估计都用不上了. <br/>
     *
     * @author he.sun
     * @param dataGridModel
     * @return
     */
    public PageModel<T> findPage(DataGridModel dataGridModel) {
        // TODO Auto-generated method stub
        return res.getListByPage(dataGridModel.getPage(),
                dataGridModel.getRows(), null, null, null);
    }
}
