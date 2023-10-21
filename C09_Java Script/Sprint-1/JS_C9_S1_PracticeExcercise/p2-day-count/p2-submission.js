let year = 2000;
let month = 2;
let days;

//Write your switch case logic here to compute days in month
switch (month) {
    // Cases for 31 Days
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;

    // Cases for 30 Days
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break; 
        
     // Case for 28/29 Days
    case 2:
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0 )) {
            console.log(year + ' is a leap year');
            days = 29;
        } else {
            console.log(year + ' is not a leap year');
            days = 28;
        }
        break;    
}

console.log(`No. of days ${days}`);