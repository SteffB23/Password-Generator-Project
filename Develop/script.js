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
//Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
//document.getElementById("generateBtn").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "Hello World";
//});*/


