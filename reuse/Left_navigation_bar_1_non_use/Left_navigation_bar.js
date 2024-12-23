document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#Left_navigation_bar_menu > li > div");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            const parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });
});