// Hide welcome then open main page

$("#enter").on('click', function(e) {

  var speed = 300;

  // prevent default anchor click behavior
    e.preventDefault();
    $(".welcome").fadeOut(+speed);
    $(".mainpage").fadeIn(0);
  // smoothScroll(this.hash, -50, 500);
});


// Specify the $(path to event).

function smoothScroll(hash, set, delay){
  $('html, body').animate({
    scrollTop: $(hash).offset().top +set
    }, +delay, function(){ window.location.hash = hash; });
}

// Go to top page using navbar menue
$("#navbar-top ul li a[href^='#top-page']").on('click', function(e) {

  e.preventDefault();
  smoothScroll(this.hash, -60, 500);

});

// Scroll down to sections
$("#navbar-top ul li a").on('click', function(e) {

  e.preventDefault();
  if(this.hash !== '#top-page'){
  	smoothScroll(this.hash, 0, 500);
  };

});

// Go to top page using the bottom-right fixed button
$("#back-to-top a[href^='#top-page']").on('click', function(e) {

  e.preventDefault();
  smoothScroll(this.hash, -60, 500);

});

// Scroll down in CV
$("#pseudo-navbar .nav-cv a").on('click', function(e) {

  e.preventDefault();
  if(this.hash !== '#top-page'){
  	smoothScroll(this.hash, -40, 500);
  };

});

// Scroll down to Rpackages from within CV
$(".cv-content p em a[href^='#publications']").on('click', function(e) {

  e.preventDefault();
  smoothScroll(this.hash, -20, 500);

});

// Back to top CV
$(".back-to-cv a").on('click', function(e) {

  e.preventDefault();
  if(this.hash !== '#top-page'){
  	smoothScroll(this.hash, -40, 500);
  };

});

// $("#navbar ul li a[href^='#']").on('click', function(e) {

//    // prevent default anchor click behavior
//    e.preventDefault();

//    // store hash
//    var hash = this.hash;

//    // animate
//    // the top'space'value specify the offset
//    // the second value specify the delay (in m.sec)
//    $('html, body').animate({
//        scrollTop: $(hash).offset().top -50
//      }, 500, function(){

//        // when done, add hash to url
//        // (default click behaviour)
//        window.location.hash = hash;
//      });

// });

// $("a.navbar-brand").on('click', function(e) {

//    // prevent default anchor click behavior
//    e.preventDefault();

//    // store hash
//    var hash = this.hash;

//    // animate
//    $('html, body').animate({
//        scrollTop: $(hash).offset().top -50
//      }, 500, function(){

//        // when done, add hash to url
//        // (default click behaviour)
//        window.location.hash = hash;
//      });

// });
