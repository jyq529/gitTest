//+---------------------------------------------------  
//| 将日期转化成字符串格式， 日期格式为 YYYY-MM-dd HH:mm:ss
//+---------------------------------------------------  
function getDateStr(now){
  //var now = new Date();
  
  var year = now.getFullYear();       //年
  var month = now.getMonth() + 1;     //月
  var day = now.getDate();            //日
 
  var hh = now.getHours();            //时
  var mm = now.getMinutes();          //分
  var sec = now.getSeconds();			//秒
 
  var clock = year + "-";
 
  if(month < 10)
      clock += "0";
 
  clock += month + "-";
 
  if(day < 10)
      clock += "0";
     
  clock += day + " ";
 
  if(hh < 10)
      clock += "0";
     
  clock += hh + ":";
  if (mm < 10) clock += '0'; 
  clock += mm; 
  
  clock += ":";
  if (sec <10) clock +='0';
  clock += sec; 
  return(clock); 
}
//+---------------------------------------------------  
//| 根据开始日期确定结束日期的范围   
//+---------------------------------------------------  
function getMaxDate(){
	var startReport_time = $("#ownerbeginTime").val();// yyyy-MM-dd hh:mm:ss 
	var date = null;
	var maxDate = null;
	var curDatecashe = new Date();
	var curDate = getDateStr(curDatecashe);
	if (startReport_time !=null && startReport_time!='') {
		if (daysBetween(curDate.split(" ")[0],startReport_time.split(" ")[0])>=7) {
			date = new Date(getDate(startReport_time).getTime() + 1000 * 60 * 60 * 24 * 7);
			maxDate = getDateStr(date);
		}else {
			maxDate = curDate;
		}
	}
	return maxDate;
}
//+---------------------------------------------------  
//| 求两个时间的天数差 日期格式为 YYYY-MM-dd   
//| 参数格式 yyyy-MM-dd
//+---------------------------------------------------  
function daysBetween(DateOne,DateTwo){   
	var diffTime, diffDays;
	diffTime = Math.abs(new Date(DateOne).getTime() - new Date(DateTwo).getTime());
	diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return  diffDays  ;
} 
//+---------------------------------------------------  
//| 将日期字符串转化为日期类型的时间   
//+---------------------------------------------------  
function getDate(strDate) {
  var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/,
   function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')');
  return date;
}

function textCounter(field, maxlimit) {

	// 函数，3个参数，表单名字，表单域元素名，限制字符；  
	if (field.value.length > maxlimit) {
		//如果元素区字符数大于最大字符数，按照最大字符数截断；  
		field.value = field.value.substring(0, maxlimit);
	} else {
		//在记数区文本框内显示剩余的字符数；  
		var input_length = maxlimit - field.value.length;
		var description = $("#description");
		description.html('还可以输入' + input_length + '字符');
	}
}