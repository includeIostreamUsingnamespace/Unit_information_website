

document.addEventListener("DOMContentLoaded", function() {


    const carousel = document.querySelector('.CKTC_carousel');
    const dots = document.querySelectorAll('.CKTC_dot');
    const items = document.querySelectorAll('.CKTC_carousel_item');

    dots.forEach((dot, index) => {
        dot.addEventListener('mouseover', () => {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });


});