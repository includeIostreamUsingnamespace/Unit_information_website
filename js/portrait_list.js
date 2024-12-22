// 使树形菜单可展开/收起
document.addEventListener('DOMContentLoaded', function() {
    const treeMenuItems = document.querySelectorAll('.portrait_list-tree-menu > li > a');

    treeMenuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // 切换当前菜单项的展开/收起状态
            const parentLi = item.parentElement;
            parentLi.classList.toggle('expanded');

            // 阻止链接默认行为
            event.preventDefault();
        });
    });

    // 处理搜索框的行为
    const searchBox = document.querySelector('.portrait_list-search-box');
    const searchButton = searchBox.querySelector('button');
    const searchInput = searchBox.querySelector('input[type="text"]');

    // 搜索按钮点击事件
    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();

        if (searchTerm) {
            // 在此处执行搜索操作，例如发送请求或过滤内容
            console.log('Searching for: ' + searchTerm);
        }
    });

    // 监听输入框的回车事件，触发搜索
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchButton.click();
        }
    });

    // 为所有树形菜单项添加点击事件
    const sidebarItems = document.querySelectorAll('.portrait_list-sidebar a');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            // 这里可以根据需要做一些页面跳转或内容展示的操作
            console.log('Sidebar item clicked:', item.textContent);
        });
    });

    // 监听页面上方的导航栏点击事件
    const navbarLinks = document.querySelectorAll('.portrait_list-navbar ul li a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // 可以在这里处理点击导航栏后发生的事件，比如页面跳转或显示不同的内容
            console.log('Navbar link clicked:', link.textContent);
        });
    });
});

// 这个函数将树形菜单的状态恢复为默认状态（即全部收起）
function resetTreeMenu() {
    const expandedItems = document.querySelectorAll('.portrait_list-tree-menu li.expanded');
    expandedItems.forEach(item => {
        item.classList.remove('expanded');
    });
}

// 页面上可能有一个按钮，用于重置菜单
const resetButton = document.querySelector('#reset-tree-menu-btn');
if (resetButton) {
    resetButton.addEventListener('click', resetTreeMenu);
}
