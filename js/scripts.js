$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();
    var input = userInput.split("");
    $("#beepOutput").text(beepBoopArray(userInput));
    $("#beepOutput").show();
  });
});



// The function below will translate single numbers into designated words.


  function beepBoopArray(number) {
    var translatorsArray = ["3", "2", "1"];
    var translationsArray = ["I'm sorry...", "Boop!", "Beep!"];

    for (var i = 0; i <= translatorsArray.length; i++) {
      if (number===translatorsArray[i]) {
        return translationsArray[i]
      }
      if (number !=translatorsArray[i]) {
        return number
      }
    }
  }


      // for(var firstIndex = 0; firstIndex < input.length; firstIndex++) {
        // if (input.charAt(0) === "1") {
        //   console.log(test);
      // }


    // var digitReturn = input.join('')




    // for (var digit = 0; digit < input.length; digit++) {
    //   if(input[digit] = digit) {
    //     input[digit] = "input!";
    //   }
    // }


    // var numberCounter = function(input) {
    //   if(input = "1") {
    //     console.log("input");
    //   }
    // }
