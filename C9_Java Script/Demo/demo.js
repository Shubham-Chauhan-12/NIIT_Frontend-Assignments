let array = ["apple", "bananna"];

//push() unshift()

array.push("Grapes", "pears")
array.unshift("1st unshift");

// console.log(array);

// pop() shift()

array.pop();
array.shift();

// console.log(array);

//index of(), lastIndex of()


let search = ["shubham", "3", 5, "hello", true, "2", "2"];

// let temp = search.indexOf("2");
// console.log(temp);
// console.log(search.lastIndexOf("3"));


let numberArray = [989855, 3456456456456456456, 7, 2, 5, 1];
// let newarray = numberArray.sort();
// console.log(numberArray.reverse());
// console.log(newarray);


// slice() 

let copyArray = search.slice(1, 3)   // only 2 elements will print 
// console.log(search);
// console.log(copyArray);

//splice()

// let forSplice = ["Ab","bc","cd","de","ef"];


// forSplice.splice(0,1,);
// console.log(forSplice);

let forSplice = ["Ab", "bc", "cd", "de", "ef"];
let forSplice1 = ["Ab", "bc", "cd", "de", "ef"];


// const[...xx]=forSplice1
// const[...y]=forSplice

let v = [...forSplice, ...forSplice1]
console.log(v);


// functions

// named function 

function square(number) {

    return number * number
}

square(4)

// Anonymous function

let ab = function (number) {
    return number * number
}

ab(5)

// arrow function

 let bc = (number,number2) => {
   return number+number2
 }

 bc(6,6)


// filter()
 let age = [10,20,15,7,19];
 let ageFilter = age.filter(x => x>=18);
//  console.log(ageFilter);

// map()
let abc = [2,3,5,7,9];
let arrayNew = abc.map(x=>x*2);

// reduce

let a = [2,3,5,7,9];
let  initial =0;
let sum = a.reduce((initial,array)=>{
                           initial = initial*array;
                           return initial; 
})
console.log(sum);

