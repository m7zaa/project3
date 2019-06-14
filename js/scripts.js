$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#userInput").val());
    // var beepBoopArray = userInput.split("");

    $("#beepOutput").text(beepBoopArray(userInput));
    $("#beepOutput").show();



// The function below will translate single numbers into designated words.
function beepBoopArray(number) {
  var translatorsArray = [3, 2, 1];
  var translationsArray = ["I'm sorry...", "Boop!", "Beep!"];

  for (var i = 0; i <= translatorsArray.length; i++) {
    if (number===translatorsArray[i]) {
      return translationsArray[i]
    }
  };
}





});
});
