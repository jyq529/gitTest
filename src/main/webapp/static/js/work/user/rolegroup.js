var query_name=""; //用于存储搜索条件的全局变量

/*打开页面自动加载全部列表*/
$(document).ready(function() {
	refreshRoleGroup();
	jveInit();
	$('#menutreemodal').on('hidden.bs.modal', function (e) {
		common_setBtnAble_roleGroup(true);
	});
	$('#modifyRoleGroupInfoModal').on('hidden.bs.modal', function (e) {
		common_setBtnAble_roleGroup(true);
	});
});

/*搜索框查询*/
function roleGroupQueryConditions(){
	refreshRoleGroup(null,true);
}
/*重置*/
function resetform(){
	$("#role_name").val("");
	query_name="";
}
/*清空模态窗口的表单值*/
function clearRoleGroupForm(){
	$("#roleGroup_id").val("");
	$("#roleGroupName").val("");
	$("#roleGroupRemark").val("");
}
/*新增角色组*/
function openRoleGroup(data){
	//console.log('打开角色组model');
	//console.log(data);
	clearRoleGroupForm();
	if(data !== undefined && data !== null && data !== ''){
		$("#roleGroup_myModalLabel").html("修改角色组信息");
		$("#roleGroup_id").val(data.id);
		$("#roleGroupName").val(data.name);
		$("#roleGroupRemark").val(data.remark);
	}else{
		$("#roleGroup_myModalLabel").html("新建角色组信息");
	}
	$("#modifyRoleGroupInfoModal").modal("show");//打开编辑角色组窗口
}

function jveInit() {
	
	// 解除表单提交监听,防止表单重复提交
	$('#fo_modi_roleGroup').validationEngine('detach');
	//console.log("解除表单提交监听,防止表单重复提交");

	// 将表单提交及其表单项的验证绑定到jquery validation engine
	$("#fo_modi_roleGroup").validationEngine("attach", {
		promptPosition : "topRight:20,0",// 提示信息位置：右上，偏移量：x:-100,y:0
		//validationEventTrigger : "blur",// 触发验证事件
		binded : true,// 非即时验证
		//bindMethod : 'bind',
		// addPromptClass: 'formError-noArrow formError-small',
		showOneMessage : true,
		ajaxFormValidationMethod : 'post',
		maxErrorsPerField : 1,// 单个元素显示错误提示的最大数量，值设为数值。默认 false 表示不限制
		autoHidePrompt: true,// 是否自动隐藏提示信息
		autoHideDelay: 2000,// 自动隐藏提示信息的延迟时间（单位：ms）
		// fadeDuration: 0.9,// 隐藏提示信息淡出的时间
		scroll : false, // 提示信息不滚屏
//		ajaxFormValidation:true,
//		onBeforeAjaxFormValidation:ajaxValidationCallback,
		onValidationComplete : function(form, status) {// 表单提交验证完成时的回调函数,即使验证都通过也不提交表单
			if (status) {
				common_setBtnAble_roleGroup(false);
				editRoleGroupInfoData();
			}
		},
		
	});
}
/*保存、更新角色组*/
function editRoleGroupInfoData(){
	$.ajax({
		cache: true,
        type: "post",          
        url:'saveRoleGroup',
        data:$('#fo_modi_roleGroup').serialize(),
        async: false,
        success: function(data) {
        	if(data.valid){//保存、更新成功
        		showMsg({
        			msg : data.msg,
        			type : "success"
        		});
        		$('#modifyRoleGroupInfoModal').modal('hide');//手动隐藏模态框
        		
        		refreshRoleGroup();//加载列表数据
        	}else{
        		common_setBtnAble_roleGroup(true);
        		showMsg({
        			msg : data.msg,
        			type : "error"
        		});
        	}
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
	     	permissionError(XMLHttpRequest);       	
		}
	});
}
/*刷新分页列表*/
function refreshRoleGroup(page,query_flag) {
	common.showLoading("rolegroup_tbody", "table", 3); // 显示加载中必加
	if (query_flag) {
		query_name = $("#role_name").val();
	}
	
	var rows = com_page_account; 

	var requestParams = { //发送参数
			page : page ==null?1:page,
			rows : rows,
			name : query_name
	};

	$.ajax({
		type : 'POST',
		url : "queryRoleGroup",
		data : requestParams,
		//dataType: "json",
		async : true,
		success : function(data) {
			common_set_page_data(data.data, requestParams.page); // 分页设置必加
			if (data.data.rows.length > 0) {
				var alterdata = "";
				for (var i = 0; i < data.data.rows.length; i++) {
					var rowdata = data.data.rows[i];
					var rowdataJson = JSON.stringify(data.data.rows[i]);
					//console.log(rowdata);
					alterdata+="<tr id="+rowdata.id+"><td align='center'>"+rowdata.name+"</td>"
					 		+"<td align='center'>"+(rowdata.remark == null ? "":rowdata.remark)+"</td>"
					 		+"<td align='left'><input value='分配权限' onclick='setPermissions(\""+rowdata.id+"\");' style='color:#EB6202;border:solid 1px #EB6202;border-radius:2px;' type='button' id='btn_setPermissions_" + rowdata.id + "'/>&nbsp;&nbsp;&nbsp;"
					 		//+"<td align='center'><a onclick='setPermissions(\""+rowdata.id+"\");'>分配权限</a>&nbsp;&nbsp;&nbsp;"
					 		+"<a id='"+ rowdata.id +"' onclick='openRoleGroup("+rowdataJson+");'><img src='"+ctx+"/static/images/edit.png'/></a>&nbsp;&nbsp;&nbsp;"
					 		if(rowdata.flag == '1'){//可删除
					 			alterdata+="<a id='"+ rowdata.id +"' onclick='deleteRoleGroup("+rowdata.id+");'><img src='"+ctx+"/static/images/delete.png'/></a>"
					 		}
					 		+"</td></tr>";
				}
				$("#rolegroup_tbody").html(alterdata);
		} else {
			$("#rolegroup_tbody").html("<tr><td colspan='3' align='center'>未查询出符合条件的数据！</td></tr>");
		}
		paging({
			id : "rolegroup_page",
			currentPage : requestParams.page,
			totalPages : data.data.pageCount,
			callback : function(page) {
				refreshRoleGroup(page);
			}
		});
		}
	});
}	

