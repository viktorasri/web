
//preloads section main-image images
function imagePreloader(arr) {
	$.preloadImages = function() {
		for (var i = 0; i < arguments.length; i++) {
			$("<img />").attr("src", arguments[i]);
		}
	}
	arr.forEach(img => $.preloadImages(img));
}

//main slider and text banner
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
mainSlider();


//adds specific animation class on element
function animationKickster(el,offset,type) {
	window.scrollY+window.innerHeight*offset>el.offsetTop? el.classList.add('animated',type):null;
}

//starts animation of section features
function indexAnimation() {
	const indexFeatures = document.querySelector('section.features .animation1');
	if (!indexFeatures) return;	
	animationKickster(indexFeatures,.5,"fadeInLeftBig")
}

//section about us, features animation
function aboutusAnimation() {
    const aboutusFeatures = document.querySelector('section.about-us-features .container');
	if (!aboutusFeatures) return;
	animationKickster(aboutusFeatures,.6,"fadeInUpBig")
}

//footer animation
function footerAnimation() {
	const stripeBtn = document.querySelector('.js-footer-btn')
	if (!stripeBtn) return;
	animationKickster(stripeBtn,.9,"bounce")
}

//Starts counters in our results section
var repeat = true;
function getIndexResults() {
	let values = []
	const getResults = document.querySelectorAll('section.our-results .number');
	if (!getResults) return;
	const triger = document.querySelector('.js-start-counter');
	if (!triger) return;
	
	if ((window.scrollY+window.innerHeight<triger.offsetTop) || (repeat === false)) return
	
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
			}
		}, 10);
	})
	repeat = false;
}

//listening to scroll an activates animations on specific coordinates
document.addEventListener('scroll',function () {
	indexAnimation();
	getIndexResults();
	footerAnimation();
	aboutusAnimation()
});

//Show mobile menu on click
$('.mobile-nav').click(function () {
	$('.js-mainnav').toggleClass('active-menu')
});

//Remove all DOM childs from selected element
function clearContent(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

//download data from projects.json file.
// Launches functions which fill in projects to web and enables filters
function getProjects() {
	var url = `data/projects.json`;
	console.log('dd')
	$.getJSON(url,function (data) {
		
		showProjects(data.projects)
		projectsFilter(data);
	})
}
getProjects();

//projects page filters code
function projectsFilter(data) {
	
	$(".projects-recent-projects .filter li").click(function (e) {
		$(".projects-recent-projects .filter li").each(function () {
			$(this).css("color","")
		});
		this.style.color = "#22a7f0";
		
		var filterValue = this.dataset.filter;
		var matchData = data.projects.filter(project=> project.filtertags[filterValue] === "true");
		
		showProjects(matchData)
	});
}

//return an array of projects filtertags property names
function getTags(data) {
		var tags = data.filtertags;
		return Object.keys(tags).filter(e => tags[e] === "true" && e != "all");
}

//returns list of tags ready to insert to projects page
function showTags(tags) {
	return tags.map(tag=> `<li>${tag}</li>`).join('');
}

//insert projects to project page
function showProjects(data) {
	var gallery = document.querySelector('section.projects-recent-projects .gallery-container')
	if (!gallery) return;
	
	clearContent(gallery);
	data.forEach((project)=>{
		var content = `
		 			<div class="wrapper animated fadeIn">
                <a href="${project.img.big}">
                	<img src="${project.img.thumb}" alt="${project.title}">
                	<div class="placer">
                    <h3>${project.title}</h3>
                    <ul class="taglist">
                    	${showTags(getTags(project))}
                    </ul>
                </div>
                </a>
            </div>
		`;
		gallery.insertAdjacentHTML('beforeend',content);
		
	});
}


//load index page from blog section with blogs
function indexFromBlog() {
	var url = `data/blog.json`;
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
	})
}
indexFromBlog();

//index recent galery setup
$(document).ready(function(){
	$('.recent-projects .owl-carousel').owlCarousel({
		loop:true,
		autoplayHoverPause:true,
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
		autoplayHoverPause:true,
		items:2,
		dots:false,
		autoplay:true,
		autoplayTimeout:6000,
		margin:30,
		slideBy:1,
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

//about us, section customer testimonial
$(document).ready(function(){
	$('.customer-testimonials .owl-carousel').owlCarousel({
		loop:true,
		items:1,
		autoplay:true,
		autoplayTimeout:5000,
		slideBy:1,
		autoplayHoverPause:true
	})
});








