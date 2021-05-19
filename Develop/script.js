// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  let capLetters "ABCDEFGHIJKLMNPQRSTYVWXYZ";
  let lowLetters "abcdefghijklmnopqrstuvwxyz";
  let specials "!@#$%^&*()_+-=><";
  let numbers "1234567890"

  let cap = capLetters.split("");
  let low = lowLetters.split("");
  let spe = specials.split("")
  let num = numbers.split("")
  let characters = [];
  let password = "";
  let pwchars = prompt("how many charaters do you want? min 8, max 128")
  if (pwchars < 8 | pwchars > 128){
    alert("password must be at least 8 charters and less than 128 charters! refresh your browser and try again!")
    return
  };
// Not a Number
  if(isNaN(pwchars) === true){
    alert("please use a valid number! refresh your browser and try again!")
    return
  };

  let lower = confirm("Do you want your password to have lower case letters?");
  let capital = confirm("Do you want your password to have upper case letters?");
  let numbs = confirm("Do you want your password to have numbers?");
  let specs = confirm("Do you want your password to have special characters?");

  if(lower === true){
    characters = characters.concat(low);
  }
  if(capital === true){
    characters = characters.concat(cap);
  }
  if(numbs === true){
    characters = characters.concat(num);
  }
  if(specs === true){
    characters = characters.concat(spe);
  }
  if(characters.length === 0);{
    alert("must choose character types")
  }
  











}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
