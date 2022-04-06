




(function($){
  $(function(){
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true

    });

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready


  $('.close-sidenav').click(function(){
    $('.button-collapse').click()
  })
})(jQuery); // end of jQuery name space

