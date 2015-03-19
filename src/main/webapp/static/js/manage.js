var com_bar_border_color = "#FA8633"; // 柱状颜色
var com_bar_color = "#FE9E26"; // 鼠标滑过柱状颜色
var com_timeout = 60000;
var com_page_account = 20;// 每页显示多少行

// 键盘：上、下、左、右、退格、home、end键的keyCode
var allowableKeyCode = new Array(8,13,16,17,35,36,37,38,39,40,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,
		70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,96,97,98,99,100,101,102,103,104,105,144);
/*让火狐支持innerText*/
(function(bool) {
           function setInnerText(o, s) {   
                while (o.childNodes.length != 0) {   
                    o.removeChild(o.childNodes[0]);}   
               o.appendChild(document.createTextNode(s));   
           }
        function getInnerText(o) {
            var sRet = "";   
            for (var i = 0; i < o.childNodes.length; i++) {   
                 if (o.childNodes[i].childNodes.length != 0) {   
                    sRet += getInnerText(o.childNodes[i]);   
                }   
                 if (o.childNodes[i].nodeValue) {   
                     if (o.currentStyle.display == "block") {   
                         sRet += o.childNodes[i].nodeValue + "n";   
                     } else {   
                        sRet += o.childNodes[i].nodeValue;   
                    }
                 }   
            }
            return sRet;
         }
         if (bool) {
             HTMLElement.prototype.__defineGetter__("currentStyle", function() {
                return this.ownerDocument.defaultView.getComputedStyle(this, null);   
             });   
             HTMLElement.prototype.__defineGetter__("innerText", function() {
                return getInnerText(this);   
            });
             HTMLElement.prototype.__defineSetter__("innerText", function(s) {
                 setInnerText(this, s);   
             });
         }
})(/Firefox/.test(window.navigator.userAgent)); 



/*生成随机数*/
function MathRand() {
	var Num = "";
	for (var i = 0; i < 6; i++) {
		Num += Math.floor(Math.random() * 10);
	}
	return Num;
}




//placeholder
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}

//清空表格
function clearTable(id) { 
	$("#"+id).empty();
}

/*关闭模态窗口*/
function closeModal(id){
	$("#"+id).modal('hide');
}


//清空下拉框
function clearCombobox(id) {
	$("#"+id).empty();
}

//清空表单
function clearForm(id) { 
	$("#"+id)[0].reset();
}

//删除一行
function deleteTr() {
	id = event.srcElement.id;
	$("#"+id).parent().parent().remove(); 
}

//弹出提示框
function showMessage(message) {
	$("#common_alert_modal").modal('show');
	$("#common_yes").focus();
}

window.onload = autoLayout;
window.onresize = autoLayout;
function autoLayout() {
	$("#main_div").height($(window).height() - $("#head_div").outerHeight(true) - $("#foot_div").outerHeight(true) - 125);
}

function showMsg(info){
	info.msg = info.msg || '';
    info.type = info.type || '';
    //info.success = callback;
    
    if(info.type == "question"){
    	BootstrapDialog.show({
            title: "提示",
            message: info.msg,
            buttons: [{
                label: '确定',
                cssClass: 'btn-primary', 
                action: function(dialog) {
                    info.success();
                    dialog.close();
                }
            }, {
                label: '取消',
                action: function(dialog) {
                	//info.error();
                	dialog.close();
                }
            }]
        });
	}else{
		if(info.type == "info"){
	    	info.type = BootstrapDialog.TYPE_INFO;
	    }else if(info.type == "warning"){
	    	info.type = BootstrapDialog.TYPE_WARNING;
	    }else if(info.type == "error"){
	    	info.type = BootstrapDialog.TYPE_DANGER;
	    }else if(info.type == "success"){
	    	info.type = BootstrapDialog.TYPE_SUCCESS;
	    }
		BootstrapDialog.show({
	        title: "提示",
	        message: info.msg,
	        type: info.type,
	        buttons: [{
	        	 label: '关闭',
	             action: function(dialog) {
	                 dialog.close();
	             }
	        }]
	    });
	}
}

