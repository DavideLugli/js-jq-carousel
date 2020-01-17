$(document).ready(
  function() {

    $('.next').click(
      function() {
        clickNext();
      }
    );
    $('.prev').click(
      function() {
        clickPrev();
      }
    );
  }
);




function clickNext() {
  var imgActive = $('img.active');
  var imgNext = imgActive.next();
  var circleActive = $('i.active');
  var circleNext = circleActive.next();
  var isLast = imgActive.hasClass('last');
  if (isLast) {
    imgActive.removeClass('active');
    $('img.first').addClass('active');
    circleActive.removeClass('active');
    $('i.first').addClass('active');

  } else {
    imgActive.removeClass('active');
    imgNext.addClass('active');
    circleActive.removeClass('active');
    circleNext.addClass('active');
  }

}

function clickPrev() {
  var imgActive = $('img.active');
  var imgPrev = imgActive.prev();
  var circleActive = $('i.active');
  var circlePrev = circleActive.prev();
  var isFirst = imgActive.hasClass('first');
  if (isFirst) {
    imgActive.removeClass('active');
    $('img.last').addClass('active');
    circleActive.removeClass('active');
    $('i.last').addClass('active');

  } else {
    imgActive.removeClass('active');
    imgPrev.addClass('active');
    circleActive.removeClass('active');
    circlePrev.addClass('active');
  }
}
