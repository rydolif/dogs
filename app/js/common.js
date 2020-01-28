$(function() {

//----------------------------------------fixed-header---------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

  if ($(this).scrollTop()<20){
    $('.header').addClass('header--active');
  }

//-------------------------скорость якоря menu---------------------------------------
  $(".menu__nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 120}, 'slow', 'swing');
  });

//-------------------------скорость якоря navigation---------------------------------------
  $(".navigation").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 120}, 'slow', 'swing');
  });

//-------------------------reviews slider---------------------------------------
    var swiper = new Swiper('.reviews__slider', {
      spaceBetween: 25,
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
    });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('.header').toggleClass('header--menu');
    $('body').toggleClass('no-scroll');
  });

});

