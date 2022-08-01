// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = "";
  var mandatoryChars = [];
  var length = prompt("Enter a password length that is at least 8 characters and no more than 128 characters");
  
  //Check if user selected a password length that meets the criteria
  if ( (7 < parseInt(length)) && (parseInt(length) < 129) ) {
    // var lowercase = false;
    // var uppercase = false;
    // var numeric = false;
    // var special_chars = false;
    var types = [];
    pwdArray = [];

    if (confirm("Include lowercase in your password?") ){
      // lowercase = true;
      types.push("l");
      mandatoryChars.push(generateRandom(generateCharaterset("l"),1)[0]);
    }
    if (confirm("Include uppercase in your password?") ){
      // uppercase = true;
      types.push("u");
      mandatoryChars.push(generateRandom(generateCharaterset("u"),1)[0]);
    }
    if (confirm("Include numeric in your password?") ){
      // lowercase = true;
      types.push("n");
      mandatoryChars.push(generateRandom(generateCharaterset("n"),1)[0]);
    }
    if (confirm("Include special characters in your password?") ){
      // lowercase = true;
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
      // alert("You selected none of the available character choices.");
      password = "Error: You did not select at least one of the available character sets. Please try again."

    }

  }

  else {
    // alert("Password length doesn't meet the criteria.");
    password = "Error: Password length doesn't meet the criteria. Please try again."
  }

  return password;
}

//Generate character sets from ascii table based on the options selected by user
function generateCharaterset(strType){
  var arrayBase = [];

  if (strType === 'u') {
    
    for (let i =0; i < 26; i++ ){
      arrayBase.push(String.fromCharCode(65 + i));
    }

  }                                 
  else if (strType === "l") {

     for (let i =0; i < 26; i++ ){
        arrayBase.push(String.fromCharCode(97 + i));
      }
  }
  else if (strType === "n"){

    for (let i =0; i < 10; i++ ){
      arrayBase.push(String.fromCharCode(48 + i));
    
    }

  }
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

  for (let i = 0; i < strSize; i++) {
    randomIndex = Math.floor(Math.random() * starterArray.length);
    randomArray = randomArray.concat(starterArray[randomIndex]);
    // console.log(randomIndex);
  }
  
  return randomArray;
  
}

function insertMandatoryChars(randomArray, manChars){
  var index = 0;
  var pwd = ""

  for(i=0;i<manChars.length;i++){
    index = Math.floor(Math.random() * randomArray.length);
    randomArray.splice(index, 0, manChars[i]);
    randomArray.join();
    // console.log("Insert Mandatory Chars: " + i);
    // console.log(randomArray);

  }

  for(i=0;i <randomArray.length;i++) {
    pwd = pwd + randomArray[i];
  }

  return pwd;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
