$(function () {
  'use strict';
  $('.back-to-top').hide(); // hide scroll to top
  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Start portfolio
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $(".list ul li").on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });
  // End Portfolio

  // Start Smooth Scroll to a Section
  $(function () {
    $('a[href*=\\#]:not([href=\\#])').on('click', function () {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1200, );
        return false;
      }
    });
  });
  // End Smooth Scroll to a Section

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.navbar-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 300;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 200) {
        $(".navbar-nav ul li").addClass('active');
      }
    });
  });

  // Start ScrollTop
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 200) {
        $('.back-to-top').stop().fadeIn(300); // show the button
      } else {
        $('.back-to-top').stop().fadeOut(200); // hide the button
      }
    });
  });

  $(function () {
    $(".back-to-top").on("click", function () {
      $("html, body").animate({
        scrollTop: 0,
      }, 800);
    });
  });
  // End scrollTop

  // Start Counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
  // End Counter
});