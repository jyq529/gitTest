/**
 *  SIM SYSTEM SY 
 *  2015
 **/

package guoren.xintianyou.web.service;

import guoren.xintianyou.web.domain.LocationModel;
import guoren.xintianyou.web.repository.LocationRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationModelService extends BaseService<LocationModel, Long> {
	protected final Logger log = LoggerFactory.getLogger(getClass());

	private LocationRepository locationRepository;

	@Autowired
	public LocationModelService(LocationRepository locationRepository) {
		this.locationRepository = locationRepository;
		this.res = this.locationRepository;
	}
	
	

}
