// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber
var confirmSpecial;
var userChoices;

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase;
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ['`', '~!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '|', '\\', ';', ':', '"', ',', '<', '.', '>', '/', '?'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


