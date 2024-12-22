// 获取所有树形菜单的链接
var treeMenuLinks = document.querySelectorAll('.tree-menu a');
// 获取右侧详细信息区域的元素
var titleElement = document.getElementById('title');
var publishDateElement = document.getElementById('publish-date');
var viewsElement = document.getElementById('views');
var docNumberElement = document.getElementById('doc-number');
var publisherElement = document.getElementById('publisher');
var articleContentElement = document.getElementById('article-content');

// 为每个树形菜单链接添加点击事件监听器
treeMenuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // 根据点击的链接获取对应的详细信息并填充到右侧区域
        var data = getDataByLink(link.textContent);
        if (data) {
            titleElement.textContent = data.title;
            publishDateElement.textContent = data.publishDate;
            viewsElement.textContent = data.views;
            docNumberElement.textContent = data.docNumber;
            publisherElement.textContent = data.publisher;
            articleContentElement.textContent = data.articleContent;
        } else {
            // 如果未找到对应数据，显示默认提示信息
            titleElement.textContent = '未找到对应信息标题';
            publishDateElement.textContent = '未定义发布日期';
            viewsElement.textContent = '未定义浏览量';
            docNumberElement.textContent = '未定义文号';
            publisherElement.textContent = '未定义发布单位';
            articleContentElement.textContent = '未找到对应信息内容';
        }
    });
});

// 处理树形菜单的展开和收起
var treeMenuItems = document.querySelectorAll('.tree-menu li');
treeMenuItems.forEach(function (item) {
    var subUl = item.querySelector('ul');
    if (subUl) {
        item.addEventListener('click', function () {
            item.classList.toggle('expanded');
        });
    }
});

// 根据链接文本获取对应数据的函数（这里只是一个示例框架，实际需根据数据存储情况修改）
function getDataByLink(linkText) {
    // 假设数据存储在一个对象中，以链接文本为键，数据对象为值
    var dataMap = {
        "学校概况": {
            title: "学校概况标题",
            publishDate: "具体发布日期",
            views: "浏览量数值",
            docNumber: "相关文号",
            publisher: "发布部门",
            articleContent: "学校概况详细内容"
        },
        "学校章程": {
            // 其他数据项类似...
        },
        // 其他菜单数据项...
    };

    return dataMap[linkText];
}
// 搜索键跳转
const jumpButton = document.getElementById('search');
jumpButton.addEventListener('click', function () {
    window.location.href = 'search.html';
});




document.addEventListener("DOMContentLoaded", function() {
    // 获取页面元素
    const title = document.querySelector("#title");
    const publishDate = document.querySelector("#publish-date");
    const views = document.querySelector("#views");
    const docNumber = document.querySelector("#doc-number");
    const publisher = document.querySelector("#publisher");
    const articleContent = document.querySelector("#article-content");

    // 更新内容
    title.textContent = "新的标题"; // 更新标题
    publishDate.textContent = "2024-12-21"; // 更新发布日期
    views.textContent = "1000"; // 更新浏览量
    docNumber.textContent = "文号12345"; // 更新文号
    publisher.textContent = "发布单位名称"; // 更新发布单位
    articleContent.innerHTML = "<p>这是文章的内容部分。</p>"; // 更新文章内容

    // 获取内容条目的 ID 并更新内容
    const contentItems = [
        { id: "content-item-1", label: "新的条目1" },
        { id: "content-item-2", label: "新的条目2" },
        { id: "content-item-3", label: "新的条目3" },
        { id: "content-item-4", label: "新的条目4" },
        { id: "content-item-5", label: "新的条目5" }
    ];

    contentItems.forEach(item => {
        const contentLink = document.querySelector(`#${item.id}`);
        if (contentLink) {
            contentLink.textContent = item.label; // 更新每个条目的文本内容
        }
    });
});
