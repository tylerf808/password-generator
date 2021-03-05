// Assignment Code
var generateBtn = document.querySelector("#generate");
var header = document.getElementById("#header-text");

//Function that generates the password
function generatePassword(){
  var password = ''; //String that holds the password and is returned
  var passwordLowerBound, passwordUpperBound; //Numbers chosen for length
  var lowercase, uppercase, numeric, specChar; //Booleans for options
  var chosenArray = []; //An array to hold the library of chosen characters
  
  //Arrays to hold available options
  var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
  'q','r','s','t','u','v','w','x','y','z'];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChars = ['!','\"','\\','#','$','%','&','(',')','*','+',',','-',
  '/',':',';','<','=','>','?','@','!', '[', ']','^','_','`','{','|','}','~'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];

  //Receive user input for length of the password
  passwordLowerBound = window.prompt("Please enter the shortest possible password length.");
  passwordUpperBound = window.prompt("Please enter the longest possible password length.");

  //Turn lower bound and upper bound into numbers
  var lb = parseInt(passwordLowerBound);
  var ub = parseInt(passwordUpperBound);

  //Determine length of the password 
  var passwordLength = Math.floor(Math.random() * (ub - lb) + lb);

  //Take user info to decide wether or not to use the lowercase array
  lowercase = window.confirm("Include lowercase letters?");
  if(lowercase == true)
    chosenArray = chosenArray.concat(lowerLetters);
  //Same for uppercase
  uppercase = window.confirm("Include uppercase letters?");
  if (uppercase == true)
    chosenArray = chosenArray.concat(upperLetters);
  //And for numbers
  numeric = window.confirm("Include numbers?");
  if (numeric == true)
    chosenArray = chosenArray.concat(numbers);
  //And for special characters
  specChar = window.confirm("Include special characters?");
  if (specChar == true){
    chosenArray = chosenArray.concat(specialChars);
  } else if(lowercase == false && uppercase == false && numeric == false) {
    window.alert("Error: Please choose at least one option");
  }

  //Generate the random characters
  for (var i = 0; i < passwordLength; i++){
    var ranNum = Math.floor(Math.random() * chosenArray.length);
    var tempString = chosenArray[ranNum];
    password = password.concat(tempString); 
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  //Assign password with the returned object from generatePassword
  var password = generatePassword();
  //Create variable to hold the HTML element for the password display
  var passwordText = document.querySelector("#password");
  //Change header text
  document.querySelector("#header-text").innerHTML = 'Your new password is: ';
  //Change text of box below header to display the password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);