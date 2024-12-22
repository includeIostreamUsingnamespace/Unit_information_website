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