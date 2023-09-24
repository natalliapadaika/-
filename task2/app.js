const popupBtn = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup');
const popupContent = popup.querySelector('.popup-content');
const popupClosed = popupContent.querySelector('.popup-closed');

popupBtn.addEventListener('click', () =>{
    popup.classList.add('popup-on');
});

popupClosed.addEventListener('click', () => popup.classList.remove('popup-on'));

document.addEventListener('click', (event) =>{
    if(event.target !== popupContent && event.target !==popupBtn){
        popup.classList.remove('popup-on');
    }
});