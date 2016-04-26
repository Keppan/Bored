$(document).scroll(function() {
  if ($(this).scrollTop() > 100) { //Adjust 150
    $('.header').addClass('shrinked');
    $('.Logo').addClass('shrinked')
    $('.Text').addClass('shrinked')
  } else {
    $('.header').removeClass('shrinked');
    $('.Logo').removeClass('shrinked');
    $('.Text').removeClass('shrinked');
  }
});