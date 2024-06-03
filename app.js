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
  
 
  
 
});

function removeActive(){
    $(".nav-link").each(function(){
        $(this).removeClass("active");
    });
}

