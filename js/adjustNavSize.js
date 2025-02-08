(function() {
    // 用于调整导航条大小的函数
    function adjustNavSize() {
        var navElement = document.getElementById('nav');

        // 保证导航条宽度始终为 100%
        navElement.style.width = '100%';

        // 固定字体大小为16px
        navElement.style.fontSize = '16px';

        // 防止缩放时的大小波动：禁用浏览器的缩放效果
        if (document.body.style.zoom) {
            document.body.style.zoom = 1;  // 强制设置为1，避免页面缩放
        }

        // 如果你还想在页面缩小时，对其它属性做调整，可以在这里加上
        // 比如字体大小或其它的调整
    }

    // 监听页面加载事件：页面加载时立即调整
    window.addEventListener('load', adjustNavSize);

    // 监听resize事件：窗口大小变化时调用
    window.addEventListener('resize', adjustNavSize);
})();
