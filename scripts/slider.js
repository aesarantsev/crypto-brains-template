const slider = document.querySelector('.market-section__slider');
let isEnableHorizontalSlider = false;

slider.addEventListener('wheel', (e) => {
    if (!isEnableHorizontalSlider || e.deltaY === 0) {
        return
    }

    e.preventDefault();
    slider.scrollBy({
        left: e.deltaY * 30,
        behavior: 'smooth'
    });
},);


function updateIsEnableHorizontalSlider() {
    isEnableHorizontalSlider = slider.scrollWidth > slider.clientWidth;
}

window.addEventListener("resize", updateIsEnableHorizontalSlider);
window.addEventListener("load", updateIsEnableHorizontalSlider);