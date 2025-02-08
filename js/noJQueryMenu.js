document.addEventListener('DOMContentLoaded', function () {
    // 获取所有一级菜单项
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function (item) {
        // 获取当前一级菜单项下的二级菜单
        const subMenu = item.querySelector('.sub-menu');

        if (subMenu) {
            // 鼠标进入一级菜单项时显示二级菜单
            item.addEventListener('mouseenter', function () {
                subMenu.style.display = 'block';
            });

            // 鼠标离开一级菜单项时隐藏二级菜单
            item.addEventListener('mouseleave', function () {
                subMenu.style.display = 'none';
            });
        }

        // 获取当前一级菜单项下的所有二级菜单项
        const subItems = item.querySelectorAll('.sub-item');

        subItems.forEach(function (subItem) {
            // 获取当前二级菜单项下的三级菜单
            const subSubMenu = subItem.querySelector('.sub-menu');

            if (subSubMenu) {
                // 鼠标进入二级菜单项时显示三级菜单
                subItem.addEventListener('mouseenter', function () {
                    subSubMenu.style.display = 'block';
                });

                // 鼠标离开二级菜单项时隐藏三级菜单
                subItem.addEventListener('mouseleave', function () {
                    subSubMenu.style.display = 'none';
                });
            }
        });
    });
});




