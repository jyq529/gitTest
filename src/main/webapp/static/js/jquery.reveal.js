/*
 * jQuery Reveal Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/


(function($) {
/*---------------------------
 Defaults f
 or Reveal
----------------------------*/
	 
/*---------------------------
 Listener for data-reveal-id attributes
--------------------- -------*/
	/*data-osource-id*/
	$('a[data-osource-id]').live('click', function(e) {
		e.preventDefault();
		
		
		var rule_id = $.cookie('ruleid');
  	    
    	 var d = new Date();
    	$.ajax({
    		type:"post",
    		url:"contion!searchMedia.action",
    		data:"d="+d.getTime()+"&ruleid="+rule_id+"&limitype=2",
    		dataType:"json",
    		success:function(data){
    		var limits = data[0].limitWebsites; //选中媒体
    		var weblists = data[0].weblists;//全部媒体
    		$("#mediaTarget2").html("");//初始
    		//media_multiple
    		var options="";
    		  for(i=0;i<weblists.length;i++){
    			var weblistid = weblists[i].id+"";
    			var chName = weblists[i].chName;
    			options+="<option value="+weblistid+">"+chName+"</option>";
    		}
    		  $("#media_multiple2").html(options);
    		
    		$("#media_multiple2 option").each(function(i){
    			var val = $(this).val();
    			for(j=0;j<limits.length;j++){
    				var tarwebid = limits[j];
    				if(val.indexOf(tarwebid) != -1){
    					$(this).attr('selected','selected');
    					$("#mediaTarget2").append("<option value="+$(this).val()+">"+$(this).text()+"</option>");
    				}
    			}
    		});
    	},
    		error:function(){
    		alert("失败");}
    	});
		
		/*var rule_id = $.cookie('ruleid');
		
		 var d = new Date();
	     	$.ajax({
	     		type:"post",
	     		url:"contion!searchMedia.action",
	     		data:"d="+d.getTime()+"&ruleid="+rule_id,
	     		dataType:"json",
	     		success:function(data){
	     		//media_multiple
	     		var options="";
	     		for(i=0;i<data.length;i++){
	     			options+="<option value="+data[i].id+">"+data[i].chName+"</option>"
	     		}
	     		
	     		
	     		
	     		$("#media_multiple2").html(options);
	     	},
	     		error:function(){
	     		alert("失败")}
	     	});*/
		
	     	
	     	
	   //  	$("#media_multiple2").html(options);
		var modalLocation = $(this).attr('data-osource-id');
		$('#'+modalLocation).reveal2($(this).data());
	});
	
	
	

	
	    /*人员信息*/
	
		$('a[user-info]').live('click', function(e) {
			
			$("#uloginnameInfor").html("");
			$("#unicknameInfor").html("");
			$("#udepartmmentInfor").html("");
			$("#ujobInfor").html("");
			$("#uusernumInfor").html("");
			$("#uroleInfor").html("");
	     	e.preventDefault();
	     	var modalLocation = $(this).attr('user-info');
			$('#'+modalLocation).reveal($(this).data());
			var userid= $(this).attr('id');
	    		 $.ajax({
	    				type:"post",
	    				url:"user/userInfo",
	    				data:"userid=" + userid,
	    				error:function(e){
	    			       alert('系统繁忙,请稍候再试!');
	    				},
	    				success:function(backData){
	    					$("#uid").val(backData.id);
	    					$("#ustate").val(backData.state);
	    					$("#usalt").val(backData.salt);
	    					$("#uloginname").val(backData.loginname);
	    					$("#loginnamey").val(backData.loginname);
	    		        	$("#unickname").val(backData.nickname);
	    		        	$("#udepartmment").val(((backData.departmment==null)?"":backData.departmment.id));
	    		        	$("#ujob").val(((backData.job==null)?"":backData.job.id));
         		        	$("#uusernum").val(backData.usernum);
	    					$("#usernumy").val(backData.usernum);
	    		        	$("#urole").val(backData.role.id);
	    		        	$("#uappointname").val(backData.appointname);
	    		        	isBossDefault('urole', 'uisBoss');
	    				}
	    			});
	    	
		});
		
		
		/*项目信息*/
		
		$('a[project_info]').live('click', function(e) {
            //清空原有信息
			$("#uprojectnumInfor").html("");
			$("#ubudgetnumInfor").html("");
			$("#uprojectnameInfor").html("");
			$("#unikenameInfor").html("");
			$("#uendtimeInfor").html("");
	     	e.preventDefault();
	     	var modalLocation = $(this).attr('project_info');
			$('#'+modalLocation).reveal($(this).data());
			var projectid= $(this).attr('id');
	    		 $.ajax({
	    				type:"post",
	    				url:"project/projectInfo",
	    				data:"projectId=" + projectid,
	    				error:function(e){
	    			       alert('系统繁忙,请稍候再试!');
	    				},
	    				success:function(backData){
	    					$("#proid").val(backData.project.id);
	    					$("#uprojectname").val(backData.project.projectname);
	    					$("#ustarttime").val(backData.project.starttime);
	    		        	$("#uendtime").val(backData.project.endtime);
	    		        	$("#uremark").val(backData.project.remark);
	    		        	$("#ucreatetime").val(backData.project.createtime);
	    		        	$("#uprojectnum").val(backData.project.projectnum);
	    		        	$("#ubudgetnum").val(backData.project.budgetnum);
	    		        	$("#unikename").val(backData.project.nikename);
	    		        	$("#utype").val(backData.project.type);
	    		        	$("#utypename").val(backData.project.typename);
	    		        	$("#uprojecttypename").val(backData.project.projecttypename);
	    		        	$("#ubusgroup").val(backData.project.busgroup);
	    		        	$("#ustate").val(backData.project.state);
	    		        	$("#ustatus").val(backData.project.status);
	    		        	$("#uclientname").val(backData.project.clientname);
	    		        	$("#umasterid").val(backData.project.masterid);
	    		        	$("#projectnumy").val(backData.project.projectnum);
	    		        	$("#budgetnumy").val(backData.project.budgetnum);
	    		        	$("#projectnamey").val(backData.project.projectname);
	    		        	
	    		        	var receiveuser="";
	    		        	var users=backData.userMaps;
	    		        	$("#Usertagedit").tagsinput("removeAll");
	    		        	for(var i=0;i<users.length;i++){
	    		        		receiveuser+=users[i].name+",";
	    		        		$('#Usertagedit').tagsinput('add', {'value':users[i].id, 'text':users[i].name});
	    		        	}
                            		
	    		        	
	    				}
	    			});
	    		 
	    		    
		});

		
		/*公共*/
	$('a[data-reveal-id]').live('click', function(e) {
     	e.preventDefault();
		var modalLocation = $(this).attr('data-reveal-id');
		$('#'+modalLocation).reveal($(this).data());
	});
	
	//data-remove-id
	$('a[data-remove-id]').live('click', function(e) {
     	e.preventDefault();
      
     	var rule_id = $.cookie('ruleid');
     	
     	 var d = new Date();
     	$.ajax({
     		type:"post",
     		url:"contion!searchMedia.action",
     		data:"d="+d.getTime()+"&ruleid="+rule_id+"&limitype=1",
     		dataType:"json",
     		success:function(data){
     		var limits = data[0].limitWebsites; //选中媒体
     		var weblists = data[0].weblists;//全部媒体
     		//media_multiple
     		var options="";
     		  for(i=0;i<weblists.length;i++){
     			var weblistid = weblists[i].id+"";
     			var chName = weblists[i].chName;
     			options+="<option value="+weblistid+">"+chName+"</option>";
     		}
     		$("#media_multiple1").html(options);
     		$("#mediaTarget1").html("");//初始
     		$("#media_multiple1 option").each(function(i){
     			var val = $(this).val();
     			for(j=0;j<limits.length;j++){
     				var tarwebid = limits[j];
     				if(val.indexOf(tarwebid) != -1){
     					$(this).attr('selected','selected');
     					$("#mediaTarget1").append("<option value="+$(this).val()+">"+$(this).text()+"</option>");
     				}
     			}
     		});
     	},
     		error:function(){
     		alert("失败")}
     	});
     	 
     	 
		var modalLocation = $(this).attr('data-remove-id');
		$('#'+modalLocation).reveal($(this).data());
	});
	
	
	
	$('a[data-setrule-id]').live('click',function(){
		
	});
	
	
	$('a[data-section-id]').live('click',function(){
		var val =  $("#rule_userid").val();
		var remark = $("#rule_userid3").val();
		
		var d = new Date();
		//$(".main .top .top_mid .banner .banner_flash").css('background','url(../images/"+picnum+".jpg)' );
		var name = this.name;
		
		if(remark == 'uid'){
			  val+="#termal#uid"
		  }
		  
		  if(remark == 'gid'){
			  val+="#termal#gid"
		  }
		
		 $.ajax({
				type:"post",
				url:"contion!searchSection.action",
				data:"d="+d.getTime()+"+&userid="+val+"&_index="+this.name,
				dataType:"json",
				error:function(e){
			       alert('系统繁忙,请稍候再试!');
				},
				success:function(backData){
					var title = backData.title;
					var content = backData.content;
					var _thtml="";
					for(t=0;t<title.length;t++){
						_thtml+="<li class='celectTag'><a name='"+title[t].mediatypeId+"' id='"+title[t].mediatypeId+"' data-section-id='myModal4' href='javascript:void(0)'>"+title[t].mediatypeName+"</a></li>";
					}
					var headtitle = "<tr><th>板块</th><th>是否显示</th><th>操作</th></tr>";
					var _inithtml="";
					var _inithide="";
					var _ruleids="<tr><td><input id='rule_userid' type='hidden' value='"+content[0].remark1+"' /></td><td><input id='rule_userid3' type='hidden' value='"+content[0].remark3+"' /></td></tr> ";
					//初始化头条信息
					for(j=0;j<title.length;j++){
							if(title[j].mediatypeId==1){
								for(c=0;c<content.length;c++){                                                                                                                                                                         ///uwinyq/view/setrule.jsp  myModal4
									//_inithtml+="<tr><input type='hidden' value="+content[c].remark1+"></input><td align='center'>"+content[c].mediatypeName+"</td><td align='center'><input type='checkbox'/></td><td align='center'><a href='javascript:void(0)' data-setrule-id='myModal4' name='"+content[c].mediatypeId+"'>设置规则</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='/uwinyq//view/scanrulecontent.jsp' name='"+content[c].mediatypeId+"'>查看内容</a></td></tr>";                                                                                                                                                                                                        //scanrulecontent()  /uwinyq//view/scanrulecontent.jsp  javascript:scanrulecontent('aa')     scanrulecontent("+content[c].mediatypeId+")' id='"+content[c].mediatypeId+"' name='"+content[c].mediatypeId+"                        
									_inithtml+="<tr><input type='hidden' value='"+content[c].remark1+"' id='user"+content[c].mediatypeId+"'/><input type='hidden' value="+content[c].remark2+" id='ruletype"+content[c].mediatypeId+"'/><input type='hidden' value="+content[c].remark3+" id='ruleremark"+content[c].mediatypeId+"'/><td align='center'>"+content[c].mediatypeName+"</td><td align='center'><input type='checkbox' id='isplay"+content[c].mediatypeId+"'/></td><td align='center'><a href='javascript:intercalate("+content[c].mediatypeId+");' id='"+content[c].mediatypeId+"' name='"+content[c].mediatypeId+"'>设置规则</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#'>查看内容</a></td></tr>"
								}
						   break;
						}
					}
					
					headtitle+=_ruleids+_inithtml;
					$('#tags').html(_thtml);
					$("#white").html(headtitle);
					
					/* 选中与不选中 */
					if(typeof(name) !='undefined'){
						for(i=1;i<20;i++){
							if(i!=name){
								$('a[name='+i+']').css('background','');
							}else{
								$('a[name='+i+']').css('background','url(../images/tagleft.gif)');
							}
						}
					}
					
				}
			});
		 
	})
	
	$('a[data-prule-id]').live('click', function(e) {
     	$("input[id=personal]").each(function(i){
			  if(this.checked){
				  var val = $(this).val();
				  
				  var remark = this.name;
				  var login_name = $(this).attr('alt');
				  
				  if(remark == 'uid'){
					  val+="#termal#uid"
				  }
				  
				  if(remark == 'gid'){
					  val+="#termal#gid"
				  }
				  var d = new Date();
				  
				  $.ajax({
						type:"post",
						url:"contion!searchSection.action",
						data:"d="+d.getTime()+"+&userid="+val+"",
						dataType:"json",
						error:function(e){
					       alert('系统繁忙,请稍候再试!');
						},
						success:function(backData){
							var title = backData.title;
							var content = backData.content;
							
							var _thtml="";
							for(t=0;t<title.length;t++){
								//background-image: url('/uwinyq/images/tagleft.gif')
								//_thtml+="<li class='celectTag'><a onClick='selectTag(tagContent1,this)' name='"+title[t].mediatypeId+"' data-section-id='myModal4' href='javascript:alert('info.....')'>"+title[t].mediatypeName+"</a></li>";
								_thtml+="<li class='celectTag'><a name='"+title[t].mediatypeId+"'  data-section-id='myModal4' href='javascript:void(0)'>"+title[t].mediatypeName+"</a></li>";
							}
							var headtitle = "<tr><th>板块</th><th>是否显示</th><th>操作</th></tr>";
							var _inithtml="";
							var _inithide="";
							var _ruleids="<tr><td><input id='loginName' type='hidden' value='"+login_name+"'/></td><td><input id='rule_userid' type='hidden' value='"+content[0].remark1+"' /></td><td><input id='rule_userid3' type='hidden' value='"+content[0].remark3+"' /></td></tr> ";
							//初始化头条信息
							for(j=0;j<title.length;j++){
									if(title[j].mediatypeId==1){
										for(c=0;c<content.length;c++){                                                                                                                                 //intercalate  /uwinyq/view/setrule.jsp
											////alert('content[c].remark1 用户id: '+content[c].remark1);
											//alert('content[c].remark2 舆情／头条id:'+content[c].remark2);
											//alert('content[c].mediatypeId板块id  : '+content[c].mediatypeId);
											_inithtml+="<tr><input type='hidden' value='"+content[c].remark1+"' id='user"+content[c].mediatypeId+"'/><input type='hidden' value="+content[c].remark2+" id='ruletype"+content[c].mediatypeId+"'/><input type='hidden' value="+content[c].remark3+" id='ruleremark"+content[c].mediatypeId+"'/><td align='center'>"+content[c].mediatypeName+"</td><td align='center'><input type='checkbox' id='isplay"+content[c].mediatypeId+"'/></td><td align='center'><a href='javascript:intercalate("+content[c].mediatypeId+");' id='"+content[c].mediatypeId+"' name='"+content[c].mediatypeId+"'>设置规则</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#'>查看内容</a></td></tr>";
										}
								   break;
								}
							}
							
							headtitle+=_ruleids+_inithtml;
							$('#tags').html(_thtml);
							$("#white").html(headtitle);
							
							
						}
					});
				  
				  var modalLocation = $('a[data-prule-id]').attr('data-prule-id');
				  $('#'+modalLocation).reveal($('a[data-prule-id]').data());
			  }
			  
		})
	});
	
	
	
	
	