// 弹出提示信息
// info为json串:{msg:"请填写用时！", type:"warning"}或者{msg:"确认删除？", type:"question", mode:1}
// msg 为提示内容，字符串；
// type 分别为“error”,“info”,“question”,“success”,“warning”，字符串；默认为“info”
// mode 为1时有确认和取消两个按钮，数字类型；默认只有一个确认按钮.
function showMsgbak(info) {
    info.msg = info.msg || '';
    info.type = info.type || '';
    info.mode = info.mode || 0;
    info.success = info.success || function(){};
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    var isIe = (document.all) ? true : false;
    var isIE6 = isIe && !window.XMLHttpRequest;
    var sTop = document.documentElement.scrollTop || document.body.scrollTop;
    var sLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var winSize = function(){
        var xScroll, yScroll, windowWidth, windowHeight, pageWidth, pageHeight;
        // innerHeight获取的是可视窗口的高度，IE不支持此属性
        if (window.innerHeight && window.scrollMaxY) {
            xScroll = document.body.scrollWidth;
            yScroll = window.innerHeight + window.scrollMaxY;
        } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }

        if (self.innerHeight) {    // all except Explorer
            windowWidth = self.innerWidth;
            windowHeight = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else if (document.body) { // other Explorers
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        }

        // for small pages with total height less then height of the viewport
        if (yScroll < windowHeight) {
            pageHeight = windowHeight;
        } else {
            pageHeight = yScroll;
        }

        // for small pages with total width less then width of the viewport
        if (xScroll < windowWidth) {
            pageWidth = windowWidth;
        } else {
            pageWidth = xScroll;
        }

        return{
            'pageWidth':pageWidth,
            'pageHeight':pageHeight,
            'windowWidth':windowWidth,
            'windowHeight':windowHeight
        };
    }();
    //alert(winSize.pageWidth);
    //遮罩层
    var styleStr = 'top:0;left:0;position:absolute;z-index:10000;background:#ffffff;width:' + winSize.pageWidth + 'px;height:' +  (winSize.pageHeight + 30) + 'px;';
    styleStr += (isIe) ? "filter:alpha(opacity=0);" : "opacity:0.0;"; //遮罩层DIV
    var shadowDiv = document.createElement('div'); //添加阴影DIV
    shadowDiv.style.cssText = styleStr; //添加样式
    shadowDiv.id = "shadowDiv";
    //如果是IE6则创建IFRAME遮罩SELECT
    if (isIE6) {
        var maskIframe = document.createElement('iframe');
        maskIframe.style.cssText = 'width:' + winSize.pageWidth + 'px;height:' + (winSize.pageHeight + 30) + 'px;position:absolute;visibility:inherit;z-index:-1;filter:alpha(opacity=0);';
        maskIframe.frameborder = 0;
        maskIframe.src = "about:blank";
        shadowDiv.appendChild(maskIframe);
    }
    document.body.insertBefore(shadowDiv, document.body.firstChild); //遮罩层加入文档
    
    //弹出框
    var styleStr1 = 'display:block;position:fixed;_position:absolute;left:' + (winSize.windowWidth / 2 - 200) + 'px;top:' + (winSize.windowHeight / 2 - 150) + 'px;_top:' + (winSize.windowHeight / 2 + top - 150)+ 'px;'
    +'width:300px;height:117px;border: 8px solid #88C8E6;box-shadow: 1px 1px 10px black;border-radius:5px;'
    +'padding:0px;font-size:16px;position:absolute;text-align:center;background:#ffffff;z-index: 100000;'; //弹出框的位置
    var alertBox = document.createElement('div');
    alertBox.id = 'alertMsg';
    alertBox.style.cssText = styleStr1;
    //创建弹出框标题
    var styleStr2 = 'margin:0px;padding:0px;height:25px;font-size:14px;color:#ffffff;text-align: left; background-color:#88C8E6;';
    var alertMsg_title = document.createElement('h4');
    alertMsg_title.id = 'alertMsg_title';
    alertMsg_title.innerHTML = "提示";
    alertBox.appendChild(alertMsg_title);
    alertMsg_title.style.cssText = styleStr2;
    //创建关闭按钮
    var close_a = document.createElement('a');
    close_a.id = 'close_a';
    var close_img = document.createElement('img');
    close_img.src = '/manage/static/images/close.png';
    close_img.id = 'close_img';
    close_a.appendChild(close_img);
    var a_style = 'position:absolute; top:0px; right:0px;padding:0px;';
    var img_style = 'width:20px;height:20px; cursor:pointer;';
    close_img.style.cssText = img_style;
    close_a.style.cssText = a_style;
    alertBox.appendChild(close_a);
    //创建弹出框里面的内容P标签
    var styleStr3 = 'line-height:30px;align:center;font-size:14px;text-align:center;';
    var alertMsg_info = document.createElement('P');
    alertMsg_info.id = 'alertMsg_info';
    if(info.type == ''){info.type = 'info';};
    alertMsg_info.innerHTML = '<img style="margin-top:-6px;" src = "/manage/static/images/icon-'+info.type+'.gif"/>'+'&nbsp&nbsp'+info.msg;
    alertBox.appendChild(alertMsg_info);
    alertMsg_info.style.cssText = styleStr3;
    //创建按钮
    //按钮样式
    var styleStr4 = "top:50px;left:180px;width:72px;height:26px;font-size:14px;";
    //创建按钮
    var btn1 = document.createElement('button');
    btn1.id = 'alertMsg_btn1';
    btn1.innerHTML = '确定';
    btn1.style.cssText = styleStr4;
    btn1.onclick = function () {
    	info.success();
        document.body.removeChild(alertBox);
        document.body.removeChild(shadowDiv);
        return true;
    };
    alertBox.appendChild(btn1);
    if (info.mode === 1) {
        var btn2 = document.createElement('button');
        btn2.id = 'alertMsg_btn2';
        btn2.innerHTML = '取消';
        btn2.style.cssText = styleStr4;
        btn2.onclick = function () {
            document.body.removeChild(alertBox);
            document.body.removeChild(shadowDiv);
        };
        var distance = document.createElement('span');
        distance.innerHTML = '&nbsp&nbsp';//两按钮间隔
        alertBox.appendChild(distance);
        alertBox.appendChild(btn2);
    }
    document.body.appendChild(alertBox);
    
    document.getElementById('alertMsg_btn1').focus();
    //点击关闭按钮
    document.getElementById("close_a").onclick = function(){
    	document.body.removeChild(alertBox);
        document.body.removeChild(shadowDiv);
    };
    //去掉滚动条。
    document.body.style.cssText="overflow-y:hidden;overflow-x:hidden";
	//回车事件（相当于点击“确认”按钮）
	document.onkeydown = function (e) { 
	var theEvent = window.event || e; 
	var code = theEvent.keyCode || theEvent.which; 
	if (code == 13) {
		$('#alertMsg_btn1').click();
	}
	};
}

