const btnClosed = document.querySelector('.btn-closed');
const btnMenu = document.querySelector('.main_btn-menu');

const menu = document.querySelector('.menu');
const main = document.querySelector('.main');

btnClosed.addEventListener('click', () =>{
    menu.classList.toggle('menu-closed');
    menu.classList.toggle('menu_main-btn-on');
    btnMenu.classList.toggle('main_btn-menu-on');
    main.classList.toggle('main-btn-on');

});

btnMenu.addEventListener('click', () => {
    main.classList.toggle('main-btn-on');
    btnMenu.classList.toggle('main_btn-menu-on');
    menu.classList.toggle('menu_main-btn-on');

});