//information push
$('a[data-sentiment-id]').live('click', function(e) {
     	e.preventDefault();
		var modalLocation = $(this).attr('data-sentiment-id');
		//checked="checked"
		/**  初始化 **/
		  var str="";
		  var count=0;
		  $("#targetGroup").empty();
		  $("#targetUser").empty();
		  
		  $("input[id=qid]").each(function(i){
			  if(this.checked){
				  //获取id
				  str+=this.value+"filter";
				  count++;
			  }
		})
		if(count==0){
			alert('请选择要推送的舆情头条!');
			return;
		}
		$('#'+modalLocation).reveal($(this).data());
		   var d = new Date();
		  
		  $.ajax({
				type:"get",
				url:"headinformationAction.action",
				data:"d="+d.getTime()+"+&mediaid="+str+"",
				error:function(e){
			       alert('系统繁忙,请稍候再试!');
				},
				success:function(backData){
				 $("#sentiment").html(backData);
				}
			});
	});
	



	//群选择用户加入
	$('a[data-id]').live('click', function(e) {
		var groups = $("#_ckgroupid").val();//存放所有被选中的checkBox的id值
//		   $('input[name="Group_ID"]').each(function(){
//		      if($(this).attr("checked") == 'checked'){
////		    	  groups.push($(this).attr('id'))
//		    	  groups+=$(this).val()+',';
//		      }		
//		   });
//		   groups = groups.substring(0,groups.length-1);
//		   alert(groups);
		   if(groups==''){
				alert('你还没有选择群!!!');
				}else{
					//$('#groupId').val(groups)
					e.preventDefault();
					var modalLocation = $(this).attr('data-id');
					$('#'+modalLocation).reveal($(this).data());
				}
	});
	//用户加入群
	$('a[data-reveal]').live('click', function(e) {
//		alert('aa');
		var teminalUsers = $("#shabishabi").val();//存放所有被选中的checkBox的id值

		   if(teminalUsers==''){
				alert('你还没有选择用户!!!');
				}else{
					$('#teminalUsersaaa').val(teminalUsers)
					e.preventDefault();
					var modalLocation = $(this).attr('data-reveal');
					$('#'+modalLocation).reveal($(this).data());
				}
	});
	
	
	
	// view user 
	$('a[data-viewuser-id]').live('click', function(e) {
     	e.preventDefault();
		
		var val = $(this).attr("value");
		
		var modalLocation = $(this).attr('data-viewuser-id');
		$('#'+modalLocation).reveal($(this).data());
	});
	
	
	
	//view group
	$('a[data-viewgroup-id]').live('click', function(e) {
     	e.preventDefault();
		var modalLocation = $(this).attr('data-viewgroup-id');
		
		var val = $(this).attr("value");
//		alert(val);
		
		
		$('#'+modalLocation).reveal($(this).data());
	});
	
	
	
