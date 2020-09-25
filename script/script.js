// Assignment Code
var generateBtn = document.querySelector("#generate");
    console.log(generateBtn);

// List of all variables
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"];
var maxArray = [];
var newUserPw = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to generate random PW
function generatePassword() {
  var pwLength = prompt("Please make password between 8 to 128 characters long.");
    console.log(pwLength);

      // Confirms to ask the user what to include in the PW
      var upCaseAns = confirm("Click OK to use \"UPPER\" case letters OR Click Cancel");
        console.log(upCaseAns);
      var lowCaseAns = confirm("Click OK to use \"lower\" case letters OR Click Cancel");
        console.log(lowCaseAns);
      var numAns = confirm("Click OK to use \"Numbers\ OR Click Cancel");
        console.log(numAns);
      var specialCharAns = confirm("Click OK to use \"Special\" Characters OR Click Cancel");
        console.log(specialCharAns);

      // Alert to notify use that ONE selection must be made
      if (!upCaseAns && !lowCaseAns && !numAns && !specialCharAns) {
        alert("You must choose at least one option!");
        console.log("You must choose at least one option!");
      } else {

        if (upCaseAns) {
          maxArray = maxArray.concat(upCase); console.log(maxArray);
        }

        if (lowCaseAns) {
          maxArray = maxArray.concat(lowCase); console.log(maxArray);
        }

        if (numAns) {
          maxArray = maxArray.concat(num); console.log(maxArray);
        }

        if (specialCharAns) {
          maxArray = maxArray.concat(specialChar); console.log(maxArray);
        }

        for (var i = 0; i < pwLength; i++) {
          newUserPw = newUserPw + maxArray[Math.floor(Math.random() * maxArray.length)];
        }

      // Returning the random generated PW to the user
      return newUserPw;  
      }  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
