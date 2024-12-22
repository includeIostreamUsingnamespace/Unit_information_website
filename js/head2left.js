document.addEventListener("DOMContentLoaded", function() {
    // 获取 URL 中的查询参数
    const urlParams = new URLSearchParams(window.location.search);
    const highlightId = urlParams.get('highlight'); // 获取 highlight 参数的值

    // 输出 highlightId 的值
    console.log("highlight 参数的值为: ", highlightId);

    // 如果存在 highlight 参数，则修改对应 div 的样式
    if (highlightId) {
        console.log("highlight 参数存在，值为: " + highlightId);

        // 生成要查找的元素 ID
        const elementId = 'Left_navigation_bar_menu_item_id' + highlightId;
        console.log("要查找的元素 ID 为: ", elementId);

        const element = document.getElementById(elementId);

        // 判断是否找到了该元素
        if (element) {
            console.log("找到了该元素: ", element);


            // 设置背景色为蓝色
            element.style.backgroundColor = '#1e3799';
            console.log("已设置背景色为蓝色");

            // 可选：设置文字颜色为白色
            element.style.color = 'white';
            console.log("已设置文字颜色为白色");
        } else {
            console.log("没有找到该元素，可能的原因是 ID 不匹配或 HTML 还未加载");

        }
    } else {
        console.log("URL 中没有 highlight 参数");

    }
});