/*---------------------------
 Extend and Execute
----------------------------*/

    $.fn.reveal = function(options) {
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-reveal-modal' //the class of a button or element that will close an open modal
		    	
    	}; 
    	
        //Extend dem' options
        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        
/*---------------------------
 Global Variables
----------------------------*/
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.reveal-modal-bg');

/*---------------------------
 Create Modal BG
----------------------------*/
			if(modalBG.length == 0) {
				modalBG = $('<div class="reveal-modal-bg" />').insertAfter(modal);
				modalBG.css({position:"absolute",height:$(document).height(),opacity:"0.35"});
			}		    
        	
/*---------------------------
 Open and add Closing Listeners
----------------------------*/
        	//Open Modal Immediately
    		openModal();
			
    		//closeModal();
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent',closeModal)
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent',closeModal)
			}
			
    		
/*---------------------------
 Open & Close Animations
----------------------------*/
			//Entrance Animations
			function openModal() {
				modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure,
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}   
				}
			}    	
			
			//Closing Animation
			function closeModal() {
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset,
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}   			
				}
			}
			
/*---------------------------
 Animations Locks
----------------------------*/
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call  data-mediapack-id
    
    
    
    
    
    
    
    $.fn.reveal2 = function(options) {
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-reveal2-modal' //the class of a button or element that will close an open modal
    	}; 
    	
        //Extend dem' options
        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        
