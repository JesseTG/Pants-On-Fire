$(document).ready(function() {

  function randomColor() {
    var color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    return color;
  }

  $(".projects").hover(
    function() {
      $(this)
        .css("background-color", randomColor())
        .css('color', 'white')
        .css('border-style', 'solid')
        .css('border-color', 'black');
    },
    function() {
      $(this)
        .css('width', '10em')
        .css('width', '10em');
    });

  $(".projects").on('click',
    function() {
      $(this)
        .css("background-color", 'white')
        .css('color', 'black');
    });

  jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
    this.each(function() {
      $(this).css("position", "relative");
      for (var x = 1; x <= intShakes; x++) {
        $(this).animate({
            left: (intDistance * -1)
          }, (((intDuration / intShakes) / 4)))
          .animate({
            left: intDistance
          }, ((intDuration / intShakes) / 2))
          .animate({
            left: 0
          }, (((intDuration / intShakes) / 4)));
      }
    });
    return this;
  };

  $(".projects").click(function() {
    $(this).shake(4, 7, 400);
  });

  $(".modal-content").click(function() {
    $(".modal-content").shake(4, 4, 400);
  });

});