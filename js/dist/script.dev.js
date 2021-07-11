"use strict";

$(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 150) {
      // Navigation Bar
      $('.navbar').removeClass('fadeIn');
      $('.navbar').addClass('animate__animated animate__fadeInDown');
    } else {
      $('.navbar').removeClass('animate__animated animate__fadeInDown');
      $('.navbar').addClass('animate__animated animate__fadeIn');
    }

    if ($(document).scrollTop() > 200) {
      $('.about').addClass('animate__animated animate__fadeInUp');
    }

    if ($(document).scrollTop() > 700) {
      $('.portfolio').addClass('animate__animated animate__fadeInLeft');
    }

    if ($(document).scrollTop() > 1200) {
      $('.social').addClass('animate__animated animate__fadeInUp');
    }

    if ($(document).scrollTop() > 1800) {
      $('.contact').addClass('animate__animated animate__fadeInRight');
    }
  });
});