$(function(){
	// 初始化函数，当DOM加载完成后执行
	/*栏目图片高度*/
	// 获取类名为"l-banner"的元素下的所有img元素
	var $lbannerImg = $(".l-banner").find("img");
	// 获取img元素的src属性值
	var imgsrc = $lbannerImg.attr("src");
	// 检查img元素的src属性值是否为空或未定义
	if(imgsrc == "" || imgsrc == undefined){
		// 如果src为空或未定义，则尝试获取img元素的自定义数据属性"data-imgsrc"
		var imgsrc = $lbannerImg.data("imgsrc");
	}
	// 注释掉的代码：原本打算直接将img元素的src属性设置为imgsrc
	//$lbannerImg.attr("src",imgsrc);
	// 将类名为"l-banner"的元素的背景图片设置为imgsrc
	$(".l-banner").css("backgroundImage","url("+imgsrc+")");


	// 将类名为"possplit"的元素的文本内容设置为">"
	$(".possplit").text(">");
}); 




