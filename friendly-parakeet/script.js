// Assignment code here
const LOWER_CASE = "abcdefghijklmnopqurstuvwxyz";
const UPPER_CASE = "ABCDEFGHIJKLMNOPQURSTVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const lengthInput = window.prompt('How many characters do you want your password to include?');
  const length = parseInt(lengthInput);
  const isInvalidLength = length < 8 || length > 128;

  if (isInvalidLength) {
    window.alert('Length must between 8 and 128');
    return;
  }

  const isLowerAlpha = window.confirm('Do you want to include lowercase letters?')  
  const isUpperAlpha = window.confirm('Do you want to include uppercase letters?')  
  const isNumeric = window.confirm('Do you want to include numbers?')  
  const isSpecialChar = window.confirm('Do you want to include special characters?')  
  const isValidCharacterType = isLowerAlpha || isUpperAlpha || isNumeric || isSpecialChar;

  if (!isValidCharacterType) {
    window.alert('Password must include at least one character type.');
    return;
  }

  const password = generatePassword(length, isLowerAlpha, isUpperAlpha, isNumeric, isSpecialChar);
  const passwordText = document.querySelector("#password");
  passwordText.innerText = password;
}

function generatePassword(size, isLower, isUpper, isNumberic, isSpecial) {
  let password = "";

  while (password.length < size) {
    if (isLower) {
      // add a random lower case char
      const index = getRandomInt(0, 25);
      password = password + LOWER_CASE[index];
    }

    if (isUpper) {
      // add a random upper case char
      const index = getRandomInt(0, 25);
      password = password + UPPER_CASE[index];
    }

    if (isNumberic) {
      // add a random number
      const index = getRandomInt(0, 9);
      password = password + NUMBERS [index];
    }

    if (isSpecial) {
      // add a random special char
      const index = getRandomInt(0, 29);
      password = password + SYMBOLS [index];
    }
  }

  // size the password
  password = password.substring(0, size);

  return password;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
