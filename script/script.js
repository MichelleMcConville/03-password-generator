// Assignment Code
var generateBtn = document.querySelector("#generate");
    console.log(generateBtn);

var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [" ", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var pwLength = prompt("Please make password between 8 to 128 characters long.");
    console.log(pwLength);
  var upCaseAns = confirm("Do you want use Upper Case letters?");
    console.log(upCaseAns);
  var lowCaseAns = confirm("Do you want use Lower Case Letters?");
    console.log(lowCaseAns);
  var numAns = confirm("Do you want to use Numbers?");
    console.log(numAns);
  var specialCharAns = confirm("Do you want to use Special Characters?");
    console.log(specialCharAns);

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
