/**
 *  SIM SYSTEM SY 
 *  2015
 **/

package guoren.xintianyou.web.repository;

import guoren.xintianyou.web.core.jdbc.BaseRepository;
import guoren.xintianyou.web.domain.LocationModel;
import guoren.xintianyou.web.domain.LocationTempModel;
import guoren.xintianyou.web.utils.ConstantUtils;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

@Repository
public class LocationRepository  extends BaseRepository<LocationModel, Long>{
	protected final Logger log = LoggerFactory.getLogger(getClass());

	@Autowired
	private MongoTemplate mongoTemplate;
	
//	/** 
//	 * @Title：queryUserDtoListByMap
//	 * @Description: 根据map条件查询 List<SysUserDto>
//	 * @author yuanqi.jing 
//	 * @date 2015年3月3日 上午11:57:09
//	 * @param string
//	 * @param paramMap
//	 * @return
//	 */
//	public List<SysUserDto> queryUserDtoListByMap(String sql,
//			Map<String, Object> paramMap) {
//		return getNamedParameterJdbcTemplate().query(sql, paramMap,  new BeanPropertyRowMapper(SysUserDto.class));
//	}
//
//	/** 
//	 * @Title：queryForLong
//	 * @Description: 根据map条件查询 count 
//	 * @author yuanqi.jing 
//	 * @date 2015年3月3日 下午12:12:23
//	 * @param countSql
//	 * @param paramMap 
//	 * @return
//	 */
//	public Long queryForLong(String countSql, Map<String, Object> paramMap) {
//		return getNamedParameterJdbcTemplate().queryForLong(countSql, paramMap);
//	}

	/** 
	 * @Title：saveList
	 * @Description: locationModel集合存入数据库 
	 * @author yuanqi.jing 
	 * @date 2015年3月16日 上午11:22:03
	 * @param lmList
	 */
	public void saveListToMongoDb(List<LocationModel> lmList) {
//		mongoTemplate.insert(lmList, "locationModelTemp");
		mongoTemplate.insert(lmList, "locationModel");
	}

	/** 
	 * @Title：saveToMongoDb
	 * @Description: LocationTempModel对象存入数据库 
	 * @author yuanqi.jing 
	 * @date 2015年3月17日 下午1:46:31
	 * @param lm
	 */
	public void saveLocationTempModelToMongoDb(LocationTempModel ltm) {
		mongoTemplate.insert(ltm, ConstantUtils.LOCATION_TEMP_MODEL);
		
	}

	/** 
	 * @Title：findCountFromMongoDb
	 * @Description: 根据cacheKey count locationTempModel表 
	 * @author yuanqi.jing 
	 * @date 2015年3月17日 下午2:03:22
	 * @param cacheKey
	 * @return
	 */
	public long countLocationTempModelFromMongoDb(String cacheKey) {
		Query query = new Query();
		Criteria c = Criteria.where("cacheKey").is(cacheKey);
		query.addCriteria(c);
		return mongoTemplate.count(query, ConstantUtils.LOCATION_TEMP_MODEL);
	}

	/** 
	 * @Title：getLtmList
	 * @Description: 从locationTempModel读取数据 
	 * @author yuanqi.jing 
	 * @date 2015年3月17日 下午3:17:07
	 * @param skip
	 * @param limit
	 * @return
	 */
	public List<LocationTempModel> getLtmList(int skip, int limit) {
		Query query = new Query();
		query.skip(skip).limit(limit);
		return mongoTemplate.find(query, LocationTempModel.class, ConstantUtils.LOCATION_TEMP_MODEL);
	}

	/** 
	 * @Title：countLocationModelFromMongoDb
	 * @Description: 根据cacheKey count locationModel表  
	 * @author yuanqi.jing 
	 * @date 2015年3月17日 下午3:23:50
	 * @param cacheKey
	 * @return
	 */
	public long countLocationModelFromMongoDb(String cacheKey) {
		Query query = new Query();
		Criteria c = Criteria.where("cacheKey").is(cacheKey);
		query.addCriteria(c);
		return mongoTemplate.count(query, ConstantUtils.LOCATION_MODEL);
	}

	/** 
	 * @Title：saveToMongoDb
	 * @Description: locationModel对象存入数据库 
	 * @author yuanqi.jing 
	 * @date 2015年3月17日 下午1:46:31
	 * @param lm
	 */
	public void saveLocationModelToMongoDb(LocationModel ltm) {
		mongoTemplate.insert(ltm, ConstantUtils.LOCATION_MODEL);
		
	}

	/** 
	 * @Title：updateLocationTempModelFlag
	 * @Description: TODO 
	 * @author yuanqi.jing 
	 * @date 2015年3月17日 下午3:38:05
	 * @param ltm
	 */
	public void updateLocationTempModelFlag(LocationTempModel ltm) {
		Criteria criteria = Criteria.where("_id").is(ltm.getId());  
        Query query = new Query(criteria);  
        Update update = Update.update("flag", ltm.getFlag() + 1);  
        mongoTemplate.updateFirst(query, update, ConstantUtils.LOCATION_TEMP_MODEL);
		
	}
	
}