/*---------------------------
 Global Variables
----------------------------*/
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.reveal-modal2-bg');

/*---------------------------
 Create Modal BG
----------------------------*/
			if(modalBG.length == 0) {
				modalBG = $('<div class="reveal-modal2-bg" />').insertAfter(modal);
				modalBG.css({position:"absolute",height:$(document).height(),opacity:"0.35"});
			}		    
        	
/*---------------------------
 Open and add Closing Listeners
----------------------------*/
        	//Open Modal Immediately
    		openModal();
			
    		//closeModal();
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent',closeModal)
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent',closeModal)
			}
			
    		
/*---------------------------
 Open & Close Animations
----------------------------*/
			//Entrance Animations
			function openModal() {
				modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure,
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}   
				}
			}    	
			
			//Closing Animation
			function closeModal() {
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset,
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}   			
				}
			}
			
/*---------------------------
 Animations Locks
----------------------------*/
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call  data-mediapack-id
    
   
    
    $.fn.media = function(options) {
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-media-modal' //the class of a button or element that will close an open modal
		    	
    	}; 
    	
        //Extend dem' options
        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        
/*---------------------------
 Global Variables
----------------------------*/
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.media-modal-bg');

/*---------------------------
 Create Modal BG
----------------------------*/
			if(modalBG.length == 0) {
				modalBG = $('<div class="media-modal-bg" />').insertAfter(modal);
				modalBG.css({position:"absolute",height:$(document).height(),opacity:"0.35"});
			}		    
        	
