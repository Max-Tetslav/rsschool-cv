const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.container__adaptive-menu');
const viewportWidth = window.innerWidth;
let isHide = true;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('rotate');
    if (isHide) {
        menu.style.display = 'block';
        isHide = false;
    } else {
        menu.style.display = 'none';
        isHide = true;
    }
});


window.addEventListener('resize', () => {
        if (viewportWidth > 930) {
            menu.style.display = 'none'
        }
    })
    // menuBtn.addEventListener('click', () => {
    //     menuBtn.classList.toggle('rotate');
    //     if (isHide) {
    //         menu.style.display = 'flex';
    //     }
    // });