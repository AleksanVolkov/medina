// Burger Menu Toggle
const burgerBtn = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('burger-menu');
const closeBtn = document.getElementById('close-btn');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
});



// Slick Slider Initialization
let currentSlide,
 totalSlide = document.querySelectorAll('.slide').length,
 activeSlideNum= document.querySelector('.active_slide_num'),
 allSlide= document.querySelector('.all_slide');
 


 if(allSlide){
  allSlide.textContent="0"+totalSlide



    $('.slick-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
         autoplaySpeed:4000,
         appendArrows: $('.class-arrow'),
        prevArrow: '<button type="button"  class="slick-prev"></button>',
        nextArrow: '<button type="button"  class="slick-next"></button>',
        
    });
     currentSlide = $('.slick-slider').slick('slickCurrentSlide')+1;







$('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
 
  const displaySlideNumber = nextSlide + 1;
  
 
  activeSlideNum.textContent = displaySlideNumber < 10 
    ? "0" + displaySlideNumber 
    : displaySlideNumber;
  
  
});









 }

let sliderCard = document.querySelectorAll('.slide-card')

if(sliderCard){
$('.slide-card').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay:false,
        autoplaySpeed:4000,
        draggable: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            
            autoplay:true,
            draggable: true,
            
            
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
            autoplay:true,
            draggable: true,
            
              slidesToShow: 3
            }
          },
    
        ],
        
    });


  }













let currentSlideTwo,
 totalSlideTwo = document.querySelectorAll('.license_item').length,
 activeSlideNumTwo= document.querySelector('.active_slide_nums_two'),
 allSlideTwo= document.querySelector('.all_slide_two');
 


 if(allSlideTwo){
allSlideTwo.textContent="0"+totalSlideTwo

$(document).ready(function(){
  $('.slide-license').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
      
        autoplay:true,
        autoplaySpeed:4000,
          appendArrows: $('.class-arrows'),
        prevArrow: '<button type="button"  class="slick-prev"></button>',
        nextArrow: '<button type="button"  class="slick-next"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots:true,
            centerMode: true,
            
            
              slidesToShow: 2
            }
          },
    
        ],
        
    });
    $('.slide-license_two').slick({
       dots:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
         centerMode: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed:4000,
      
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
               dots:true,
            centerMode: false,
            
            
              slidesToShow: 1
            }
          },
    
        ],
        
    });
    // currentSlideTwo = $('.slide-license').slick('slickCurrentSlide');
});





$('.slide-license').on('beforeChange', function(event, slick, currentSlide, nextSlide){
 
  const displaySlideNumber = nextSlide + 1;
  
  
  activeSlideNumTwo.textContent = displaySlideNumber < 10 
    ? "0" + displaySlideNumber 
    : displaySlideNumber;
  
 
});












 }



 $('.slide-galllery').slick({
       dots:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
         
        slidesToScroll: 1,
        arrows: false,
        // autoplay:true,
        autoplaySpeed:4000,
      
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
               dots:true,
            centerMode: false,
            
            
              slidesToShow: 2
            }
          },
    
        ],
        
    });
$('.slide-doctors').slick({
       dots:true,
    
         centerMode: false,
        
        
        slidesToShow: 3,
         draggable: true,
     
        arrows: false,
        // autoplay:true,
       
      
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
               dots:true,
            centerMode: false,
            
            
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
               dots:true,
            centerMode: false,
            
            
              slidesToShow: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              arrows: false,
               dots:true,
            centerMode: false,
            
            
              slidesToShow: 1
            }
          },
    
        ],
        
    });










// 

    Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$('.doc_schedule_slider_wrapper').slick({
       dots:false,
    
         centerMode: false,
        
        
        slidesToShow: 4,
         draggable: false,
     
        arrows: true,
        // autoplay:true,
       
      
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
               dots:true,
            centerMode: false,
            
            
              slidesToShow: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              arrows: false,
               dots:true,
            centerMode: false,
            
            
              slidesToShow:2
            }
          },
    
        ],
        
    });

$('.dep_schedule_slide').slick({
       dots:false,
    
         centerMode: false,
        
        
        slidesToShow: 7,
         draggable: false,
     
        arrows: false,
        // autoplay:true,
       
      
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
               dots:true,
            centerMode: false,
            
            
              slidesToShow: 5
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
               dots:true,
            centerMode: false,
            
            
              slidesToShow: 3
            }
          },
          {
            breakpoint: 550,
            settings: {
              arrows: false,
               dots:true,
            centerMode: false,
            
            
              slidesToShow:2
            }
          },
    
        ],
        
    });
