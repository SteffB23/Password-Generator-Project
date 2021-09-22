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
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");

  var num = confirm("Do you want numbers in your password?");

  var abcLower = confirm("Do you want lowercases in your password?");

  var abcUpper = confirm("Do you want uppercases in your password?");

  var sym = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;
}


//Added event listener to generate button
var generateBtn = document.getElementById('generateBtn');
document.addEventListener('click', generatePassword);



//window.addEventListener('load', function() {
//generateNewPassword();
  //var password = "";
//  }
//});
//document.getElementById("generateBtn").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "Hello World";
//});*/