/*---------------------------
 Open and add Closing Listeners
----------------------------*/
        	//Open Modal Immediately
    		openModal();
			
    		//closeModal();
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent',closeModal)
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent',closeModal)
			}
			
    		
/*---------------------------
 Open & Close Animations
----------------------------*/
			//Entrance Animations
			function openModal() {
				modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure,
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}   
				}
			}    	
			
			//Closing Animation
			function closeModal() {
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset,
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}
					var page = $("#aPackMedia").val();
					location.href="mediapack!queryAll.action?page="+page;
				
				}
			}
			
/*---------------------------
 Animations Locks
----------------------------*/
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call  data-mediapack-id
    
    
    
    
    $.fn.count = function(options) {
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-count-modal' //the class of a button or element that will close an open modal
		    	
    	}; 
    	
        //Extend dem' options
        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        
/*---------------------------
 Global Variables
----------------------------*/
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.count-modal-bg');

/*---------------------------
 Create Modal BG
----------------------------*/
			if(modalBG.length == 0) {
				modalBG = $('<div class="count-modal-bg" />').insertAfter(modal);
				modalBG.css({position:"absolute",height:$(document).height(),opacity:"0.35"});
			}		    
        	
/*---------------------------
 Open and add Closing Listeners
----------------------------*/
        	//Open Modal Immediately
    		openModal();
			
    		//closeModal();
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent',closeModal)
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent',closeModal)
			}
			
    		
