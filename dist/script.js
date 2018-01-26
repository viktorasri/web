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

var scroll = window.scrollY;
var showPupup = true;

document.addEventListener('scroll',function () {
    console.log(window.scrollY);



//ijungti pop up kuris atsirastu viena karta ir butu galima isjungti su esc, enter ar peles paspaudimu ant juodo ekrano. Pop

// window.scrollY<scroll? header.style.display="none" : header.style.displayr = 'block';
    for (x=0;x<text.length;x++){
        window.scrollY+window.innerHeight*0.7>text[x].offsetTop? text[x].style.opacity = '1': null ;
        window.scrollY+window.innerHeight*0.7>image[x].offsetTop? image[x].style.opacity = '1': null ;
        window.scrollY+window.innerHeight*0.7>image[x].offsetTop? image[x].style.transform = 'translateX(0%)': null ;
    }

    if ((showPupup===true)&& (image[2].offsetTop<window.scrollY)) {
        console.log('rodom baneri')
        popup.style.display = 'block';
        mail.focus();
        showPupup = false;
    }



});
