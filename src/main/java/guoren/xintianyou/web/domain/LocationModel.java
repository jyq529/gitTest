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
public class LocationModel implements Serializable {
	private static final long serialVersionUID = 1L;
	private String id;
	private String longitude;// 经度
	private String latitude;// 纬度
	private String accuracy;// 精确度
	private String cacheKey;// cellId缓存key
	private String cacheValue;// 经度,纬度
	private String fromTheSupplier;//
	private String cellId;// 基站信号
	private String locId;// 基站信号
	private int queryCount;// 查询次数

	public LocationModel() {
		super();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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
