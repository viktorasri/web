const mainArrowLeft=document.querySelector('.main-image .left-arrow');
const mainArrowRight=document.querySelector('.main-image .right-arrow');
const mainImage=document.querySelector('section.main-image')
const h1=document.querySelector('h1');
const pText=document.querySelector('.main-content p');


var mainPhotos = ["img/main1.jpeg","img/main2.jpeg","img/main3.jpeg"];
var h1Text = ["we care about your business","we save your time & money","we share best practice"];


var n=0;
mainImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${mainPhotos[n]}")`;


mainArrowLeft.addEventListener('click',function () {
    n--;
    !mainPhotos[n]? n=mainPhotos.length-1:null;
    mainImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${mainPhotos[n]}")`;
    h1.style.transform = 'translateX(-120%)'
    pText.style.transform = 'translateX(-156%)'

    

});

mainArrowRight.addEventListener('click',function () {
    n++;
    !mainPhotos[n]? n=0:null;
    mainImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${mainPhotos[n]}")`;
    h1.style.transform = 'translateX(120%)'
    pText.style.transform = 'translateX(156%)'

});

h1.addEventListener('transitionend',function () {
    h1.textContent = `${h1Text[n]}`
    h1.style.transform = 'translateX(0)'
    pText.style.transform = 'translateX(0)'

})

