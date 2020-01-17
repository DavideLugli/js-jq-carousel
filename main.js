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
  var isLast = imgActive.hasClass('last');
  if (isLast) {
    imgActive.removeClass('active');
    $('img.first').addClass('active');

  } else {
    imgActive.removeClass('active');
    imgNext.addClass('active');
  }

}

function clickPrev() {

}
