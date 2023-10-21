let number1 = 30;
let number2 = 50;
let number3 = 45;

let max;

// Using nested-if

if(number1 >= number2 && number1 >= number3){
    max = number1;
}
else if (number2 >= number1 && number2 >= number3){
    max = number2;
}
else{
    max = number3;
}


console.log(`Largest Number is ${max}`);

// Using ternary operator

temp = number1>number2 ? number1 : number2;
max = number3>temp ? number3 : temp;
 

console.log(`Largest Number is ${max}`);


