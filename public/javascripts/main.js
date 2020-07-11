!(function($) {
    'use strict'


  // Testimonial carousel (uses the Owl Carousel library)
  $('.owl-client').owlCarousel({
    animateOut: 'fadeOut',
    dots : true ,
    // nav : true ,
    loop: false,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items : 2
      },
      1000: {
        items: 3
      }
    }
  });
    

})(jQuery);