//删除角色组
function deleteRoleGroup(roleGroupId){
	showMsg({
		msg : "确定删除吗？",
		type : "question",
		mode : 1,
		success : function() {
			$.ajax({
				type: "post",
		        url: "deleteRoleGroup",
		        data: {roleGroupId:roleGroupId},
		        dataType: "json",
		        success: function(data){
		        	if(data.valid==true){
		        		showMsg({
		        			msg : "删除成功！",
		        			type : "success"
		        		});
		        	} else {
		        		showMsg({
		        			msg : data.msg,
		        			type : "error"
		        		});
		        	}		    
		        	refreshRoleGroup();
		        }
			}); 
		}
	});
}

// 权限配置
function setPermissions(roleId) {
	$("#menutreemodal").modal("show");
	$("#roleId").val(roleId);
	
	// ajax请求查询所有菜单和已分配菜单
	$.ajax({
		type : 'POST',
		url : ctx + "/work/model/queryAllMenu",
		data : {roleId:$("#roleId").val()},
		async : true,
		success : function(data) {
			var modules = data.data.menu;
			var checked = data.data.menuIds;
			var checkedAry = checked.split(",");
			if(modules){
				for(var i in modules){
//					if (modules[i].icon != null && modules[i].icon != "" && modules[i].icon != undefined) {
//						modules[i].iconSkin = "glyphicon " + modules[i].icon;
//					}
					modules[i].open = true;
					for(var j in checkedAry){
						if(checkedAry[j] == modules[i].id){
							modules[i].checked = true;
						}
					}
				}
			}
			//声明ztree初始化参数，配置id，pid，并设置点击事件
			var setting = {
				data: {
					key: {
						name: "menuName"
					},
					simpleData: {
						enable: true,
						idKey: "id",
						pIdKey: "pid"
					}
				},
				check: {
					enable: true,
					autoCheckTrigger: true
				}
			};
			$.fn.zTree.init($("#module_auth_tree"), setting, modules);
		},
		error : function() {
		}
	});
}

// 保存选中的菜单
function savePermissions() {
	common_setBtnAble_roleGroup(false);
	// 获取选中的菜单数组对象
	var treeObj = $.fn.zTree.getZTreeObj("module_auth_tree");
	var nodes = treeObj.getCheckedNodes(true);
	
	var len = nodes.length;
	var menuIds = "";
	for (var i = 0; i < len; i++) {
		menuIds = menuIds + "," + nodes[i].id;
	}
	if (menuIds.length > 0) {
		menuIds = menuIds.substring(1);
	}
	// ajax请求保存选中的菜单
	$.ajax({
		type : 'post',
		url : ctx + "/work/usermodelrole/addRoleModel",
		data : {roleId:$("#roleId").val(), modelIds:menuIds},
		async : true,
		success : function(data) {
			if (data.valid) {// 保存成功
				$("#menutreemodal").modal("hide");
				showMsg({
					msg : data.msg,
					type : "info"
				});
			} else {
				common_setBtnAble_roleGroup(true);
				showMsg({
					msg : data.msg,
					type : "error"
				});
			}
		},
		error : function() {
		}
	});
}
/*模态窗口按钮状态修改*/
function common_setBtnAble_roleGroup(flag) {
	if (flag) {
		setBtnAble('waitingImg_roleGroup','btn_save_roleGroupInfo',["modiRoleGroup_cancelBtn","modiRoleGroup_close_icon"]); // 启用按钮
		setBtnAble('waitingImg_permissions','btn_save_permissions',["modiPermissions_cancelBtn","permissions_close_icon"]); // 启用按钮
	} else {
		setBtnDisabled('waitingImg_roleGroup','btn_save_roleGroupInfo',["modiRoleGroup_cancelBtn","modiRoleGroup_close_icon"]); //禁用按钮
		setBtnDisabled('waitingImg_permissions','btn_save_permissions',["modiPermissions_cancelBtn","permissions_close_icon"]); //禁用按钮
	}
}