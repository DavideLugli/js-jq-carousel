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
  imgActive.removeClass('active');
  imgNext.addClass('active');
}

function clickPrev() {

}
