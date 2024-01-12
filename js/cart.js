
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





