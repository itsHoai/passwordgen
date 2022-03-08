// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
characters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "<", ">", "/", "?"];

//choices once confirm
var choices = [];

//questions when prompt
function generatePassword () {
  numberofcharacters = (prompt("How long would you like your password to be? Choose between 8 and 128 characters"))
  if (!numberofcharacters) {
    alert("invalid entry"); 
  }
  else if (numberofcharacters < 8 || numberofcharacters >128) {
    alert ("invalid entry please choose between 8 and 128");
  }
  number = (confirm("Will this contain a number?"))
  if (!number) {
    alert("invalid entry");
  }
  lowercase = (confirm("Will this contain lowercase characters?"))
  if (!lowercase) {
    alert("invalid entry");
  }
  uppercase = (confirm("Will this contain uppercase characters?"))
  if (!uppercase) {
    alert("invalid entry");
  }
  characters = (confirm("Will this contain special characters?"))
  if (!characters) {
    alert("invalid entry");
  }
  if (confirm.number) {
    choices = choices.concat(number)
  }
  if (confirm.lowercase) {
    choices = choices.concat(lowercase)
  }
  if (confirm.uppercase) {
    choices = choices.concat(uppercase)
  }
  if (confirm.characters) {
    choices = choices.concat(characters)
  }
}

//random selection
function random() {
  generatePassword();
  password = "";

  for (let i = 0; i < numberofcharacters; i++) {
    var ran = Math.floor(Math.random() * (choices.length))
    password += choices[ran];
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = random();
  var passwordText = document.querySelector("#password");

  passwordText.value = (password);

}
