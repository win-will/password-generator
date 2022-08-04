// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Password will be outputted to screen here
  passwordText.value = password;

}

function generatePassword() {
  var password = "";
  var mandatoryChars = [];
  var types = [];
  var length = prompt("Enter a password length that is at least 8 characters and no more than 128 characters");

  //Check if user selected a password length that meets the criteria
  if ( (7 < parseInt(length)) && (parseInt(length) < 129) ) {   
   
    //Prompt user for character types that should be used
    if (confirm("Include lowercase in your password, i.e. a, b, or c?") ){
      types.push("l");
      mandatoryChars.push(generateRandom(generateCharaterset("l"),1)[0]);
    }
    if (confirm("Include uppercase in your password, i.e A, B, or C?") ){
      types.push("u");
      mandatoryChars.push(generateRandom(generateCharaterset("u"),1)[0]);
    }
    if (confirm("Include numbers in your password, i.e 1, 2, or 3?") ){
      types.push("n");
      mandatoryChars.push(generateRandom(generateCharaterset("n"),1)[0]);
    }
    if (confirm("Include special characters in your password, i.e &, *, or %?") ){
      types.push("s");
      mandatoryChars.push(generateRandom(generateCharaterset("s"),1)[0]);
    }
  
    // console.log("Mandatory Chars")
    // console.log(mandatoryChars)

    //Check if user selected one or more of the different allowed character sets 
    if (types.length > 0){ 
      var baseArray = [];
      var randomArray = [];
      
      //build base character set based on 
      for (i=0;i<types.length;i++){
        baseArray = baseArray.concat(generateCharaterset(types[i]));
      }
      // console.log("Base Array")
      // console.log(baseArray)

      //Generate array with random characters 
      randomArray = generateRandom(baseArray, (length - mandatoryChars.length));
      // console.log("Random Array")
      // console.log(randomArray);
      
      //Create string that will be presented to user
      password = insertMandatoryChars(randomArray,mandatoryChars);
      
    }

    else {
      // Print an error in the text box for the if none of the character types is selected
      password = "Error: You did not select at least one of the available character sets. Please try again."
    
    }  

  }

  else {
    // Print an error in the text box if the pwd length requirements aren't met
    password = "Error: Password length doesn't meet the criteria. Please try again."
  
  }

  return password;
}

//Generate character sets from ascii table based on the options selected by user
function generateCharaterset(strType){
  var arrayBase = [];

  //Add uppercase characters to the base array
  if (strType === 'u') {
    
    for (let i =0; i < 26; i++ ){
      arrayBase.push(String.fromCharCode(65 + i));
    }

  }    
  //Add lowercase characters to the base array                             
  else if (strType === "l") {

     for (let i =0; i < 26; i++ ){
        arrayBase.push(String.fromCharCode(97 + i));
      }
  }
  //Add numeric characters to the base array 
  else if (strType === "n"){

    for (let i =0; i < 10; i++ ){
      arrayBase.push(String.fromCharCode(48 + i));
    
    }

  }
  //Add special characters to the base array 
  else if (strType === "s"){

      for (let i =0; i < 16; i++ ){
        arrayBase.push(String.fromCharCode(32 + i));
      }

      for (let i=0; i < 7; i++ ){
        arrayBase.push(String.fromCharCode(58 + i));
      }

      for (let i=0; i < 6; i++ ){
          arrayBase.push(String.fromCharCode(91 + i));
      }

      for (let i=0; i < 4; i++ ){
        arrayBase.push(String.fromCharCode(123 + i));
      }

    }
  //If none of those were provided then there is some type of issue in the code
  else { 
    console.log("Invalid Character provided.")

  }

  return arrayBase; 
}

//Generated a random array using a starter array and it's size
function generateRandom(starterArray, strSize) {
  var randomIndex = 0;
  var randomArray = [];

  // console.log(strSize);

  //Take an array of characters then randomly concantenate them into another array
  for (let i = 0; i < strSize; i++) {
    randomIndex = Math.floor(Math.random() * starterArray.length);
    randomArray = randomArray.concat(starterArray[randomIndex]);
    // console.log(randomIndex);
  }
  
  return randomArray;
}

// Take two arrays and merge them in a random way, return a string 
function insertMandatoryChars(randomArray, manChars){
  var index = 0;
  var pwd = ""

  //Put the require characters in a random place in the array that is provided
  //Using a random index number, breaking the array into two parts then re-joining it
  for(i=0;i<manChars.length;i++){
    index = Math.floor(Math.random() * randomArray.length);
    randomArray.splice(index, 0, manChars[i]);
    console.log(randomArray);
    randomArray.join();
    // console.log("Insert Mandatory Chars: " + i);
    // console.log(randomArray);

  }

  //Take array and convert it into a string
  for(i=0;i <randomArray.length;i++) {
    pwd = pwd + randomArray[i];
  }

  return pwd;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
