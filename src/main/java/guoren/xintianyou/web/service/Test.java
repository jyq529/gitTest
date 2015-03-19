package guoren.xintianyou.web.service;

import org.apache.commons.lang.StringUtils;

public class Test {
	
	public static boolean checkCellId(String cellId) {
		try{
			// 合法返回true
			if(StringUtils.isNotBlank(cellId) && cellId.split("\\|").length>=1){
				return true ;
			}
		}catch(Exception e){
//			log.info(" checkCellId 发生异常  "+e.getMessage());
			return false ;
		}
		return false;
	}

	public static String generatorKey(String cellId) throws Exception{
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
	
//	public static void main(String[] args) {
//		LocationService ls = new LocationService();
//		try {
////			String key = ls.generatorKey("460:00|6166:61857:-71");
//			String key = ls.generatorKey("460:00:1|9366:4611:-86|9340:3633:-89|9381:4173:-90|10144:3832:-92|9381:4041:-92|9381:4090:-93");
//			System.out.println("key:" + key);
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
	
	public static void main(String[] args) {
//		460:00|6166:61857:-71
		String cellId = "460:00|6166:61857:-71";
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
		System.out.println("mnc:" + mnc);
		System.out.println("networkType：" + networkType);
		System.out.println("firstSplit：" + firstSplit);
		System.out.println("newFirstSplit：" + newFirstSplit);
		System.out.println("cellId:" + cellId);
	}
	
}
