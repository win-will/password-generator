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
  var length = prompt("Enter a password length that is at least 8 characters and no more than 128 characters");
  
  //Check if user selected a password length that meets the criteria
  if ( (7 < parseInt(length)) && (parseInt(length) < 129) ) {
    var lowercase = false;
    var uppercase = false;
    var numeric = false;
    var special_chars = false;
    var types = [];
    pwdArray = [];

    if (confirm("Include lowercase in your password?") ){
      lowercase = true;
      types.push("l");
    }
    if (confirm("Include uppercase in your password?") ){
      uppercase = true;
      types.push("u");
    }
    if (confirm("Include numeric in your password?") ){
      lowercase = true;
      types.push("n");
    }
    if (confirm("Include special characters in your password?") ){
      lowercase = true;
      types.push("s");
    }
    
    //Check if user selected one or more of the different allowed character sets 
    if (lowercase || uppercase || numeric || special_chars){
      var baseArray = [];
      var randomArray = [];
      
      //build base character set based on 
      for (i=0;i<types.length;i++){
        baseArray = baseArray.concat(generategenerateCharaterset(types[i]));
      }
      console.log(baseArray)

      //Generate array with random characters 
      randomArray = generateRandom(baseArray, length);
      console.log(randomArray);
      
      //Check if criteria for character set met in the random array
      pwdArray = checkCharactertype(randomArray,types);


      password = randomArray.toString();


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

function generateCharaterset(strType){
  var arrayBase = [];

  if (strType === 'u') {
    
    for (let i =0; i < 26; i++ ){
      arrayBase.push(String.fromCharCode(65 + i));
    }

  }                                 

  if (strType === "l") {

     for (let i =0; i < 26; i++ ){
        arrayBase.push(String.fromCharCode(97 + i));
      }
  }
      
  if (strType === "n"){

    for (let i =0; i < 10; i++ ){
      arrayBase.push(String.fromCharCode(48 + i));
    
    }

  }
  if (strType === "s"){

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

  return arrayBase; 

}

function checkCharaterset(checkArray, strType){

  if (strType === 'u') {
  
    for (let i=0; i < checkArray.length; i++ ) {
      if ( 64 < arrayBase[i].charCodeAt(0) < 91) {
        console.log("Uppercase exists in password.")
        break;
      }
      
    }
  }

  if (strType === "l"){

    for (let i=0; i < checkArray.length; i++ ){
      if (96 < arrayBase[i].charCodeAt(0) < 123) {
        console.log("Lowercase exists in password.")
        break;
      }
    }
  }
  
  if (strType === "n"){

    for (let i=0; i < checkArray.length; i++ ){
      if (47 < arrayBase[i].charCodeAt(0) < 58) {
        console.log("Numeric exists in password.")
        break;
      }
    }

  }
  if (strType === "s"){

    for (let i=0; i < checkArray.length; i++ ){
      if (31 < arrayBase[i].charCodeAt(0) < 48 ||
      57 < arrayBase[i].charCodeAt(0) < 65 ||
      90 < arrayBase[i].charCodeAt(0) < 97 ||
      122 < arrayBase[i].charCodeAt(0) < 127) {
        console.log("Special character exists in password.")
        break;
      }
    
    }

  }

  return arrayBase; 
}

// function generateLowercase(){
//   var arrayLower = [];
  
//   for (let i =0; i < 26; i++ ){
//     arrayLower.push(String.fromCharCode(97 + i));
//   }
  
//   return arrayLower; 
  
// }

// function generateNum(){
//   var arrayNum = [];
  
//   for (let i =0; i < 10; i++ ){
//     arrayNum.push(String.fromCharCode(48 + i));
//   }
  
//   return arrayNum; 
  
// }

// function generateSpecial(){
//   var arraySpecial = [];
  
//   for (let i =0; i < 16; i++ ){
//     arraySpecial.push(String.fromCharCode(32 + i));
//   }
//   for (let i =0; i < 7; i++ ){
//     arraySpecial.push(String.fromCharCode(58 + i));
//   }
//   for (let i =0; i < 6; i++ ){
//     arraySpecial.push(String.fromCharCode(91 + i));
//   }
//   for (let i =0; i < 4; i++ ){
//     arraySpecial.push(String.fromCharCode(123 + i));
//   }
  
//   return arraySpecial; 
  
// }

function generateRandom(starterArray, strSize) {
  var randomIndex = 0;
  var randomArray = [];

  console.log(strSize);

  for (let i = 0; i < strSize; i++) {
    randomIndex = Math.floor(Math.random() * starterArray.length);
    randomArray = randomArray.concat(starterArray[randomIndex]);
    console.log(randomIndex);
  }
  
  return randomArray;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
