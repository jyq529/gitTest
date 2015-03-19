/*
 * paging
 * id : 容器ul的id
 * curPage : 当前页
 * totalPages : 总页数
 */
function paging(args){
	if(args.totalPages == 0){
		 $('#' + args.id).html("");
		 return;
	}
	var options = {
        bootstrapMajorVersion: 3,
        alignment: 'right',
        currentPage: args.currentPage,
        totalPages: args.totalPages,
        itemTexts: function (type, page, current) {
            switch (type) {
            case "first":
                return "第一页";
            case "prev":
                return "上一页";
            case "next":
                return "下一页";
            case "last":
                return "最后一页";
            case "page":
                return page;
            }
        },
        onPageChanged: function(event, oldPage, newPage){
        	args.callback(newPage);
        }
    };
    $('#' + args.id).bootstrapPaginator(options);
}

/*
 * ajax
 * url : 请求
 * callback ： 回调函数
 */

function ajax(url, data, callback){
	$.ajax({
		cache : true,
		type : "POST",
		url : url,
		data : data,
		async : false,
		error : function(request) {
			dialog.error("提示", "系统异常");
		},
		success : function(data) {
			if(data.success){
				callback(data.data);
			}else{
				dialog.error("提示", data.msg);
			}
		}
	});
}
//在表格中生成loading

var common = {
		getVal: function (val) {
			if(val == null || val == undefined){
				return "";
			}else{
				return val;
			}
		},
		showLoading: function (id, type, colspan) {
			var loading = [];
			if(type == "table"){
				loading.push('<tr><td colspan="' + colspan + '" style="text-align:center;">');
			}
			loading.push('<p class="loading"><img alt="loading" src="' + ctx + '/static/images/loading.gif"></p>');
			if(type == "table"){
				loading.push('</td></tr>');
			}
			$("#" + id).html(loading.join(""));
		},
		//在表格中生成nodata
		showNoData: function (id, type, colspan){
			var nodata = [];
			if(type == "table"){
				nodata.push('<tr><td colspan="' + colspan + '">');
			}
			nodata.push('<p class="nodata">暂无数据</p>');
			if(type == "table"){
				nodata.push('</td></tr>');
			}
			$("#" + id).html(nodata.join(""));
		},
		reset: function(id){
			$("#" + id)[0].reset();
		},
		showBtnLoading: function(btn_id){
			var button = $("#" + btn_id);
			//以下两个是bootstrap的方法。作用于bootstrap按钮
			button.attr("data-loading-text","加载中……");
			button.button('loading');
		},
		//重置按钮为可用状态
		btnReset: function(btn_id){
			$("#" + btn_id).button('reset');
		}
};

var dialog = {
		
		msg: function(msg){
			BootstrapDialog.show({
	            title: "提示",
	            message: msg,
	            buttons: [{
	            	 label: '关闭',
	                 action: function(dialog) {
	                     dialog.close();
	                 }
	            }]
	        });
		},
		warning: function(msg){
			BootstrapDialog.show({
	            title: "提示",
	            message: msg,
	            type: BootstrapDialog.TYPE_WARNING,
	            buttons: [{
	            	 label: '关闭',
	                 action: function(dialog) {
	                     dialog.close();
	                 }
	            }]
	        });
		},
		success: function(msg){
			BootstrapDialog.show({
	            title: "提示",
	            message: msg,
	            type: BootstrapDialog.TYPE_SUCCESS,
	            buttons: [{
	            	 label: '关闭',
	                 action: function(dialog) {
	                     dialog.close();
	                 }
	            }]
	        });
		},
		error: function(msg){
			BootstrapDialog.show({
	            title: "提示",
	            message: msg,
	            type: BootstrapDialog.TYPE_DANGER,
	            buttons: [{
	            	 label: '关闭',
	                 action: function(dialog) {
	                     dialog.close();
	                 }
	            }]
	        });
		},
		confirm: function(msg, callback){
			BootstrapDialog.show({
	            title: "提示",
	            message: msg,
	            buttons: [{
	                label: '确定',
	                cssClass: 'btn-primary', 
	                action: function(dialog) {
	                    callback();
	                    dialog.close();
	                }
	            }, {
	                label: '取消',
	                action: function(dialog) {
	                	dialog.close();
	                }
	            }]
	        });
		},
		edit: function(url, callback){
			var dialog = BootstrapDialog.show({
				title: false,
				width:"size-large",
				message: $('<div></div>').load(ctx + url),
				closeByBackdrop: false,
	            closeByKeyboard: false
			});
			callback(dialog);
		}
};

Date.prototype.pattern = function(fmt) {        
    var o = {        
    "M+" : this.getMonth()+1, //月份        
    "d+" : this.getDate(), //日        
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时        
    "H+" : this.getHours(), //小时        
    "m+" : this.getMinutes(), //分        
    "s+" : this.getSeconds(), //秒        
    "q+" : Math.floor((this.getMonth()+3)/3), //季度        
    "S" : this.getMilliseconds() //毫秒        
    };        
    var week = {        
    "0" : "\u65e5",        
    "1" : "\u4e00",        
    "2" : "\u4e8c",        
    "3" : "\u4e09",        
    "4" : "\u56db",        
    "5" : "\u4e94",        
    "6" : "\u516d"       
    };        
    if(/(y+)/.test(fmt)){        
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));        
    }        
    if(/(E+)/.test(fmt)){        
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);        
    }        
    for(var k in o){        
        if(new RegExp("("+ k +")").test(fmt)){        
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));        
        }        
    }        
    return fmt;        
};
//计算当前日期在本年度的周数
Date.prototype.getWeekOfYear = function(weekStart) { // weekStart：每周开始于周几：周日：0，周一：1，周二：2 ...，默认为周日
	weekStart = (weekStart || 0) - 0;
	if(isNaN(weekStart) || weekStart > 6)
		weekStart = 0;	

	var year = this.getFullYear();
	var firstDay = new Date(year, 0, 1);
	var firstWeekDays = 7 - firstDay.getDay() + weekStart;
	var dayOfYear = (((new Date(year, this.getMonth(), this.getDate())) - firstDay) / (24 * 3600 * 1000)) + 1;
	return Math.ceil((dayOfYear - firstWeekDays) / 7) + 1;
};

// 计算当前日期在本月份的周数
Date.prototype.getWeekOfMonth = function(weekStart) {
	weekStart = (weekStart || 0) - 0;
	if(isNaN(weekStart) || weekStart > 6)
		weekStart = 0;

	var dayOfWeek = this.getDay();
	var day = this.getDate();
	return Math.ceil((day - dayOfWeek - 1) / 7) + ((dayOfWeek >= weekStart) ? 1 : 0);
};

// 使用
//var date = new Date(2011, 11, 31); // 注意：JS 中月的取值范围为 0~11
//var weekOfYear = date.getWeekOfYear(); // 当前日期是本年度第几周
//var weekOfMonth = date.getWeekOfMonth(); // 当前日期是本月第几周

// 2011 年度有几周
//(new Date(2011, 11, 31)).getWeekOfYear();
// 2011 年度 1 月有几周
//(new Date(2011, 0, 31)).getWeekOfMonth();
