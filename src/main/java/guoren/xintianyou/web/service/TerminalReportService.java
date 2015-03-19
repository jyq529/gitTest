/**
 *  SIM SYSTEM SY 
 *  2015
 **/

package guoren.xintianyou.web.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import guoren.xintianyou.web.domain.TerminalReportModel;
import guoren.xintianyou.web.repository.TerminalReportRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TerminalReportService extends BaseService<TerminalReportModel, Long> {
	protected final Logger log = LoggerFactory.getLogger(getClass());

	private TerminalReportRepository terminalReportRepository;

	@Autowired
	public TerminalReportService(TerminalReportRepository terminalReportRepository) {
		this.terminalReportRepository = terminalReportRepository;
		this.res = this.terminalReportRepository;
	}

	/**
	 * 根据开始id，结束id获得terminalReport集合，且经纬度不为空
	 * @param startId
	 * @param endId
	 * @return
	 */
	public List<TerminalReportModel> getListByStartIdEndId(long startId,
			long endId) {
		StringBuilder condSql = new StringBuilder(" 1=1 ");
//		condSql.append(" AND LAT IS NOT NULL AND LAT != '' AND LAT != 0 AND LNG IS NOT NULL AND LNG != '' AND LNG != 0 ");
		condSql.append(" AND LAT IS NOT NULL AND LAT != '' AND LAT != 0 AND LNG IS NOT NULL AND LNG != '' AND LNG != 0 AND CELL_ID IS NOT NULL AND CELL_ID != '' ");
		condSql.append(" AND ID >= " + startId + " AND ID <= " + endId);
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("startId", startId);
		paramMap.put("endId", endId);
		return terminalReportRepository.find(condSql.toString(), paramMap, " ORDER BY ID ASC;");
	}
	
	

}
