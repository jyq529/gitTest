/**
 *  SIM SYSTEM SY 
 *  2015
 **/

package guoren.xintianyou.web.service;

import guoren.xintianyou.web.domain.LocationModel;
import guoren.xintianyou.web.domain.LocationTempModel;
import guoren.xintianyou.web.domain.TerminalReportModel;
import guoren.xintianyou.web.repository.LocationRepository;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationService extends BaseService<LocationModel, Long> {
	protected final Logger log = LoggerFactory.getLogger(getClass());

	private LocationRepository locationRepository;

	@Autowired
	public LocationService(LocationRepository locationRepository) {
		this.locationRepository = locationRepository;
		this.res = this.locationRepository;
	}

	public LocationService() {
		// TODO Auto-generated constructor stub
	}

	/** 
	 * @Title：getFromTrmList
	 * @Description: 处理后，得到locationModel集合 
	 * @author yuanqi.jing 
	 * @date 2015年3月16日 上午10:05:19
	 * @param trmList
	 * @return
	 */
	public List<LocationTempModel> getFromTrmList(List<TerminalReportModel> trmList) throws Exception {
		List<LocationTempModel> lmList = new ArrayList<LocationTempModel>();
		LocationTempModel ltm = new LocationTempModel();
		String cellIdprocessed = null;
		for (TerminalReportModel tr : trmList) {
			cellIdprocessed = processCellId(tr.getCell_id());
			ltm.setTerminalReportId(tr.getId());
			ltm.setFlag(0);
			ltm.setLatitude(tr.getLat());
			ltm.setLongitude(tr.getLng());
			ltm.setAccuracy("10");// 默认精确度10
			try {
				ltm.setCacheKey(generatorKey(cellIdprocessed));
			} catch (Exception e) {
				log.error("生成缓存key异常" + e.getMessage());
				e.printStackTrace();
				throw e;
			}
			ltm.setCacheValue(tr.getLng() + "," + tr.getLat());
			ltm.setFromTheSupplier("eachpal_tracker_gps");
			ltm.setCellId(cellIdprocessed);
			lmList.add(ltm);
		}
		return lmList;
	}

	/** 
	 * @Title：processCellId
	 * @Description: 处理cellId，460:00|6166:61857:-71处理后为：460:00:1|6166:61857:-71
	 * @author yuanqi.jing 
	 * @date 2015年3月16日 上午11:29:55
	 * @param cell_id
	 * @return
	 */
	private String processCellId(String cellId) {
		String mnc = cellId.split("\\|")[0].split(":")[1];
		String networkType = "";
		switch (mnc) {
		case "00":
			networkType = "0";
			break;
		case "01":
			networkType = "2";
			break;
		default:
			networkType = "1";
			break;
		}
		String firstSplit = cellId.split("\\|")[0];
		String newFirstSplit = firstSplit + ":" + networkType;
		cellId = cellId.replace(firstSplit, newFirstSplit);
		return cellId;
	}
	
	/** 
	 * @Title：generatorKey
	 * @Description: 生成缓存key 
	 * @author yuanqi.jing 
	 * @date 2015年3月16日 下午12:21:10
	 * @param cellId
	 * @return
	 * @throws Exception
	 */
	public String generatorKey(String cellId) throws Exception{
		StringBuffer key = new StringBuffer();
		if(checkCellId(cellId)){
			String [] cellIdArray = cellId.split("[|]");
			for (int i = 0; i < cellIdArray.length; i++) {
				if(i==0){
					key.append(cellIdArray[i]+"|");
				}else if(i<4){
					if(i==3){
						key.append(cellIdArray[i]);
						break;
					}else{
						key.append(cellIdArray[i]+"|");
					}
				}
			}
		}else{
			throw new Exception("缓存Key生成异常");
		}
		
		return key.toString() ;
	}

	public boolean checkCellId(String cellId) {
		try{
			// 合法返回true
			if(StringUtils.isNotBlank(cellId) && cellId.split("\\|").length>=1){
				return true ;
			}
		}catch(Exception e){
			log.info(" checkCellId 发生异常  "+e.getMessage());
			return false ;
		}
		return false;
	}
	
	/** 
	 * @Title：saveList
	 * @Description: LocationTempModel集合存入数据库 
	 * @author yuanqi.jing 
	 * @date 2015年3月16日 上午10:05:48
	 * @param ltmList
	 */
	public void saveLocationTempModelList(List<LocationTempModel> ltmList) {
		long findCount = 0;
		for (LocationTempModel ltm : ltmList) {
			findCount = locationRepository.countLocationTempModelFromMongoDb(ltm.getCacheKey());
//			if(findCount > 0) {
//				lmList.remove(lm);
//			}
			if(findCount == 0) {
				locationRepository.saveLocationTempModelToMongoDb(ltm);
			}
		}
//		locationRepository.saveList(lmList);
	}

	/** 
	 * @Title：fromLocationTempModelToLocationModel
	 * @Description: locationTempModel表 导入 locationModel表 
	 * @author yuanqi.jing 
	 * @date 2015年3月17日 下午3:05:07
	 * @param skip
	 * @param limit
	 */
	public void fromLocationTempModelToLocationModel(int skip, int limit) {
		// 从locationTempModel读取数据
		List<LocationTempModel> ltmList = locationRepository.getLtmList(skip, limit);
		
		// 将locationTempModel集合存入locationModel
		long findCount = 0;
		LocationModel lm = null;
		for (LocationTempModel ltm : ltmList) {
			findCount = locationRepository.countLocationModelFromMongoDb(ltm.getCacheKey());
//			if(findCount > 0) {
//				lmList.remove(lm);
//			}
			if(findCount == 0) {
				lm = new LocationModel();
				lm.setAccuracy(ltm.getAccuracy());
				lm.setCacheKey(ltm.getCacheKey());
				lm.setCacheValue(ltm.getCacheValue());
				lm.setCellId(ltm.getCellId());
				lm.setFromTheSupplier(ltm.getFromTheSupplier());
				lm.setLatitude(ltm.getLatitude());
				lm.setLongitude(ltm.getLongitude());
				locationRepository.saveLocationModelToMongoDb(lm);
				// 导入数据成功后，修改LocationTempModel标志位
				locationRepository.updateLocationTempModelFlag(ltm);
			}
		}
		
	}

}