/*---------------------------
 Open & Close Animations
----------------------------*/
			//Entrance Animations
			function openModal() {
				modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure,
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}   
				}
			}    	
			
			//Closing Animation
			function closeModal() {
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset,
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}
					var page = $("#aPackMedia").val();
					location.href="mediapack!queryAll.action?page="+page;
				    
					var page = $("#partpage").val();
					
					location.href="mediapack!queryAll.action?page="+page;
				}
			}
			
/*---------------------------
 Animations Locks
----------------------------*/
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call  data-mediapack-id
    
    
  
    //关闭addusergroup.jsp页面
    $.fn.revealuser = function(options) {
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-revealuser-modal' //the class of a button or element that will close an open modal
		    	
    	}; 
    	
        //Extend dem' options
        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        
/*---------------------------
 Global Variables
----------------------------*/
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.reveal-modal-bg');

/*---------------------------
 Create Modal BG
----------------------------*/
			if(modalBG.length == 0) {
				modalBG = $('<div class="reveal-modal-bg" />').insertAfter(modal);
				modalBG.css({position:"absolute",height:$(document).height(),opacity:"0.35"});
			}		    
        	
/*---------------------------
 Open and add Closing Listeners
----------------------------*/
        	//Open Modal Immediately
    		openModal();
			
    		//closeModal();
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent',closeModal)
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent',closeModal)
			}
			
    		
/*---------------------------
 Open & Close Animations
----------------------------*/
			//Entrance Animations
			function openModal() {
				modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure,
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}   
				}
			}    	
			
			//Closing Animation
			function closeModal() {
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset,
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}   			
				}
			}
			
/*---------------------------
 Animations Locks
----------------------------*/
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call  data-mediapack-id
    
    
})(jQuery);
        