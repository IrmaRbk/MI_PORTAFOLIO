var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

// _________________________

$(document).ready(function(

  $("h3").mouseenter(function(){
      $(this).css('color','red');
  });


  $("#flip").click(function(){
      $("#panel").slideDown();
  });

  $("h3").mouseleave(function(){
      $(this).fadeOut('low'), $(this).fadeIn('low');
  });

  $(".fotoDos, .fotoTres, .fotoCuatro").mouseenter(function() {
      $(this).slideUp(1600).slideDown(1600);
    });


});

