package guoren.xintianyou.web.domain;

import java.io.Serializable;

/**
 * @Title: Location.java
 * @Package com.sim.tracker.model
 * @Description: 地理位置坐标 modify for shaojian.yu 20140613 , add
 *               fromTheSupplier,cellId
 * @author ZengZhuo
 * @revision : V1.0
 */
public class LocationTempModel implements Serializable {
	private static final long serialVersionUID = 1L;
	private String id;
	private long terminalReportId;
	private int flag;// 向locationModel导入数据成功的标志位
	private String longitude;// 经度
	private String latitude;// 纬度
	private String country;//
	private String accuracy;// 精确度
	private String cacheKey;// cellId缓存key
	private String cacheValue;// 经度,纬度
	private String fromTheSupplier;//
	private String cellId;// 基站信号
	private String locId;// 基站信号
	private int queryCount;// 查询次数

	public LocationTempModel(String id, long terminalReportId, int flag,
			String longitude, String latitude, String country, String accuracy,
			String cacheKey, String cacheValue, String fromTheSupplier,
			String cellId, String locId, int queryCount) {
		super();
		this.id = id;
		this.terminalReportId = terminalReportId;
		this.flag = flag;
		this.longitude = longitude;
		this.latitude = latitude;
		this.country = country;
		this.accuracy = accuracy;
		this.cacheKey = cacheKey;
		this.cacheValue = cacheValue;
		this.fromTheSupplier = fromTheSupplier;
		this.cellId = cellId;
		this.locId = locId;
		this.queryCount = queryCount;
	}

	public LocationTempModel() {
		super();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public long getTerminalReportId() {
		return terminalReportId;
	}

	public void setTerminalReportId(long terminalReportId) {
		this.terminalReportId = terminalReportId;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getAccuracy() {
		return accuracy;
	}

	public void setAccuracy(String accuracy) {
		this.accuracy = accuracy;
	}

	public String getCacheKey() {
		return cacheKey;
	}

	public void setCacheKey(String cacheKey) {
		this.cacheKey = cacheKey;
	}

	public String getCacheValue() {
		return cacheValue;
	}

	public void setCacheValue(String cacheValue) {
		this.cacheValue = cacheValue;
	}

	public String getFromTheSupplier() {
		return fromTheSupplier;
	}

	public void setFromTheSupplier(String fromTheSupplier) {
		this.fromTheSupplier = fromTheSupplier;
	}

	public String getCellId() {
		return cellId;
	}

	public void setCellId(String cellId) {
		this.cellId = cellId;
	}

	public String getLocId() {
		return locId;
	}

	public void setLocId(String locId) {
		this.locId = locId;
	}

	public int getQueryCount() {
		return queryCount;
	}

	public void setQueryCount(int queryCount) {
		this.queryCount = queryCount;
	}

}
