const slides = document.querySelector('.slides');
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

setInterval(() => {
    if (current > maxLeft) {
        current -= 100;
        slides.style.left = current + '%';
    } else {
        current = 0;
        slides.style.left = 0;
    }
}, 1500)


