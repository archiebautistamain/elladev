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



 if (window.location.pathname.includes("/aboutus.html")) {
  const cardsPerPage = 2;
  const totalCards = 8; // Change this for more cards
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const $cardContainer = $('#card-container');
  const $pagination = $('#pagination');

  // Function to create a card
  function createCard(flavours) {
      return `
        <div class="col-6 d-flex align-items-stretch">
          <div class="card mobileflavours-card h-100" style="width: 18rem;">
            <img src="img/${flavours.pic}" class="card-img-top" alt="...">
            <div class="card-body h-100">
              <h5 class="card-title">${flavours.name}</h5>
              <p class="card-text">${flavours.desc}</p>
            </div>
          </div>
        </div>
      `;
  }

  // Function to display cards for the current page
  function displayCards(page) {
      $cardContainer.empty(); // Clear existing cards
      const flavours = [
        {name: "Flat White", pic: "flatwhite.png", desc: "Velevety espresso-based drink with steamed milk. Hits all the right notes if you're keeping it simple"},
        {name: "Latte", pic: "latte.png", desc: "Espresso with velevety steamed milk and topped with light milk foam for just the right flavour"},
        {name: "Oatly Latte", pic: "choco.png", desc: "Indulge in this exceptional beverage offering a harmonious blend of espresso and rich oat milk for a vegan-friedly coffee experience"},
        {name: "Pandan Tea Latte", pic: "matcha_latte.png", desc: "A blend of freshly brewed tea and pandan, with the perfect balance of sweetness. A refreshing twist for when you crave something unique and satisfying."},
        {name: "Cappuccino", pic: "cappicuno.png", desc: "A shot of espresso and steamed mild, with frothy milk foam at the first sip. A self-care drink to reward yourself with."},
        {name: "Double Espresso", pic: "double_espresso.png", desc: "Intense, full-bodied 2-ounce shot of coffee. Perfect energizer for those who make it happen"},
        {name: "Babycino", pic: "babycino.png", desc: "Hot milk that has been frothed up with pressurized steam to give you the most conforting cup you will ever need."},
        {name: "Americano", pic: "americano.png", desc: "Double-shot long espresso extraction into a black coffee with incredible crema on top. The go-to if you need a good caffeine kick."}
      ]
       
      $cardContainer.empty(); // Clear existing cards
    const start = (page - 1) * cardsPerPage; // Start index for flavours array
    const end = Math.min(start + cardsPerPage, flavours.length); // Calculate the end index

    $cardContainer.fadeOut(200, function() {
        $cardContainer.empty(); // Clear existing cards

        // Loop through the flavours array from start to end
        for (let i = start; i < end; i++) {
            $cardContainer.append(createCard(flavours[i])); // Pass the entire flavour object
        }

        $cardContainer.fadeIn(200); // Fade in new cards
    });

     
      
  }

  // Function to create pagination
  function createPagination() {
      for (let i = 1; i <= totalPages; i++) {
          const $li = $(`<li class="page-item"><a class="page-link" href="#">${i}</a></li>`);
          $li.on('click', function(event) {
              event.preventDefault();
              displayCards(i);
              setActivePage(i);
          });
          $pagination.append($li);
      }
  }

  function setActivePage(activePage) {
    // Remove active class from all pagination items
    $('#pagination .page-item').removeClass('active');
    
    // Add active class to the current page item
    $('#pagination .page-item').eq(activePage - 1).addClass('active');
}

  // Initial display
  createPagination();
  displayCards(1);
}

 $(".flavour-card").on("mouseenter",function(){
  $(this).css("margin-top", "-1rem")
 })

 $(".flavour-card").on("mouseleave",function(){
  $(this).css("margin-top", "0")
 })

 if ( window.location.hash){
  let hash = window.location.hash.substring(1);
  if(hash === "flavours"){
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#flavours").offset().top
  }, 1000);
  }
 }

 $("#ella-download").on('show.bs.modal', function(){
  $("#faqs-download-video").trigger("play")
})

$("#ella-download").on('hidden.bs.modal', function(){
  $("#faqs-download-video").trigger("pause")
})

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

