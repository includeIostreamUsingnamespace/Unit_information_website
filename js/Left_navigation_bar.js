// 当文档内容完全加载和解析完成时执行以下函数
document.addEventListener("DOMContentLoaded", function () {
    // 获取所有具有类名 "Left_navigation_bar_item" 的元素，并存储在 menuItems 变量中
    const menuItems = document.querySelectorAll(".Left_navigation_bar_item");
    // 遍历每一个菜单项
    menuItems.forEach(item => {
        // 获取当前菜单项中的具有类名 "Left_navigation_bar_title" 的元素，并存储在 title 变量中
        const title = item.querySelector(".Left_navigation_bar_title");
        // 为 title 元素添加点击事件监听器
        title.addEventListener("click", function () {
            // 再次遍历所有菜单项
            menuItems.forEach(otherItem => {
                // 如果当前遍历的菜单项不是被点击的菜单项
                if (otherItem !== item) {
                    // 移除该菜单项的 "active" 类
                    otherItem.classList.remove("active");
                }
            });
            // 切换被点击菜单项的 "active" 类（如果已有则移除，如果没有则添加）
            item.classList.toggle("active");
        });
    });
});