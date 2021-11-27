// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthInput = window.prompt('How many characters do you want your password to include?');
  var length = parseInt(lengthInput);
  var isInvalidLength = length <= 8 || length >= 128;

  if (isInvalidLength) {
    window.alert('Length must between 8 and 128');
    return;
  }

  var isLowerAlpha = window.confirm('Do you want to include lowercase letters?')  
  var isUpperAlpha = window.confirm('Do you want to include uppercase letters?')  
  var isNumeric = window.confirm('Do you want to include numbers?')  
  var isSpecialChar = window.confirm('Do you want to include special characters?')  
  var isValidCharacterType = isLowerAlpha || isUpperAlpha || isNumeric || isSpecialChar;

  if (!isValidCharacterType) {
    window.alert('Password must include at least one character type.');
    return;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
