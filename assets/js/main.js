$(document).ready(function(){
	initPushpin();
});

function initPushpin() {
	
  $('#content').pushpin({
		top: $("#content").offset().top,
	});
	
  $(".scrollspy").scrollSpy({
    scrollOffset: 0
  });
	
}