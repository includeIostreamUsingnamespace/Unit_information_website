document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".Left_navigation_bar_item");
    menuItems.forEach(item => {
        const title = item.querySelector(".Left_navigation_bar_title");
        title.addEventListener("click", function () {
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });
});