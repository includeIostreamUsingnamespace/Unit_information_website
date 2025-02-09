document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.querySelector('.col_menu_head');
    const menuPanel = document.querySelector('.col_menu_con');
    const menuItems = document.querySelectorAll('.col_list .wp_column a'); // 所有菜单项

    menuContainer.addEventListener('click', function () {
        menuPanel.classList.toggle('show');
    });

    // 动态选中菜单项
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // 移除其他菜单项的 selected 类
            menuItems.forEach(i => i.classList.remove('selected'));
            // 为点击的菜单项添加 selected 类
            this.classList.add('selected');
        });
    });
});
