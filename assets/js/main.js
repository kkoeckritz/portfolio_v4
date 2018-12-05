$(document).ready(function(){
  initMaterialize();
  custom.carousel.slide();
});

/**
 * Initialize Materialize objects
 */
function initMaterialize() {
  
  // pushpin
  $('#nav_float').pushpin({
    top: $("#nav_float").offset().top
  });
  
  $('.parallax').parallax();
  
  // scrollspy
  $(".scrollspy").scrollSpy({
    scrollOffset: 0
  });

  // carousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    duration: 800
  });
}

var custom = {

  carousel: {
    elem: null,
    inst: null,
    invl: 0,
    slide: () => {

      // scroll through carousel every 2 seconds
      this.elem = document.getElementById("portfolio_carousel");
      this.inst = M.Carousel.getInstance(this.elem);
      this.invl = setInterval(() => {

        // slide or cancel interval if touched
        if (this.inst.pressed || this.inst.dragged) {
          clearInterval(this.invl);
          console.log("halt!");
          this.inst.options.duration = 200;
        } else {
          this.inst.next();
          console.log("slide!");
        }
      }, 4000);
    }
  }
}