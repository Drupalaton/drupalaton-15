$( document ).ready(function() {
  $("#countdown")
  .countdown("2015/08/06", function(event) {
    $(this).text(
      event.strftime('%D days %H:%M:%S')
      );
  });
});