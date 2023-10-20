let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName

if(firstName!==null && typeof(firstName)=="string"){
    console.log("Validation Criteria Matched");
 }
 else{
    console.log("First Name value must not be undefined \n"+"First Name value must be of type String");
 }

// Provide solution code here for Validating LastName

if(typeof(lastName)=="string"){
   console.log("Validation Criteria Matched");
}
else{
   console.log("Last Name value must be of type String value");
}

// Provide solution code here for Validating Age

if(age!==null && age>18 && age<60 && typeof(age)=="number"){
   console.log("Validation Criteria Matched");
 }
 else{
   console.log("Age value must not be undefined \n"+"Age value must be of type Number\n"+"Age value should be between 18 and 60");
}

// Provide solution code here for Validating isMarried

if(typeof(isMarried) == "boolean"){
   console.log("Validation Criteria Matched");
}
else{
   console.log("IsMarried value must be of type Boolean");
}


// Provide solution code here for Validating City

if(typeof(city) == "string"){
   console.log("Validation Criteria Matched");
}
else{
   console.log("City value must be of type String");
}

// Provide solution code here for Validating State

if(typeof(state) == "string"){
   console.log("Validation Criteria Matched");
}
else{
   console.log("State value must be of type String");
}
 
// Provide solution code here for Validating Postal Code

if(postalCode!==null && typeof(postalCode)=="string"){
   console.log("Validation Criteria Matched");
}
else{
   console.log("Postal Code value must not be undefined  \n"+"Postal Code value must be of type String");
}
 