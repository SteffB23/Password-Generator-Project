// Variables
var generateBtn = document.querySelector("#generate");
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

//Combined Var abcUpper, abcLower & sym:
var abcUpperLowerSym = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";  

//Immediate message when page loads:
window.onload = alert("Welcome! Please click 'Generate password' to start!");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that display after clicking generate password:
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");

  var num = confirm("Do you want numbers in your password?");

  var abcLower = confirm("Do you want lowercases in your password?");

  var abcUpper = confirm("Do you want uppercases in your password?");

  var sym = confirm("Do you want special characters in your password?");
//If the user does not select at least one character
   
if (!(num || abcLower || abcUpper || sym)) {
    alert("You must select at least one character type!");
    num = confirm("Would you like to use numbers?");
    abcLower = confirm("Would you like to use lowercase letters?");
    abcUpper = confirm("Would you like to use uppercase letters?");
    sym = confirm("Would you like to use special characters?");
    
}
  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;
  var minimumNum = "";
  var minimumAbcUpper = "";
  var minimumAbcLower = "";
  var minimumSym = "";  
}
//Working on the function after the password is generated
passwordText.addEventListener('load', (writePassword + ) {
  generatePassword();
});

function writePassword(){
  var password = "";
  var allowed = {};
  if (num) password += random(allowed.num = "012345678");
  if (abcLower) password += random(allowed.abcLower = "abcdefghijklmonpqrstuvwxyz");
  if (abcUpper) password += random(allowed.abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (sym) password += random(allowed.num = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~");
}

//Added event listener to generate button
var generateBtn = document.querySelector('button');
generateBtn.addEventListener('click' , generatePassword);

//document.addEventListener('click', generatePassword);

//Generate functions:
var functionArray = {
  num: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },
  abcUpper: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },
  abcLower: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },
  sym: function() {
    return sym[Math.floor(Math.random() * sym.length)]
  }
}

//Checks to make sure user selected ok and uses empty minimums
if (num === true) {
  minimumNum = functionArray[0];
  minimumCount++;
}
if (abcUpper === true) {
  minimumAbcUpper = functionArray[1];
  minimumCount++;
}
if (abcLower === true) {
  minimumabcLower = functionArray[2];
  minimumCount++;
}
if (sym === true) {
  minimumSym = functionArray[3];
  minimumCount++;
}

