$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#userInput").val());
    //var input = numberInput.split("");
    $("#beepOutput").text(beepBoopArray(userInput));
    $("#beepOutput").show();
  });
});





// var countBack = function(count) {
//     for(var i = count; i <= count; i += count) {
//       console.log(i);
//     }
//   }



// The function below will translate single numbers into designated words.
  function beepBoopArray(number) {
    var translatorsArray = [3, 2, 1];
    var translationsArray = ["I'm sorry...", "Boop!", "Beep!"];

    for (var i = 0; i <= translatorsArray.length; i++) {
      if (number===translatorsArray[i]) {
        return translationsArray[i]
      }
      var numberMultipliers = function(multiplier, count) {
  if(multiplier < 0 || count < 0 || multiplier > count) {
    return console.log("Do not enter a negative number or a multiplier that is higher than the count.")
  } else if (isNaN(multiplier) || isNaN(count) || multiplier === "" || count === "") {
    return console.log("Please enter a number.")
  } else {
    for(var i = multiplier; i <= count; i += multiplier) {
      console.log(i);
    }
  }

};
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
