(function() {
    // 检测是否为移动端
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // 动态加载脚本的函数
    function loadScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = function() {
            if (typeof callback === 'function') {
                callback();
            }
        };
        document.head.appendChild(script);
    }

    // 检测是否为移动端或者屏幕宽度小于768像素
    if (isMobile() || window.innerWidth <= 768) {
        loadScript('https://code.jquery.com/jquery-1.7.1.min.js', function() {
            console.log('jQuery加载完成，可以使用了！');
            // 在这里可以执行一些需要使用jQuery的代码
            // 或者在页面其他地方通过回调函数调用
        });
    } else {
        console.log('非移动端且屏幕宽度大于等于768像素，不加载jQuery');
    }
})();