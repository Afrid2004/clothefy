'use strict';

//----------------modal function--------------//

var modal = document.querySelector('[data-modal]');
var modalCloseBtn = document.querySelector('[data-modal-close]');
var modalCloseOverlay = document.querySelector('[data-modal-overlay]');
function modalCloseFunc(){
    modal.classList.add('closed');
}

modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

//----------------modal function--------------//



//-----------------notification toast----------------//

var notificationToast = document.querySelector('[data-toast]');
var toastCloseBtn = document.querySelector('.toast-close-btn');

toastCloseBtn.addEventListener("click", function(){

    notificationToast.classList.add('closed');

});

//-----------------notification toast----------------//


//------------------menu open or close--------------//

var mobileMenuOpenBtn = document.querySelector('[data-mobile-menu-open-btn]');
var mobileMenu = document.querySelector('[data-mobile-menu]');
var mobileMenuCloseBtn = document.querySelector('[data-mobile-menu-close-btn]');
var overlay = document.querySelector('[data-overlay]');

mobileMenuOpenBtn.addEventListener('click', function(){
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
});

mobileMenuCloseBtn.addEventListener('click', mobileMenuCloseFunc);
overlay.addEventListener('click', mobileMenuCloseFunc);

function mobileMenuCloseFunc() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
}

//------------------menu open or close--------------//


//------------------accordion menu------------------//

var accordionBtn = document.querySelectorAll('[data-according-btn]');
var accordion = document.querySelectorAll('[data-accordion]');

for(var i=0; i<accordionBtn.length;i++){

    accordionBtn[i].addEventListener('click',function(){

        var clickedBtn = this.nextElementSibling.classList.contains('active');

        for(var i=0;i<accordion.length;i++){

            if(clickedBtn) break;

            if(accordion[i].classList.contains('active')){

                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');

            }

        }
        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');

    })

}

//------------------accordion menu------------------//


//--------------------slider-----------------------//

var slides = document.querySelector('.slides'); //list
var slide = document.querySelectorAll('.slide'); //item
var dots = document.querySelectorAll('.slider .dots div');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var active = 0;
var slideLength = slide.length - 1;     //length items

next.addEventListener('click',  function(){

    if(active + 1 > slideLength){
        active = 0;
    }
    else{
        active = active+1;
    }
    reloadSlider();

});

prev.addEventListener('click', function(){
    if(active -1 <0){
        active = slideLength;
    }
    else{
        active = active -1 ;
    }
    reloadSlider();
})

var refreshSlider = setInterval(() => {
    
    next.click();

}, 5000);

function reloadSlider(){

    var checkLeft = slide[active].offsetLeft;
    slides.style.left = -checkLeft + "px";

    var lastActiveDot = document.querySelector('.slider .dots div.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
    
        next.click();
    
    }, 5000);

}

dots.forEach((div,key)=>{
    div.addEventListener('click',function(){
        active = key;
        reloadSlider();
    })
})

//--------------------slider-----------------------//


//--------------------category---------------------//

var mobileCategoryOpenBtn = document.querySelector('[data-mobile-category-open-btn]');
var mobileCategory = document.querySelector('[data-mobile-category]');
var mobileCategoryCloseBtn = document.querySelector('[data-mobile-category-close-btn]');

mobileCategoryOpenBtn.addEventListener('click',function(){
    mobileCategory.classList.add('active');
    overlay.classList.add('active');
});

mobileCategoryCloseBtn.addEventListener('click', mobileCategoryCloseFunc);
overlay.addEventListener('click' , mobileCategoryCloseFunc);

function mobileCategoryCloseFunc(){

    mobileCategory.classList.remove('active');
    overlay.classList.remove('active');

}

//--------------------category---------------------//


//------------------product show more------------//



var secondShowMoreBtn = document.querySelector('[data-second-show-more]');
var secondShowLessBtn = document.querySelector('[data-second-show-less]');
var firstDefaultContainer = document.querySelector('[data-first-default-container]');
var secondShowcase = document.querySelector('[data-second-showcase-container]');
var thirdShowMoreBtn = document.querySelector('[data-third-show-more]');
var thirdShowLessBtn = document.querySelector('[data-third-show-less]');
var secondDefaultContainer = document.querySelector('[data-second-default-container]');
var thirdShowcase = document.querySelector('[data-third-showcase-container]');
var fourthShowMoreBtn = document.querySelector('[data-fourth-show-more]');
var fourthShowLessBtn = document.querySelector('[data-fourth-show-less]');
var thirdDefaultContainer = document.querySelector('[data-third-default-container]');
var fourthShowcase = document.querySelector('[data-fourth-showcase-container]');

secondShowMoreBtn.addEventListener('click', secondShowMoreFunc);
secondShowLessBtn.addEventListener('click', secondShowLessFunc);


function secondShowMoreFunc(){
    secondShowcase.classList.add('active');
    secondShowMoreBtn.style.display = "none";
    secondShowLessBtn.style.display = "block";
    firstDefaultContainer.classList.add('hide');

}
function secondShowLessFunc(){
    secondShowcase.classList.remove('active');
    secondShowMoreBtn.style.display = "block";
    secondShowLessBtn.style.display = "none";
    firstDefaultContainer.classList.remove('hide');

}


thirdShowMoreBtn.addEventListener('click', thirdShowMoreFunc);
thirdShowLessBtn.addEventListener('click', thirdShowLessFunc);

function thirdShowMoreFunc(){
    thirdShowcase.classList.add('active');
    thirdShowMoreBtn.style.display = "none";
    thirdShowLessBtn.style.display = "block";
    secondDefaultContainer.classList.add('hide');
}
function thirdShowLessFunc(){
    thirdShowcase.classList.remove('active');
    thirdShowMoreBtn.style.display = "block";
    thirdShowLessBtn.style.display = "none";
    secondDefaultContainer.classList.remove('hide');
}


fourthShowMoreBtn.addEventListener('click', fourthShowMoreFunc);
fourthShowLessBtn.addEventListener('click', fourthShowLessFunc);

function fourthShowMoreFunc(){
    fourthShowcase.classList.add('active');
    fourthShowMoreBtn.style.display = "none";
    fourthShowLessBtn.style.display = "block";
}
function fourthShowLessFunc(){
    fourthShowcase.classList.remove('active');
    fourthShowMoreBtn.style.display = "block";
    fourthShowLessBtn.style.display = "none";
}


//------------------product show more------------//


//------------------product-featured-------------//

var skinBtn = document.querySelector('[data-skin-care-btn]');
var jewelaryBtn = document.querySelector('[data-jewelary-btn]');
var firstFeaturedProduct = document.querySelector('[data-first-showcase-container]');
var secondFeaturedProduct = document.querySelector('[data-second-showcase-container]');

jewelaryBtn.addEventListener('click', showSecondFeature);
skinBtn.addEventListener('click', showFirstFeature);

function showSecondFeature(){
    firstFeaturedProduct.classList.add('active');
    jewelaryBtn.style.backgroundColor = "var(--darkgray)"
    jewelaryBtn.style.color = "var(--white)"
    skinBtn.style.backgroundColor = "var(--closeback)"
    skinBtn.style.color = "var(--darkgray)"
}
function showFirstFeature(){
    firstFeaturedProduct.classList.remove('active');
    jewelaryBtn.style.backgroundColor = "var(--closeback)"
    jewelaryBtn.style.color = "var(--darkgray)"
    skinBtn.style.backgroundColor = "var(--darkgray)"
    skinBtn.style.color = "var(--white)"
}
