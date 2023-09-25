const Burger = document.querySelector('.nav__row-burger');
const span = document.querySelector('.nav__row-burger-span');
const menu = document.querySelector('.menu');
const form = document.querySelector('form');




Burger.addEventListener ('click', (event) =>{
 Burger.classList.toggle('nav__row-burger-close')
 span.classList.toggle('nav__row-close-span')
menu.classList.toggle('menu-visibility')

});




menu.addEventListener('click', (event) =>{
    if (event.target.closest('form')){
       form.querySelector('input').classList.add('form-input-focus'); 
       form.classList.add('form-focus')
    } else {
        form.querySelector('input').classList.remove('form-input-focus'); 
        form.classList.remove('form-focus')
    }
    
})

