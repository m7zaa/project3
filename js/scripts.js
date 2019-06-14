$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var numberInput = $("#userInput").val();
    var beep = numberInput;

    $("#beepOutput").text(beep);
    $("#beepOutput").show();
  });
});
