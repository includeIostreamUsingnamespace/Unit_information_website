


document.addEventListener("DOMContentLoaded", function () {



        const mobileMenu = document.getElementById('Hkust_navigation_bar_mobile_menu');
        const navUl = document.getElementById('Hkust_navigation_bar_ul');
        const dropdowns = document.querySelectorAll('.Hkust_navigation_bar_dropdown');
        const subdropdowns = document.querySelectorAll('.Hkust_navigation_bar_subdropdown');

        mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navUl.classList.toggle('active');
    });

        dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.Hkust_navigation_bar_a');
        const content = dropdown.querySelector('.Hkust_navigation_bar_dropdown_content');

        trigger.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.innerWidth <= 768) {
        dropdowns.forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
        otherDropdown.querySelector('.Hkust_navigation_bar_dropdown_content').classList.remove('active');
    }
    });
        content.classList.toggle('active');
    } else {
        content.classList.toggle('active');
    }
    });
    });

        subdropdowns.forEach(subdropdown => {
        const trigger = subdropdown.querySelector('.Hkust_navigation_bar_dropdown_item');
        const content = subdropdown.querySelector('.Hkust_navigation_bar_subdropdown_content');

        trigger.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.innerWidth <= 768) {
        subdropdowns.forEach(otherSubdropdown => {
        if (otherSubdropdown !== subdropdown) {
        otherSubdropdown.querySelector('.Hkust_navigation_bar_subdropdown_content').classList.remove('active');
    }
    });
        content.classList.toggle('active');
    }
    });
    });

        // 点击其他地方关闭下拉菜单
        document.addEventListener('click', function(e) {
        if (!e.target.closest('.Hkust_navigation_bar_dropdown')) {
        dropdowns.forEach(dropdown => {
        const content = dropdown.querySelector('.Hkust_navigation_bar_dropdown_content');
        content.classList.remove('active');
    });
    }
    });

        // 监听窗口大小变化
        window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
        navUl.classList.remove('active');
        mobileMenu.classList.remove('active');
        dropdowns.forEach(dropdown => {
        const content = dropdown.querySelector('.Hkust_navigation_bar_dropdown_content');
        content.style.display = '';
        content.classList.remove('active');
    });
        subdropdowns.forEach(subdropdown => {
        const content = subdropdown.querySelector('.Hkust_navigation_bar_subdropdown_content');
        content.style.display = '';
        content.classList.remove('active');
    });
    }
    });

});