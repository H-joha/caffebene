$(function () {
  // #header button
  $('#header .util_wrap .btn_search').on('click', function () {
    $('#header .search_area').slideToggle();
    $(this).toggleClass('on');
  });

  // .main_slider_wrap
  var mainSlider = new Swiper('.main_slider', {
    direction: 'horizontal',
    loop: true,
    simulateTouch: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // .main_menu
  var menuSlider = new Swiper('.menu_slider', {
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // .main_about
  var aboutSlider = new Swiper('.about_slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    simulateTouch: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // .main_sns
  var snsSlider = new Swiper('.sns_slider', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // #footer top button
  $('#footer .top_wrap .btn_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  // .about_page
  $('[class*=animate_fade]').each(function () {
    var _this = $(this);
    $(window)
      .on('scroll', function () {
        var posY = _this.offset().top;
        var st = $(this).scrollTop();
        console.log(posY, st);

        if (st >= posY - $(this).outerHeight() + 50) {
          _this.addClass('on');
        } else {
          _this.removeClass('on');
        }
      })
      .trigger('scroll');
  });

  // .faq_fage
  $('.question').on('click', function (e) {
    e.preventDefault();
  });

  $('.faq_page .table_wrap .question_wrap').on('click', function () {
    $(this).next().toggleClass('on').siblings().removeClass('on');
  });
});
