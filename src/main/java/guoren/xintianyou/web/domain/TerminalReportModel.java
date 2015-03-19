package guoren.xintianyou.web.domain;

import guoren.xintianyou.web.core.jdbc.annotation.Key;
import guoren.xintianyou.web.core.jdbc.annotation.Table;



/**
 * 
 * @author shaojian.yu  DateTime 2014年5月15日 下午2:08:02
 * @version 1.0
 */
@Table(name="T_TERMINAL_REPORT")
public class TerminalReportModel {
	
	@Key
	private Long id;
	private String target_imsi;
	private String report_time;
	private String localization_result;
	private String lng_judgment;
	private String lng;
	private String lat_judgment;
	private String lat;
	private String speed;
	private String azimuth;
	private String mainBattery_status;
	private String park_status;
	private String antitheft_status;
	private String energysave_status;
	private String cell_id;
	private String gpses;
	private String gsm_signal;
	private String standby_power;
	private String report_type;
	private Double google_lng;
	private Double google_lat;
	private Double baidu_lng;
	private Double baidu_lat;
	private String terminal_cellphoneNumber;//终端手机号
	private String target_num;//终端车牌号
	private String target_type;//终端类型
	private String start_report_time;
	private String end_report_time;
	private String sort;
	private String order;
		
	public TerminalReportModel() {
		super();
	}
	/**
	 * 
	 * @param id
	 * @param target_imsi
	 * @param report_time
	 * @param localization_result
	 * @param lng_judgment
	 * @param lng
	 * @param lat_judgment
	 * @param lat
	 * @param speed
	 * @param azimuth
	 * @param mainBattery_status
	 * @param park_status
	 * @param antitheft_status
	 * @param energysave_status
	 * @param cell_id
	 * @param gpses
	 * @param gsm_signal
	 * @param standby_power
	 * @param report_type
	 * @param google_lng
	 * @param google_lat
	 * @param baidu_lng
	 * @param baidu_lat
	 */
	public TerminalReportModel(Long id, String target_imsi, String report_time,
			String localization_result, String lng_judgment, String lng,
			String lat_judgment, String lat, String speed, String azimuth,
			String mainBattery_status, String park_status,
			String antitheft_status, String energysave_status, String cell_id,
			String gpses, String gsm_signal, String standby_power,
			String report_type, Double google_lng, Double google_lat,
			Double baidu_lng, Double baidu_lat,String terminal_cellphoneNumber,String target_num,String target_type) {
		super();
		this.id = id;
		this.target_imsi = target_imsi;
		this.report_time = report_time;
		this.localization_result = localization_result;
		this.lng_judgment = lng_judgment;
		this.lng = lng;
		this.lat_judgment = lat_judgment;
		this.lat = lat;
		this.speed = speed;
		this.azimuth = azimuth;
		this.mainBattery_status = mainBattery_status;
		this.park_status = park_status;
		this.antitheft_status = antitheft_status;
		this.energysave_status = energysave_status;
		this.cell_id = cell_id;
		this.gpses = gpses;
		this.gsm_signal = gsm_signal;
		this.standby_power = standby_power;
		this.report_type = report_type;
		this.google_lng = google_lng;
		this.google_lat = google_lat;
		this.baidu_lng = baidu_lng;
		this.baidu_lat = baidu_lat;
		this.terminal_cellphoneNumber = terminal_cellphoneNumber;
		this.target_num = target_num ;
		this.target_type = target_type ;
	}

