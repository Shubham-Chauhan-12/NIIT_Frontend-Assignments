// Write your fibonacci series solution code here
let a = 0;
let b = 1;

const n = 10;
let i;
let sum;

for( i = 1 ; i <= n ; i++ ){

    console.log(a);
    sum = a + b;
    a = b;
    b = sum;
}
