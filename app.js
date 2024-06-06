$(function(){
    $(".nav-link").each(function(){
        $(this).on("click", function(){
            removeActive();
            $(this).addClass("active");
        });
    });

    $('.flip').hover(function(){
        $(this).find('.card').toggleClass('flipped');

 });

 let windowSize = $(window).width();
  if(windowSize < 992){
    $("#navigation-collapse").removeClass("d-none");
    $("#navigation-brand").addClass("d-none");
    $("#desktop").addClass("d-none");
    $("#mobile").removeClass("d-none");
  } else {
    $("#navigation-collapse").addClass("d-none");
    $("#navigation-brand").removeClass("d-none")
    $("#desktop").removeClass("d-none");
    $("#mobile").addClass("d-none");
  }

  $(window).resize(function(){
    windowSize = $(window).width();
    if(windowSize < 992){
        $("#navigation-collapse").removeClass("d-none");
        $("#navigation-brand").addClass("d-none");
        $("#desktop").addClass("d-none");
        $("#mobile").removeClass("d-none");
    } else {
        $("#navigation-collapse").addClass("d-none");
        $("#navigation-brand").removeClass("d-none");
        $("#desktop").removeClass("d-none");
        $("#mobile").addClass("d-none");
    }
});
  if(window.location.pathname === "/aboutus.html"){
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      focusOnSelect: true,
      autoplay: true
    });
  }

  
  
 
  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.slideUp("slow", function(){})
      }
    });
  }

  var $animation_elements = $('.animated');
  var $window = $(window);

 

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
 

  var videos = document.getElementsByClassName("howto-download");

function checkScroll() {
  var fraction = 0.1; // Play when 10% of the player is visible.

  for (var i = 0; i < videos.length; i++) {

    var video = videos[i];

    var x = video.offsetLeft,
      y = video.offsetTop,
      w = video.offsetWidth,
      h = video.offsetHeight,
      r = x + w, //right
      b = y + h, //bottom
      visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
      video.play();
    } else {
      video.pause();
    }

  }

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);
});

function removeActive(){
    $(".nav-link").each(function(){
        $(this).removeClass("active");
    });
}