	  public void setId(Long id){  
         this.id = id ;    
      }  
     
	             
      public Long getId(){  
         return this.id;  
      }  
      public void setTarget_imsi(String target_imsi){  
         this.target_imsi = target_imsi ;    
      }  
     
	             
      public String getTarget_imsi(){  
         return this.target_imsi;  
      }  
      public void setReport_time(String report_time){  
         this.report_time = report_time ;    
      }  
     
	             
      public String getReport_time(){  
         return this.report_time;  
      }  
      public void setLocalization_result(String localization_result){  
         this.localization_result = localization_result ;    
      }  
     
	             
      public String getLocalization_result(){  
         return this.localization_result;  
      }  
      public void setLng_judgment(String lng_judgment){  
         this.lng_judgment = lng_judgment ;    
      }  
     
	             
      public String getLng_judgment(){  
         return this.lng_judgment;  
      }  
      public void setLng(String lng){  
         this.lng = lng ;    
      }  
     
	             
      public String getLng(){  
         return this.lng;  
      }  
      public void setLat_judgment(String lat_judgment){  
         this.lat_judgment = lat_judgment ;    
      }  
     
	             
      public String getLat_judgment(){  
         return this.lat_judgment;  
      }  
      public void setLat(String lat){  
         this.lat = lat ;    
      }  
     
	             
      public String getLat(){  
         return this.lat;  
      }  
      public void setSpeed(String speed){  
         this.speed = speed ;    
      }  
     
	             
      public String getSpeed(){  
         return this.speed;  
      }  
      public void setAzimuth(String azimuth){  
         this.azimuth = azimuth ;    
      }  
     
	             
      public String getAzimuth(){  
         return this.azimuth;  
      }  
      public void setMainBattery_status(String mainBattery_status){  
         this.mainBattery_status = mainBattery_status ;    
      }  
     
	             
      public String getMainBattery_status(){  
         return this.mainBattery_status;  
      }  
      public void setPark_status(String park_status){  
         this.park_status = park_status ;    
      }  
     
	             
      public String getPark_status(){  
         return this.park_status;  
      }  
      public void setAntitheft_status(String antitheft_status){  
         this.antitheft_status = antitheft_status ;    
      }  
     
	             
      public String getAntitheft_status(){  
         return this.antitheft_status;  
      }  
      public void setEnergysave_status(String energysave_status){  
         this.energysave_status = energysave_status ;    
      }  
     
	             
      public String getEnergysave_status(){  
         return this.energysave_status;  
      }  
      public void setCell_id(String cell_id){  
         this.cell_id = cell_id ;    
      }  
     
	             
      public String getCell_id(){  
         return this.cell_id;  
      }  
      public void setGpses(String gpses){  
         this.gpses = gpses ;    
      }  
     
	             
      public String getGpses(){  
         return this.gpses;  
      }  
      public void setGsm_signal(String gsm_signal){  
         this.gsm_signal = gsm_signal ;    
      }  
     
	             
      public String getGsm_signal(){  
         return this.gsm_signal;  
      }  
      public void setStandby_power(String standby_power){  
         this.standby_power = standby_power ;    
      }  
     
	             
      public String getStandby_power(){  
         return this.standby_power;  
      }  
      public void setReport_type(String report_type){  
         this.report_type = report_type ;    
      }  
     
	             
      public String getReport_type(){  
         return this.report_type;  
      }  
      public void setGoogle_lng(Double google_lng){  
         this.google_lng = google_lng ;    
      }  
     
	             
      public Double getGoogle_lng(){  
         return this.google_lng;  
      }  
      public void setGoogle_lat(Double google_lat){  
         this.google_lat = google_lat ;    
      }  
     
	             
      public Double getGoogle_lat(){  
         return this.google_lat;  
      }  
      public void setBaidu_lng(Double baidu_lng){  
         this.baidu_lng = baidu_lng ;    
      }  
     
	             
      public Double getBaidu_lng(){  
         return this.baidu_lng;  
      }  
      public void setBaidu_lat(Double baidu_lat){  
         this.baidu_lat = baidu_lat ;    
      }  
     
	             
      public Double getBaidu_lat(){  
         return this.baidu_lat;  
      }  
      
      public String getTerminal_cellphoneNumber() {
  		return terminal_cellphoneNumber;
  	  }
  	  public void setTerminal_cellphoneNumber(String terminal_cellphoneNumber) {
  		this.terminal_cellphoneNumber = terminal_cellphoneNumber;
   	  }
  	
  	  public String getTarget_num() {
  		return target_num;
  	  }
  	  public void setTarget_num(String target_num) {
  		this.target_num = target_num;
  	  }
  	  
  	public String getTarget_type() {
  		return target_type;
  	  }
  	  public void setTarget_type(String target_type) {
  		this.target_type = target_type;
  	  }
	public String getStart_report_time() {
		return start_report_time;
	}
	public void setStart_report_time(String start_report_time) {
		this.start_report_time = start_report_time;
	}
	public String getEnd_report_time() {
		return end_report_time;
	}
	public void setEnd_report_time(String end_report_time) {
		this.end_report_time = end_report_time;
	}
	public String getSort() {
		return sort;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
  	  
}
