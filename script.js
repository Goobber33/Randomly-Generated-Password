// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Unique variables describing which case use they have. 

var passwordLength;
var caseLower;
var caseUpper;
var useNumber
var useSpecial;
var userSelection;

// lower case characters to be entered in to generated password

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// uppercase characters to be entered in to generated password

var useUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var toUpper = function (z) {
  return z.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

// Numbers and special characters toi be entered in to generated password

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ['`', '~!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '|', '\\', ';', ':', '"', ',', '<', '.', '>', '/', '?'];

// Write password function. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// The start of the function | User input

function generatePassword() {

  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passwordLength);

  // Else and else if statements to confirm what the user would like to be added into their password. "confirm" will pop up a window on the screen

  if (!passwordLength) {
    alert("Please describe your password length");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);

  } else {
    caseLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + caseLower);
    caseUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + useUpper);
    useNumber = confirm("Will this contain numbers?");
    console.log("Number " + useNumber);
    useSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + useSpecial);

  };

  // if and else if statements to return user data for password characters

  // If all four options are selected, return a generated password with uppercase, lowercase, numbers and special characters.

  if (!caseLower && !caseUpper && !useNumber && !useSpecial) {    // ----> If nothing is selected, return the message prompting to choose an option
    userSelection = alert('Please generate a new password, and choose an option');

  } else if (caseLower && caseUpper && useNumber && useSpecial) {
    userSelection = lowerCase.concat(lowerCase, upperCase, numbers, special);
    console.log(userSelection);

    //  Three options selected, and will return a generated password with the options selected.

  } else if (caseLower && caseUpper && useNumber) {
    userSelection = lowerCase.concat(upperCase, numbers);
    console.log(userSelection);
  
  } else if (caseLower && caseUpper && useSpecial) {
    userSelection = lowerCase.concat(upperCase, special);
    console.log(userSelection);
  
  } else if (caseLower && useNumber && useSpecial) {
    userSelection = lowerCase.concat(numbers, special);
    console.log(userSelection);
  
  } else if (caseUpper && useNumber && useSpecial) {
    userSelection = upperCase.concat(numbers, special);
    console.log(userSelection);

    // Two options selected, and this will return a generated password with two of the options selected

  } else if (caseLower && caseUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userSelection);

  } else if (caseLower && useNumber) {
    userSelection = lowerCase.concat(numbers);
    console.log(userSelection);

  } else if (caseLower && useSpecial) {
    userSelection = lowerCase.concat(special);
    console.log(userSelection);

  } else if (caseUpper && useNumber) {
    userSelection = upperCase.concat(numbers);
    console.log(userSelection);

  } else if (caseUpper && useSpecial) {
    userSelection = upperCase.concat(special);
    console.log(userChoices);

  } else if (useNumber && useSpecial) {
    userSelection = numbers.concat(special);
    console.log(userSelection);

    // If one option is selected, it will return a generated password with the option selected

  } else if (caseLower) {
    userSelection = lowerCase.concat(lowerCase);
    console.log(userSelection);
  
  } else if (caseUpper) {
    userSelection = upperCase.concat(upperCase);
    console.log(userSelection);
  
  } else if (useNumber) {
    userSelection = numbers;
    console.log(userSelection);
  
  } else if (useSpecial) {
    userSelection = special;
    console.log(userSelection);
  };

  var noPassword = [];

  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userSelection[Math.floor(Math.random() * userSelection.length)];
    noPassword.push(allChoices);
    console.log(allChoices);
  }

  var password = noPassword.join("");
  console.log("Your Password is: " + password);
  return password;


}
