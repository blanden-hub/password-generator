# Password Generator

## Introduction

>  In week 3's Challenge i was asked to make a password generator with the acceptance criteria of GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Code Samples

> I did this by listing all vars then using split method to break apart each character in the string the used math.random to generate a random string of characters.

 var cap = capLetters.split("");
  var low = lowLetters.split("");
  var spe = specials.split("")
  var num = numbers.split("")

for (let i = 0;i < pwchars; i++){
        let generatePassword = Math.floor(Math.random() * characters.length);
        password = password + characters[generatePassword];



## Installation

>  The Password Generator can be viewed at https://blanden-hub.github.io/password-generator/