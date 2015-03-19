/**
 *  SIM SYSTEM SY 
 *  2015
 **/

package guoren.xintianyou.web.web;

import guoren.xintianyou.web.domain.LocationTempModel;
import guoren.xintianyou.web.domain.TerminalReportModel;
import guoren.xintianyou.web.dto.ValidMessageDto;
import guoren.xintianyou.web.service.LocationService;
import guoren.xintianyou.web.service.TerminalReportService;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.common.base.Strings;

@Controller
public class LoginController {
	protected final Logger log = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private TerminalReportService terminalReportService;
	
	@Autowired
	private LocationService locationService;

	/**
	 * 登录页
	 * 
	 * @return
	 */
	@RequestMapping(value = { "/loginPage", "" })
	public String loginPage() {
		return "/login";
	}
	
	/**
	 * 导数据页
	 * 
	 * @return
	 */
	@RequestMapping(value = "/expAndImpDatePage/{pwd}")
	public String expAndImpDatePage(@PathVariable String pwd) {
		if(!Strings.isNullOrEmpty(pwd) && "13940318306".equals(pwd)) {
			return "/expAndImpDatePage";
		}else {
			return "/login";
		}
	}
	
	/** 
	 * @Title：dataImport
	 * @Description: tracker2库t_terminal_report表导入basestation库locationModel表 
	 * @author yuanqi.jing 
	 * @date 2015年3月16日 上午9:39:10
	 * @param startId
	 * @param endId
	 * @return
	 */
	@RequestMapping(value = "/trToLtm")
	@ResponseBody
	public ValidMessageDto trToLtm(long startId, long endId) {
		ValidMessageDto vmd = new ValidMessageDto();
		vmd.setValid(true);
		vmd.setMsg("导入成功");
		
		// 1.根据开始id，结束id获得terminalReport集合
		List<TerminalReportModel> trmList = new ArrayList<TerminalReportModel>();
		try {
			trmList = terminalReportService.getListByStartIdEndId(startId, endId);
		} catch (Exception e1) {
			vmd.setValid(false);
			vmd.setMsg("根据开始id，结束id获得terminalReport集合异常：" + e1.getMessage());
			log.error("根据开始id，结束id获得terminalReport集合异常：" + e1.getMessage());
			e1.printStackTrace();
		}
		
		// 2.处理后，得到locationTempModel集合
		List<LocationTempModel> lmList = new ArrayList<LocationTempModel>();
		try {
			lmList = locationService.getFromTrmList(trmList);
		} catch (Exception e2) {
			vmd.setValid(false);
			vmd.setMsg("处理后，得到locationModel集合异常：" + e2.getMessage());
			log.error("处理后，得到locationModel集合异常：" + e2.getMessage());
			e2.printStackTrace();
		}
		
		// 3.locationTempModel集合存入数据库
		try {
			locationService.saveLocationTempModelList(lmList);
		} catch (Exception e3) {
			vmd.setValid(false);
			vmd.setMsg("locationTempModel集合存入数据库:" + e3.getMessage());
			log.error("locationTempModel集合存入数据库:" + e3.getMessage());
			e3.printStackTrace();
		}
		
		return vmd;
	}
	
	/** 
	 * @Title：ltmToLm
	 * @Description: locationTempModel表 导入 locationModel表
	 * @author yuanqi.jing 
	 * @date 2015年3月17日 下午2:49:19
	 * @param skip
	 * @param limit
	 * @return
	 */
	@RequestMapping(value = "/ltmToLm")
	@ResponseBody
	public ValidMessageDto ltmToLm(int skip, int limit) {
		ValidMessageDto vmd = new ValidMessageDto();
		vmd.setValid(true);
		vmd.setMsg("导入成功");
		try {
			locationService.fromLocationTempModelToLocationModel(skip, limit);
		} catch (Exception e) {
			vmd.setValid(false);
			vmd.setMsg("locationTempModel表 导入 locationModel表 异常:" + e.getMessage());
			log.error("locationTempModel表 导入 locationModel表 异常:" + e.getMessage());
			e.printStackTrace();
		}
		return vmd;
	}

}
