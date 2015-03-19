/**
 *  SIM SYSTEM SY 
 *  2015
 **/

package guoren.xintianyou.web.repository;

import guoren.xintianyou.web.core.jdbc.BaseRepository;
import guoren.xintianyou.web.domain.TerminalReportModel;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

@Repository
public class TerminalReportRepository  extends BaseRepository<TerminalReportModel, Long>{
	protected final Logger log = LoggerFactory.getLogger(getClass());

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

}
