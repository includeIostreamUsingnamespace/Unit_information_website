
document.addEventListener("DOMContentLoaded", function () {
    const jumpButton = document.getElementById('search');
    if (jumpButton) {
    jumpButton.addEventListener('click', function () {
    window.location.href = 'search.html';
});
}
});

$(document).ready(function() {
    // 初始化轮播图
    $('#full-width-slider').royalSlider({
        autoPlay: {
            enabled: true,
            pauseOnHover: true,
            delay: 4000
        },
        controlNavigation: 'bullets',
        loop: true,
        imageScaleMode: 'fill',
        imageAlign: 'center',
        numImagesToPreload: 3
    });
});


$(document).ready(function() {
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');
    const items = document.querySelectorAll('.carousel-item');

    dots.forEach((dot, index) => {
        dot.addEventListener('mouseover', () => {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });
});
