$(window).on('load',function(){$('#status').fadeOut();$('#preloader').delay(250).fadeOut('slow');$('body').delay(250).css({'overflow':'visible'})})

// Wrap every letter in a span
function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById("img").src = images[x];
}

function startTimer() {
  setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "imgs/cartoon.jpg";
images[1] = "imgs/cartoon2.jpg";
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  function smile() {
    var a;
    a = document.getElementById("div2");
    a.innerHTML = "&#xf118;";
    setTimeout(function () {
        a.innerHTML = "&#xf11a;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf119;";
      }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf11a;";
      }, 3000);
  }
  smile();
  setInterval(smile, 4000);
  function hourglass() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf251;";
    setTimeout(function () {
        a.innerHTML = "&#xf252;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf253;";
      }, 2000);
  }
  hourglass();
  setInterval(hourglass, 3000);
  
jQuery(document).ready(function(){
  $('.work').magnificPopup({
    delegatte:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });
});
