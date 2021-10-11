// Variables
var generateBtn = document.querySelector("generate");
var passwordText = document.querySelector('password')
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var all = abcUpper + abcLower + num +sym;

//Immediate message when page loads:
window.onload = alert("Welcome! Please click 'Generate password' to start!");
console.log("page loaded");

// Prompts that display after clicking generate password:
function generatePassword() {
  var length =prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");
  console.log("prompt loaded");
  var num = confirm("Do you want numbers in your password?");
  console.log("# confirmed");
  var abcLower = confirm("Do you want lowercases in your password?");
  console.log("abc lower confirmed");
  var abcUpper = confirm("Do you want uppercases in your password?");
  console.log("abc upper confirmed");
  var sym = confirm("Do you want special characters in your password?");
  console.log("sym confirmed");  
//If the user does not select at least one character  
if (!(num || abcLower || abcUpper || sym)) {
    alert("You must select at least one character type!");
    console.log("error in");
    num = confirm("Would you like to use numbers?");
    abcLower = confirm("Would you like to use lowercase letters?");
    abcUpper = confirm("Would you like to use uppercase letters?");
    sym = confirm("Would you like to use special characters?");

} else if (!(num || abcLower || abcUpper || sym)) {
    alert("Refresh and try again!");
  }
}

//Added event listener to generate button
var generateBtn = document.querySelector('button');
generateBtn.addEventListener('click' , generatePassword);
//Make a function that gathers all these questions into one and boom

/*// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  generatePassword.value = password;
}*/

//Generate functions:
var passwordText = document.getElementById('password');
document.getElementById('generate').addEventListener('click', () => {
passwordText.value = generatePassword(num, abcUpper, abcLower, sym);
});


//LAST STEP🔥🔥🔥🔥🔥🔥👇

var generatePassword = () => {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~"
  var passwordLength = 10;
  for (let i = 8; i <= passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
    return (password);
  }
  generatePassword.value
};
//LAST STEP 🔥🔥🔥🔥🔥🔥👆



//Add variable for pw
//Use answers to questions to generate password
//Do a RETURN of that variable for the password