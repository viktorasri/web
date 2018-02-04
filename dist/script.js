

function imagePreloader(arr) {
    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    }
   arr.forEach(img => $.preloadImages(img));
}

function mainSlider() {
    const mainArrowLeft=document.querySelector('.main-image .left-arrow');
    if (!mainArrowLeft) return;
    const mainArrowRight=document.querySelector('.main-image .right-arrow');
    if (!mainArrowRight) return;
    const mainImage=document.querySelector('section.main-image');
    if (!mainImage) return;
    const h1=document.querySelector('h1');
    if (!h1) return;
    const pText=document.querySelector('.main-content p');
    if (!pText) return;

    var mainPhotos = ["img/index/main/main1.jpeg","img/index/main/main2.jpeg","img/index/main/main3.jpeg"];
    var h1Text = ["we care about your business","we save your time & money","we share best practice"];
    var n=0;

    imagePreloader(mainPhotos);
    mainImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${mainPhotos[n]}")`;

    //left arrow
    mainArrowLeft.addEventListener('click',function () {
        n--;
        !mainPhotos[n]? n=mainPhotos.length-1:null;
        mainImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${mainPhotos[n]}")`;
        h1.style.transform = 'translateX(-120%)'
        pText.style.transform = 'translateX(-156%)'
    });

    //right arrow
    mainArrowRight.addEventListener('click',function () {
        n++;
        !mainPhotos[n]? n=0:null;
        mainImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${mainPhotos[n]}")`;
        h1.style.transform = 'translateX(120%)'
        pText.style.transform = 'translateX(156%)'
    });

    //after text transition is over function return it to the original position
    h1.addEventListener('transitionend',function () {
        h1.textContent = `${h1Text[n]}`
        h1.style.transform = 'translateX(0)'
        pText.style.transform = 'translateX(0)'
    })
}

function animationKickster(el,offset,type) {
    window.scrollY+window.innerHeight*offset>el.offsetTop? el.classList.add('animated',type):null;
}

function indexAnimation() {
    const indexFeatures = document.querySelector('section.features .animation1');
    if (!indexFeatures) return;   
    animationKickster(indexFeatures,.5,"fadeInLeftBig")
}


var repeat = true;
function getIndexResults() {
    let values = []
    const getResults = document.querySelectorAll('section.our-results .number');
	if (!getResults) return;
    if ((window.scrollY+window.innerHeight<getResults[0].offsetTop) || (repeat === false)) return
    
    getResults.forEach(result=>{
        values.push(parseFloat(result.textContent))
        result.textContent='0';
    })
    getResults.forEach((result,i)=>{
        var counted = 0;
        var counter = setInterval(function () {
            if (counted < values[i]) {
                counted++;
                result.textContent = counted;
            } else {
                clearInterval(counter);
                animationKickster(result,.5,"bounce")

            }
        }, 10);
    })
    repeat = false;
}

mainSlider();


document.addEventListener('scroll',function () {
    indexAnimation()
    getIndexResults();

});

$('.mobile-nav').click(function () {
   $('.js-mainnav').toggleClass('active-menu')
});


function clearContent(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function getBlogJson() {
    
}

function indexFromBlog() {
    var url = `http://localhost/Baltic%20talents/project/website/blog.json`;
    var blogContainer = document.querySelector('section.blog-posts .post-container');
    if (!blogContainer) return
    clearContent(blogContainer)
    $.getJSON(url,function (data) {
        data.blogs.forEach(blog=>{
            var date = `<div class="date">${blog.date}</div>`;
            var btn = `<a href="${blog.img}" class="button">Read more</a>`;
            var postText =`<div class="post-text">${date}<p>${blog.title}</p>${btn}</div>`;
            var blogImg = `<div class="image-container"><img src="${blog.img}"alt="${blog.title}"></div>`;

            var content = `<div class="post">${blogImg}${postText}</div>`
            blogContainer.insertAdjacentHTML('beforeend',content);



        })

        var date = `<div class="date">${data.blogs[0].date}</div>`;
        var btn = `<div class="button">Read more</div>`;
        var postText =`<div class="post-text">${date}<p>${data.blogs[0].title}</p>${btn}</div>`;
        var blogImg = `<div class="image-container"><img src="${data.blogs[0].img}"alt="${data.blogs[0].title}"></div>`;

        var content = `<div class="post">${blogImg}${postText}</div>`
        blogContainer.insertAdjacentHTML('beforeend',content);

    })

}

indexFromBlog();

//index recent galery setup
$(document).ready(function(){
	$('.recent-projects .owl-carousel').owlCarousel({
		loop:true,
		items:3,
        dots:false,
		autoplay:true,
		autoplayTimeout:3000,
		margin:30,
		nav:true,
		navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			900:{
				items:3
			},
			
			1200:{
				items:3
			}
		}
	})
});

//index from blog setup gallery setup
$(document).ready(function(){
	$('.blog-posts .owl-carousel').owlCarousel({
		loop:true,
		items:2,
		dots:false,
		autoplay:true,
		autoplayTimeout:5000,
		margin:30,
        slideBy:'page',
		nav:true,
		navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			900:{
				items:2
			},
			
			1200:{
				items:2
			}
		}
	})
});











