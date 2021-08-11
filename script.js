// fullpage.js
$('#fullpage').fullpage({
  //option here
  autoScrolling: true,
  lockAnchors: false,
  anchors: ['title', 'intro', 'contact'],
  navigation: true,
  navigationPosition: 'right',
  // navigationTooltips: ['Title', 'Intro', 'Contact'],
  sectionColor: ['#ff8888', '#ffff88', '#ffcc88'],
  showActiveTooltip: true,
  sectionSelctior: '.section',
  paddingTop: '50px',
  controlArrows: true,
})
$(document).on('click', '#btn-toTitle', function() {
  $.fn.fullpage.moveTo('title');
});
$(document).on('click', '#btn-toIntro', function() {
  $.fn.fullpage.moveTo('intro');
});
$(document).on('click', '#btn-toContact', function() {
  $.fn.fullpage.moveTo('contact');
});

// For mobile viewport
$(document).ready(function() {
  var win = $(window);
  if (win.width() < 720) {
    $('#intro-icon1, #intro-icon2, #intro-icon3').removeClass('fa-5x');
    $('#intro-icon1, #intro-icon2, #intro-icon3').addClass('fa-3x');
    $('#intro_1 h3').css("fontSize", '15px');
    $('#intro_1 h3').css("fontWeight", '400');
    $('#intro_1 p').css("fontSize", '8px');
  }
});

// For resizing window
$(window).on('resize', function() {
  var win = $(window);
  if (win.width() < 720) {
    $('#intro-icon1, #intro-icon2, #intro-icon3').removeClass('fa-5x');
    $('#intro-icon1, #intro-icon2, #intro-icon3').addClass('fa-3x');
    $('#intro_1 h3').css("fontSize", '15px');
    $('#intro_1 h3').css("fontWeight", '400');
    $('#intro_1 p').css("fontSize", '8px');
  } else {
    $('#intro-icon1, #intro-icon2, #intro-icon3').removeClass('fa-3x');
    $('#intro-icon1, #intro-icon2, #intro-icon3').addClass('fa-5x');
    $('#intro_1 h3').css("fontSize", '');
    $('#intro_1 h3').css("fontWeight", '');
    $('#intro_1 p').css("fontSize", '');
  }
});

// animatie.css
$('#title_1 h1').addClass('animate__animated animate__bounce animate__infinite');
const element = document.querySelector('#title_1 h1');
element.style.setProperty('--animate-duration', '2s');
$('#intro-icon1').hover(
  function() {
    $(this).addClass('animate__animated animate__headShake animate__infinite');
  }, function() {
    $(this).removeClass('animate__animated animate__headShake animate__infinite');
  }
);
$('#intro-icon2').hover(
  function() {
    $(this).addClass('animate__animated animate__tada animate__infinite');
  }, function() {
    $(this).removeClass('animate__animated animate__tada animate__infinite');
  }
);
$('#intro-icon3').hover(
  function() {
    $(this).addClass('animate__animated animate__rubberBand animate__infinite');
  }, function() {
    $(this).removeClass('animate__animated animate__rubberBand animate__infinite');
  }
);
