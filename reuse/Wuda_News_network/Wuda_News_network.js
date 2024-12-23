

document.addEventListener("DOMContentLoaded", function() {


    const carousel = document.querySelector('.Wuda_News_network_carousel');
    const dots = document.querySelectorAll('.Wuda_News_network_dot');
    const items = document.querySelectorAll('.Wuda_News_network_carousel_item');

    dots.forEach((dot, index) => {
        dot.addEventListener('mouseover', () => {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });


});