$("#pageSearch").on("input", function(){
  let page = "";
  const checkmobile = $("#mobile").hasClass("d-none");
  console.log(checkmobile);
  if(checkmobile){
    page = "desktop"
    
  } else {
    page = "mobile"
  }
  var searchText = $(this).val().trim();
    removeHighlights(page); // Remove existing highlights
    if (searchText !== '') {
      highlightMatches(searchText, page);
    }

  
});

$("#contact-form").on("submit", async function(e){
  e.preventDefault();
  let formData = new FormData(this);
    let name = formData.get("name");
    let email = formData.get("email");
    let message = formData.get("message");
    let body = `<p>Dear ELLA,</p><p><strong>${name}</strong> has sent you a message.</p><p><em><strong>${message}</strong></em></p>`;
    Swal.fire({
        title: "Please Wait..",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        allowEscapeKey: false,
        willOpen: async function (e) {
            Swal.showLoading();
            let data = {
                groupname: "ELLA CONTACT",
                recipients: `${email}:notifications@iwantseats.com`,
                message: body,
            };
            //console.log("send-data", data);
            let input = `https://iwsenterprise.com/squareone/api_pasabuy_sendemail.aspx`;
            let res = await axios.post(input, data, axiosConfig);
            //console.log(res.data);
            if (res.data === "SAVED") {
                Swal.fire(
                    "Thank you for contacting us.",
                    "We appreciate that you've taken the time to write us, We'll get back to you very soon.",
                    "success"
                );
                $("#contact-form").trigger("reset");
            } else {
                Swal.fire("Failed..", "", "error");
                //console.log("response", res);
            }
        },
    });
})

$('#card-carou .carousel').slick({
  autoplaySpeed: 2000,
  autoplay: true,
  centerMode: true,
  centerPadding: "60px",
  infinite: true,
  dots:true,
  centerMode: true,
  });

  $('#mobilecard-carou .carousel').slick({
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    dots:true,
    });

  $(".fella-img").css("background-image", `url("img/ellahighlights1.jpg")`);
  const imgs = [
    "img/ellahighlights1.jpg","img/ellahighlights2.jpg","img/ellahighlights5.jpg"
  ]
  
    setInterval(function(){
      $(".fella-img").fadeOut(1000, function(){
        randomImage = Math.floor( Math.random() * imgs.length);
        $(".fella-img").css("background-image", `url("${imgs[randomImage]}")`)
        $(".fella-img").fadeIn(1000);
      })
      
    },5000)

    $(".fellamobile-banner").css("background-image", `url("img/ellahighlights1.jpg")`);
  const mobileimgs = [
    "img/ellahighlights1.jpg","img/ellahighlights2.jpg","img/ellahighlights5.jpg"
  ]
  
    setInterval(function(){
      $(".fellamobile-banner").fadeOut(1000, function(){
        randomImage = Math.floor( Math.random() * mobileimgs.length);
        $(".fellamobile-banner").css("background-image", `url("${mobileimgs[randomImage]}")`)
        $(".fellamobile-banner").fadeIn(1000);
      })
      
    },5000)
  
});

function highlightMatches(searchText, page) {
  var searchRegEx = new RegExp(searchText, 'gi'); // 'gi' for case insensitive and global search
  var $pageContent = $(`#${page}`);
  console.log($pageContent)

  $pageContent.find('*').each(function() {
    var $element = $(this);
    // $element.html($element.html().replace(searchRegEx, function(match) {
    //   return '<span class="highlight">' + match + '</span>';
    // }));
    // $element.text().indexOf(searchText), $element.text()
    const position = $element.text().indexOf(searchText);
    if($element.text().includes(searchText)){
      console.log($element.text().substring([position],searchText.length));
    }
    
    
    
  });
}


function removeHighlights(page) {
  $(`#${page}`).find('.highlight').each(function() {
    $(this).replaceWith($(this).text());
  });
}

function removeActive(){
    $(".nav-link").each(function(){
        $(this).removeClass("active");
    });
}


