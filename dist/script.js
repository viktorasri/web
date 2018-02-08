
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
//not finished, needs to be updated
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
	$.getJSON(url,function (data) {
		
		showProjects(data.projects)
		projectsFilter(data);
		blogRecentProjects(data.projects);
		
	})
}
getProjects();

//inserts 4 projects into blog page, recent projects section
function blogRecentProjects(data) {
	var gallery = document.querySelector('section.blog-sidebar-right .projects-container')
	if (!gallery) return;
	
	clearContent(gallery);
	data.forEach((project,i)=>{
		if (i>3) return
		var content = `
					<div class="wrapper animated fadeIn">
            			<a href="${project.img.big}">
            				<img src="${project.img.thumb}" alt="${project.title}">
            			</a>
        			</div>
		`;
		gallery.insertAdjacentHTML('beforeend',content);
	});
}

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
		 			<figure class="wrapper animated fadeIn">
                <a href="${project.img.big}">
                	<img src="${project.img.thumb}" alt="${project.title}">
                	<figcaption class="placer">
                    <h3>${project.title}</h3>
                    <ul class="taglist">
                    	${showTags(getTags(project))}
                    </ul>
                </figcaption>
                </a>
            </figure>
		`;
		gallery.insertAdjacentHTML('beforeend',content);
		
	});
}

//gets blog JSON and calls blogs functions
function getBlog() {
	var url = `data/blog.json`;
	$.getJSON(url,function (data) {
		indexBlogSection(data);
		blogRecentBlogs(data);
		blogMainBlog(data);
		fullBlog(data);
	})
}
getBlog();


//load index page "from blog" section with blogs
function indexBlogSection(data) {
	var blogContainer = document.querySelector('section.blog-posts .post-container');
	if (!blogContainer) return;
	clearContent(blogContainer)
	data.blogs.forEach((blog,i)=>{
		if (i>3) return;
		var date = `<time class="date">${blog.date}</time>`;
		var btn = `<a data-id="${i}" href="blog_full_post.php" class="button js-readmore">Read more</a>`;
		var postText =`<div class="post-text">${date}<p>${blog.title}</p>${btn}</div>`;
		var blogImg = `<figure class="image-container"><img src="${blog.img.thumb}"alt="${blog.title}"></figure>`;
		
		var content = `<article class="post">${blogImg}${postText}</article>`
		blogContainer.insertAdjacentHTML('beforeend',content);
	})
	blogReadMoreBtn();
}

//load blogs in blog page
function blogMainBlog(data) {
	var blogContainer = document.querySelector('section.blog-body .blog-content');
	if (!blogContainer) return;
	clearContent(blogContainer)
	data.blogs.forEach((blog,i)=>{
		if (i>2) return
		var content = `
					<article class="blog-post clearfix animated fadeIn">
                		<figure class="blog-image-container">
                   			<img src="${blog.img.big}" alt="${blog.title}">
                    <time class="date-stamp"><span>DATE</span>${blog.date}</time>
                </figure>
                <h2>${blog.title}</h2>
                <p>${shortenString(blog.text,350)}</p>
                <a class="button js-readmore" data-id="${i}" href="blog_full_post.php">READ MORE</a>
            </article>
`;
		blogContainer.insertAdjacentHTML('beforeend',content);
	})
	blogReadMoreBtn();
}

//right side "recent blogs"
function blogRecentBlogs(data) {
	var blogContainer = document.querySelector('.blogs-recent-posts');
	if (!blogContainer) return;
	clearContent(blogContainer);
	data.blogs.forEach((blog,i)=>{
		if (i>3) return;
		
		var content = `
				<a href="blog_full_post.php" data-id="${i}">
					<article data-id="${i}" class="recent-post clearfix animated fadeIn">
           				<img src="${blog.img.thumb}" alt="${blog.title}">
          				<h4>${blog.title}</h4>
           				<h5>${blog.author}</h5>
       				</article>
				</a>
		`;
		blogContainer.insertAdjacentHTML('beforeend',content);
	})
}
//listen to the blog page and Index page Read more buttons
function blogReadMoreBtn() {
	$('.js-readmore').click(function () {
		var blogId = this.dataset.id;
		localStorage.setItem('blogId',JSON.stringify(blogId))
	})
}


//listen to the the right side recent blogs
function getIdRecentBlog() {
	$('.blogs-recent-posts').click(function (e) {
		var blogId = e.target.parentNode.dataset.id;
		localStorage.setItem('blogId',JSON.stringify(blogId))
	})
}
getIdRecentBlog()

//load full blog page data
function fullBlog(data) {
	var imgContainer = document.querySelector('.js-fullblog-img');
	if (!imgContainer) return;
	var h1 = document.querySelector('.js-h1');
	if (!h1) return;
	var h3 = document.querySelector('.js-h3');
	if (!h3) return;
	var p = document.querySelector('.full-text-content');
	if (!p) return;
	clearContent(imgContainer);
	var id = fullBlogData();
	
	var content = `
				<img src="${data.blogs[id].img.big}" alt="${data.blogs[id].title}">
                <time class="date-stamp"><span>DATE</span>${data.blogs[id].date}</time>
		`;
	imgContainer.insertAdjacentHTML('beforeend',content);
	h1.textContent = `"${data.blogs[id].title}"`;
	h3.textContent = `"${data.blogs[id].author}"`;
	var text = `<p>${data.blogs[id].text}</p>`
	p.insertAdjacentHTML('afterbegin',text);
}

//return selected blog id
function fullBlogData() {
	var blogId = localStorage.getItem('blogId');
	if (blogId) {
		blogId = JSON.parse(blogId);
	}
	return blogId
}


//shorten text string and adds sufix at the end
function shortenString(string,lenght) {
	var sufix = " [...]";
	string.length<lenght? sufix='' : null;
	var newString = string.substring(0,lenght-sufix.length);
	return newString+sufix;
}

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