// 获得浏览器版本
function getBrowser()
{  
   if(!!window.ActiveXObject || "ActiveXObject" in window) {  
        return "MSIE";  
   }  
   if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){  
        return "Firefox";  
   }  
   if(isSafari=navigator.userAgent.indexOf("Safari")>0) {  
        return "Safari";  
   }   
   if(isCamino=navigator.userAgent.indexOf("Camino")>0){  
        return "Camino";  
   }  
   if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){  
        return "Gecko";  
   }   
}  

//去掉前面的0
function delZero(str) {
	if (str.indexOf("0") == 0) {
		return parseInt(str.substring(1), 10);
	} else {
		return parseInt(str, 10);
	}
}

//加0字符串
function addZero (str) {
	str = str + "";
	if (str.length == 1) {
		return "0" + str;
	} else {
		return str;
	}
}

// 输入keyCode的校验
function inputKeyCheck(id) {
	var value = $("#"+id).val();
	// 空格键
	if(event.keyCode == 32) {
		value = value.replace(/[ ]/g,"");
		$("#"+id).val(value);
	}
}

//判断是否为中文
function isChinese(temp)
{
	if (escape(temp).indexOf("%u") < 0) {
		return false;
	} else {
		return true;
	}
}

// 空转空串
function nullToStr(temp) {
	if (temp == undefined || temp == null || temp == "null") {
		return "";
	} else {
		return temp.replace(/\s/ig,'');
	}
}

/**
 *截取时间字符串 
 * @param time 时间字符串 格式：年-月-日 时：分：秒
 * @param length 指定长度
 * @returns {String} 时间子字符串 格式：年-月-日
 */
function timeToDate(time,length){//2014-11-11 17:28:31
	var date = "";
	if(time == undefined || time == null || time == "null"){
		
	}else{
		date = time.substr(0,length);//返回一个从指定位置(此处为0)开始的指定长度(此处为length)的子字符串
	}
	return date;
}


