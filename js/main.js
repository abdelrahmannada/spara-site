$(document).ready(function (){


  $('.nav-icon').click(function(){
    $('.full-nav').addClass('open');
  });

  $('.nav-close').click(function(){
    $('.full-nav').removeClass('open');
  });


  $(window).scroll(function(){
    if($(window).scrollTop() >= $('.nav').height()){
      $('.nav').addClass('sticky');
    }else { $('.nav').removeClass('sticky');
      }
  });




  $('.bxslider').bxSlider({
    mode:'horizontal',
    moveSlides : 1,
    slideMargin: 40,
    infiniteLoop: true,
    minSlides : 1,
    maxSlides :1,
    speed:1200  , 
    auto: true, 
    
  });



  if($(".swiper-container").hasClass("team-member-slider")){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        effect: 'coverflow',
        loop:true,
        allowTouchMove:true,
        grabCursor: true,
        centeredSlides: true,
        slideToclickedslide:true,
        autoplay:false,
        navigation:{
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        coverflow: {
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier:1,
          slideShadows : false,
        },
        breakpoints: {
          767 : {
            slidesPerView: 1,
            centeredSlides: false,
            effect : 'slide'
          }
        },
      });
  }

  $('#news-slider').ready(function(){
    $(".owl-carousel").owlCarousel({
      items:3,
      itemsDesktop:[1199,3],
      itemsDesktopSmall:[1000,2],
      itemsMobile : [599,1],
      pagintaion:false,
      navigationText:false,
      autoPlay :true ,

    });
      
    
    
  })
 

  $("#work").magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
        enabled  : true 
    }
  })

});