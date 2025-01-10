$(function(){
    // 当文档加载完成后执行以下代码
    // 绑定点击事件到搜索提交按钮
	$(".search-submit").click(function(event){
        // 移除按钮的name属性
		$(this).removeAttr("name");
        // 阻止默认的表单提交行为
		event.preventDefault();
        // 获取搜索输入框的值并去除首尾空格
		var val = $.trim($(".search-title").val());
        // 如果输入框不为空
		if(val!==""){
            // 提交搜索表单
			$(".wp-search").find("form").submit();
		}else{
            // 弹出提示框要求输入关键词
			alert("请输入关键词");
		}
        // 返回false以阻止默认行为
		return false;
	});
	
	/*导航*/
    // 定义一个空的自定义jQuery插件sudyNav
	$.fn.sudyNav = function(){};
    // 绑定鼠标悬停事件到导航菜单的每个li元素
	$(".wp-menu li").hover(function() {
        // 收起兄弟元素的子菜单
		$(this).siblings().find('.sub-menu').stop(true,true).slideUp(150)
        // 展开当前元素的子菜单
		$(this).children('.sub-menu').stop(true,true).slideDown(200);
        // 给当前元素添加hover类
		$(this).addClass('hover');
	}, function() {
        // 收起当前元素的子菜单
		$(this).children('.sub-menu').stop(true,true).slideUp(150);
        // 移除当前元素的hover类
		$(this).removeClass('hover');
    });
	
    // 遍历导航菜单的每个li元素
	$(".wp-menu li").each(function(){
        // 将菜单切换箭头元素移动到菜单链接元素内部
		$(this).children(".menu-switch-arrow").appendTo($(this).children(".menu-link"));
	});
	

	/*媒体链接*/
    // 遍历分享链接的每个li元素
	$(".shares li").each(function(){
        // 绑定鼠标悬停事件到每个a元素
		$(this).children("a").hover(function(){
            // 显示父元素下的内容
			$(this).parent().find(".con").stop(true,true).fadeIn();
		},function(){
            // 隐藏父元素下的内容
			$(this).parent().find(".con").stop(true,true).fadeOut();
		});
	});	

    // 计算当前窗口宽度与1920的比例
	var prec = $(window).width()/1920;
	if($(window).width() > 1920){    //判断缩放生效的显示器分辨率临界值
	 $('.inner,.wp-inner').css('zoom',prec)    //在对应的类名添加缩放样式
	 }
});