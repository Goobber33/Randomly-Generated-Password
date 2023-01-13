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

// The start of the function | User input

function generatePassword() {
  passwordLength = prompt('How many characters would you like your password to be? Choose between 8 and 30');
  console.log('Password length ' + passwordLength);

  if (!passwordLength) {
    alert('Required Value');

    // Else and else if statements to confirm what the user would like to be added into their password. "confirm" will pop up a window on the screen

  } else if (passwordLength < 8 || passwordLength > 30) {
    passwordLength = prompt('You must choose a password between 8 and 30 characters long');
    console.log('Password length ' + passwordLength);

  } else {
    confirmLower = confirm('Will your password contain lower case letters?');
    console.log('Lower cass ' + confirmLower);
    confirmUpper = confirm('Will your password contain upper case letters?');
    console.log('Upper case ' + confirmUpper);
    confirmNumber = confirm('Will your password contain any numbers?');
    console.log('Numbers ' + confirmNumber);
    confirmSpecial = confirm('Will your password contain special characters?');
    console.log('Special Character ' + confirmSpecial);

  };

  // if and else if statements to return user data for password characters

  // If all four options are selected

  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert('You must choose a criteria');
  
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  
    //  If three options are selected

  } else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  
  } else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  
  } else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  
  } else if (confirmUpper)







  var password = passwordBlank.join("");
  console.log('Your Password is: ' + password);
  return password;


}