/*去字符串前后两端的空格*/
function trim(str,is_global){
	 var result;
	 result = str.replace(/(^\s+)|(\s+$)/g,"");
	 if(is_global!=null&&is_global.toLowerCase()=="g") result = result.replace(/\s/g,"");
	 return result;
}

/**
 * 点击提交按钮 表单提交中 按钮状态：
 * 提交等待中图片显示;保存按钮隐藏;其它按钮禁用
 * @param imgID 提交等待中按钮ID
 * @param saveBtnId 保存按钮ID
 * @param otherId 其它ID,包括取消按钮、右上角关闭按钮
 */
function setBtnDisabled(imgID,saveBtnId,otherId){
	$('#'+imgID).show();//提交等待中图片显示
	$('#'+saveBtnId).hide(); //保存按钮隐藏
	for(var i=0;i<otherId.length;i++){//其它按钮禁用
		$('#'+otherId[i]).attr("disabled",true);
	}
}

/**
 * 表单提交失败时,表单按钮操作
 * 提交等待中图片隐藏;保存按钮显示;其它按钮启用
 * @param imgID 提交等待中按钮ID
 * @param saveBtnId 保存按钮ID
 * @param otherId 其它ID,包括取消按钮、右上角关闭按钮
 */
function setBtnAble(imgID,saveBtnId,otherId){
	$('#'+imgID).hide();//图片隐藏
	$('#'+saveBtnId).show(); //保存按钮显示
	for(var i=0;i<otherId.length;i++){//其它按钮解除禁用
		$('#'+otherId[i]).attr("disabled",false);
	}
}

function delBr(str) {
	return str.replace("<br/>","");
}
//日期格式化
Date.prototype.pattern=function(fmt) {         
    var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时     
    //"h+" : this.getHours()%12, //小时
    "H+" : this.getHours(), //小时         
    "m+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "/u65e5",         
    "1" : "/u4e00",         
    "2" : "/u4e8c",         
    "3" : "/u4e09",         
    "4" : "/u56db",         
    "5" : "/u4e94",         
    "6" : "/u516d"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;         
}; 

//流量的KB转为MB:除1024,保留两位小数
function changeTwoDecimal(x)
{
	var f_x = parseFloat(x/1024);
	f_x = Math.round(f_x *100)/100;
	return f_x;
}

/**
 * 重写jquery ajax
 * @author yuanqi.jing
 */
var _ajax = $.ajax;
$.ajax = function(s) {
	var old = s.success;
	s.success = function(data, textStatus, jqXHR) {
		if (data && data.IsLogout) {
			eval(data.Callback);
		}
		if(data.code === "616") {
//			console.log("no 无权限");
			alert(data.msg);
		}else if (old) {
			old(data, textStatus, jqXHR);
		}
	};
	_ajax(s);
};

//选中左侧菜单
function activeMenu(menu){
	if (menu != "null") {
		$("#menu_" + menu).addClass('active');
		var id = $("#menu_" + menu).parent().attr("id").split("_")[1];
		  $("#oneMenu_" + id).removeClass();
		  $("#oneMenu_" + id).addClass("nav-header");
		  $("#twoMenu_" + id).removeClass();
		  $("#twoMenu_" + id).addClass("nav nav-list secondmenu collapse in");
	}
}

//回车跳转分页
function common_goto_page_enter(field, event) {
	var total = $("#total_pages").html();
	if (total < $("#goto_page").val()) {
		$("#goto_page").val(total);
	}
	var keyCode = event.keyCode ? event.keyCode : event.which ? event.which
			: event.charCode;
	if (keyCode == 13) {
		$(".pagination").bootstrapPaginator("show", $("#goto_page").val());
		$("#goto_page").blur();
		return false;
	} else {
		return true;
	}
}
function common_goto_page_blur() {
	var total = $("#total_pages").html();
	if (total < $("#goto_page").val()) {
		$("#goto_page").val(total);
	}
	$(".pagination").bootstrapPaginator("show", $("#goto_page").val());
}

// 加载分页数据
function common_set_page_data(data, page) {
	if (data.rows.length > 0) {
		$("#page_div").show();
		$("#total_pages").html(data.pageCount);
		$("#total_rows").html(data.total);
		var start = (page - 1) * 20 + 1;
		var end = (page - 1) * 20 + data.rows.length;
		$("#current_rows").html(start + "-" + end);
		$("#goto_page").val(page); // 设置默认跳转页
	} else {
		$("#page_div").hide();
	}
}