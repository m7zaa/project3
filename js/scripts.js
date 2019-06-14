$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#userInput").val());
    // var input = numberInput.split("");
    $("#beepOutput").text(beepBoopArray(userInput));
    $("#beepOutput").show();
  });
});


  function beepBoopArray(number) {
    var translatorsArray = [1, 2, 3];
    var translationsArray = ["Beep!", "Boop!", "I'm sorry..."];

    for (var i = 0; i <= translatorsArray.length; i++) {
      if (number===translatorsArray[i]) {
        return translationsArray[i]
      }
    }

    // return("?")




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
