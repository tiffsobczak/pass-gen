// Assignment code here
const alpha= "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTVWXYZ";
const numbers="0123456789";
const symbols="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

const passwordTxt=document.getElementById("password");
const length=document.getElementById("length");
const incNumbers=document.getElementById("numbers");
const inclSymbols=document.getElementById("symbols");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  const alpha= "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTVWXYZ";
  const numbers="0123456789";
  const symbols="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  let password =''
  for (var i=0; i < 8; i++) {
    let generate = letters[Math.floor(Math.random()*128)]
  }
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  let characters = alpha;
  incNumbers.checked 
}

