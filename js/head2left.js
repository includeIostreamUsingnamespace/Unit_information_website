// 获取顶部导航栏的所有子菜单项
const topNavItems = document.querySelectorAll('.Head_navigation_bar-submenu-item');

// 获取左侧导航栏的所有菜单项
const leftNavItems = document.querySelectorAll('#Left_navigation_bar_menu li div');

// 为每个顶部导航菜单项添加点击事件
topNavItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // 移除之前选中的颜色
        leftNavItems.forEach(li => {
            li.style.backgroundColor = ''; // 清空背景颜色
        });

        // 设置当前点击项的颜色
        leftNavItems[index].style.backgroundColor = 'yellow'; // 或者使用其他颜色
    });
});
