<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
</head>
<body bgcolor="#2D2E32" style="padding:0px;">
    <div class="container-fluid" style="padding-left:0px;padding-right:0px;">
			<div class="panel panel-default" style="border-radius:0px;background-color: #2D2E32;color: #fff;width:183px;">
				<div class="panel-body" id="orn_left" style="">
			        <div class="row">
			            <div class="col-md-12" style="padding:0px;">
			                <ul id="main-nav" class="main-nav nav nav-stacked">
			                </ul>
			            </div>
			        </div>
				</div>
			</div>
    </div>  
    
<script type="text/javascript">
	var menu = '<%=request.getParameter("menu")%>';
	$("#orn_left").css("min-height",document.documentElement.clientHeight-115);
	// 1.请求menu表, 按照现有顺序查出菜单
	// 2.遍历查询结果, 逐条显示菜单, 当有pid时, 把上一个一级菜单封口(第一条和最后一条需要特殊处理下)
	var imageHtml = [];

	$.ajax({
		type : 'POST',
		url : ctx + "/work/model/queryMenu",
		data : {},
		async : true,
		success : function(data) {
			var oneLength = data.data.length;
			for (var i = 0; i < oneLength; i++) {
				var oneRow = data.data[i];
				imageHtml.push('	<li style="padding-top:4px;padding-bottom:4px;">');
				imageHtml.push('		<a style="padding-top:4px; padding-bottom:4px;" id="oneMenu_' + oneRow.id +'" href="#twoMenu_' + oneRow.id +'" class="nav-header collapsed">');
				imageHtml.push('			<i class="glyphicon ' + oneRow.icon + '" style="color:#FFFFFF;margin-right:5px;">');
				imageHtml.push('			</i>');
				imageHtml.push('			<span style="font-size:12px;color: #ffffff;">' + oneRow.menuName);
				imageHtml.push('				<span class="pull-right glyphicon glyphicon-chevron-toggle">');
				imageHtml.push('				</span>');
				imageHtml.push('			</span>');
				imageHtml.push('		</a>');
				imageHtml.push('		<ul id="twoMenu_' + oneRow.id + '" class="nav nav-list secondmenu collapse">');
				var twoLength = data.data[i].secondList.length;
				for (var j = 0; j < twoLength; j++) {
					var twoRow = data.data[i].secondList[j];
					imageHtml.push('			<li id="menu_' + twoRow.id + '">');
					imageHtml.push('				<a style="padding-top:4px; padding-bottom:4px;" href="' + ctx + twoRow.url + '?menu='+twoRow.id+'">');
					imageHtml.push('					<span style="font-size:12px;color: #ffffff;">' + twoRow.menuName);
					imageHtml.push('					</span>');
					imageHtml.push('				</a>');
					imageHtml.push('			</li>');
				}
				imageHtml.push('		</ul>');
				imageHtml.push('	</li>');
			}

			$('#main-nav').html(imageHtml.join(""));

			$("a[id^='oneMenu_']").hover(
					//$("#oneMenu_32").hover(
				  function () {
						var hoverid = $(this).attr("id");
					  $("a[id^='oneMenu_']").each(function(i) {
						  var otherid = $(this).attr("id");
						  var otherid1 = otherid.split("_")[1];
						  if (otherid == hoverid) {
							  // 该一级菜单展开
							  $("#" + otherid).removeClass();
							  $("#" + otherid).addClass("nav-header");
							  $("#twoMenu_" + otherid1).removeClass();
							  $("#twoMenu_" + otherid1).addClass("nav nav-list secondmenu collapse in");
						  } else {
							  if ($("#menu_"+menu).parent().attr("id") != "twoMenu_" + otherid1) {
								  // 其他一级菜单收缩
								  $("#" + otherid).removeClass();
								  $("#" + otherid).addClass("nav-header collapsed");
								  $("#twoMenu_" + otherid1).removeClass();
								  $("#twoMenu_" + otherid1).addClass("nav nav-list secondmenu collapse");
							  } else {
								  // 当前选中菜单展开
								  $("#" + otherid).removeClass();
								  $("#" + otherid).addClass("nav-header");
								  $("#twoMenu_" + otherid1).removeClass();
								  $("#twoMenu_" + otherid1).addClass("nav nav-list secondmenu collapse in");
							  }
						  }
					  })
				  },
				  function () {
				  }
			);
			$("#main-nav").hover(
				  function () {
				  },
				  function () {
					  $("a[id^='oneMenu_']").each(function(i) {
						  var otherid = $(this).attr("id");
						  var otherid1 = otherid.split("_")[1];
						  if ($("#menu_"+menu).parent().attr("id") != "twoMenu_" + otherid1) {
							  // 其他一级菜单收缩
							  $("#" + otherid).removeClass();
							  $("#" + otherid).addClass("nav-header collapsed");
							  $("#twoMenu_" + otherid1).removeClass();
							  $("#twoMenu_" + otherid1).addClass("nav nav-list secondmenu collapse");
						  } else {
							  // 当前选中菜单展开
							  $("#" + otherid).removeClass();
							  $("#" + otherid).addClass("nav-header");
							  $("#twoMenu_" + otherid1).removeClass();
							  $("#twoMenu_" + otherid1).addClass("nav nav-list secondmenu collapse in");
						  }
					  })
				  }
			);
			activeMenu(menu);
		},
		error : function() {
		}
	});
</script>  
</body>
</html>
