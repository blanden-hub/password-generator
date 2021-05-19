// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// listed all posible pasword inputs

function generatePassword(){
  let capLetters = "ABCDEFGHIJKLMNPQRSTYVWXYZ";
  let lowLetters = "abcdefghijklmnopqrstuvwxyz";
  let specials = "!@#$%^&*()_+-=><";
  let numbers = "1234567890"

//Used split method to split all the strings into substrings
//used empty string as the separator to split bewteen each character

  let cap = capLetters.split("");
  let low = lowLetters.split("");
  let spe = specials.split("")
  let num = numbers.split("")

  let characters = [];
  let password = "";
  let pwchars = prompt("how many charaters do you want? min 8, max 128");
  if (pwchars < 8 | pwchars > 128){
    alert("password must be at least 8 charters and less than 128 charters! refresh your browser and try again!");
    return
  };
// Not a Number so if they type something thats not a number it will give an alert
  if(isNaN(pwchars) === true){
    alert("please use a valid number! refresh your browser and try again!")
    return
  };

  let lower = confirm("Do you want your password to have lower case letters?");
  let capital = confirm("Do you want your password to have upper case letters?");
  let numbs = confirm("Do you want your password to have numbers?");
  let specs = confirm("Do you want your password to have special characters?");
// statements in order to see what characters to add to random password
  if(lower == true){
    characters = characters.concat(low);
  }
  if(capital == true){
    characters = characters.concat(cap);
  }
  if(numbs == true){
    characters = characters.concat(num);
  }
  if(specs == true){
    characters = characters.concat(spe);
  }
  if(characters.length == 0) {
    alert("must choose character types");
  }
    else {
      for (let i = 0;i < pwchars; i++){
        let generatePassword = Math.floor(Math.random() * characters.length);
        password = password + characters[generatePassword];
      }
    }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
