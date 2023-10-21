// Object creation and Access

const obj = {

    firstName:"Shubham",
    lastName:"Chauhan",
    digit1:10,
    digit2:5,
}

console.log(obj.firstName +" " + obj.lastName);
console.log(obj.digit1+obj.digit2);

// Array and its access

let array = [10,15,"shubham",false,5.6,"q"];

console.log("size of this array is : "+ array.length); 

console.log("for some specific index:"+array[3]);


// Array with For loop

let number = [1,8,5,7,9,14,6,1];

let sum = 0;
for(const even of number){
    if(even%2==0){
        sum+=even
    }
}

console.log("Sum of all even number in array :" + sum);