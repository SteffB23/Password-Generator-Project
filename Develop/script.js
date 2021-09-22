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
if (!(num || abcLower || abcUpper || sym));
    alert("Refresh and try again!");

  }
  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;
  var minimumNum = "";
  var minimumAbcUpper = "";
  var minimumAbcLower = "";
  var minimumSym = "";  
}
//Added event listener to generate button
var generateBtn = document.querySelector('button');
generateBtn.addEventListener('click' , generatePassword);
//Generate functions:
var passwordText = document.getElementById('password');
document.getElementById('generate').addEventListener('click', () => {
passwordText.value = generatePassword(num, abcUpper, abcLower, sym, passwordText);
});
