const burger = document.querySelector('.nav__row-burger');
const span = document.querySelector('.nav__row-burger-span');
const menu = document.querySelector('.menu');
const form = document.querySelector('form');




// Burger.addEventListener ('click', () =>{
//  Burger.classList.toggle('nav__row-burger-close')
//  span.classList.toggle('nav__row-close-span')
// menu.classList.toggle('menu-visibility')

// });


// Burger.addEventListener ('click', (event) =>{
//  Burger.classList.toggle('nav__row-burger-close')
//  span.classList.toggle('nav__row-close-span')
//  menu.classList.toggle('menu-visibility')
//  menu.classList.remove('menu-hidden')


// });

document.addEventListener('click', event =>{
    if(event.target.closest('.nav__row-burger')){
    // && event.target.closest('.nav__row-burger-closed') && event.target.closest('.menu')){
        burger.classList.toggle('nav__row-burger-close')
        span.classList.toggle('nav__row-close-span')
       menu.classList.toggle('menu-visibility')
    } 
    // else if((event.target.con('.nav__row-burger-close'))){
    //     burger.classList.remove('nav__row-burger-close')
    //     span.classList.remove('nav__row-close-span')
    //   menu.classList.remove('menu-visibility')
    // }
    
    
    else if(!event.target.closest('.menu')){ 
   
    menu.classList.remove('menu-visibility')
// menu.style.visibility = "hidden"
        burger.classList.remove('nav__row-burger-close')
        span.classList.remove('nav__row-close-span')
    
    }

} )




form.addEventListener('focusin', () =>{
    // if (event.target.matches('form')){
       form.querySelector('input').classList.add('form-input-focus'); 
       form.classList.add('form-focus')
    // } else {
    //     form.querySelector('input').classList.remove('form-input-focus'); 
    //     form.classList.remove('form-focus')
    // }
    
})

form.addEventListener('focusout', () => {
    form.querySelector('input').classList.remove('form-input-focus'); 
    form.classList.remove('form-focus')
})

