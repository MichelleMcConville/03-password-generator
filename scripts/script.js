// Assignment Code
var generateBtn = document.querySelector("#generate");

// List of all variables
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowCase = "abcdefghijklmnopqrstuvwxyz".split("");
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = "`~!@#$%^&*()-_=+[{]}\"|;:',<.>/?".split("");
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
  // Resetting the values back to NULL when refresh browser is not used
  newUserPw = ""; maxArray = [];
  // Functions first prompt
  var pwLength = prompt("Please make password between 8 to 128 characters long.");

  // Checking the PW to make sure it is a # and correct length
  if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    alert("Must enter a number between 8 & 128!");
  } else {

    // Confirms to ask the user what to include in the PW
    var upCaseAns = confirm("Click OK to use \"UPPER\" case letters OR Click Cancel");
    var lowCaseAns = confirm("Click OK to use \"lower\" case letters OR Click Cancel");
    var numAns = confirm("Click OK to use \"Numbers\ OR Click Cancel");
    var specialCharAns = confirm("Click OK to use \"Special\" Characters OR Click Cancel");

    // Alert to notify use that ONE selection must be made
    if (!upCaseAns && !lowCaseAns && !numAns && !specialCharAns) {
      alert("You must choose at least one option!");
    } else {

      // Concatenation of main arrays
      if (upCaseAns) {maxArray = maxArray.concat(upCase);}
      if (lowCaseAns) {maxArray = maxArray.concat(lowCase);}
      if (numAns) {maxArray = maxArray.concat(num);}
      if (specialCharAns) {maxArray = maxArray.concat(specialChar);}

      // For Loop for random number generation
      for (var i = 0; i < pwLength; i++) {
        newUserPw = newUserPw + maxArray[Math.floor(Math.random() * maxArray.length)];
      }

    // Returning the random generated PW to the user
    return newUserPw;  
    }
  } 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
