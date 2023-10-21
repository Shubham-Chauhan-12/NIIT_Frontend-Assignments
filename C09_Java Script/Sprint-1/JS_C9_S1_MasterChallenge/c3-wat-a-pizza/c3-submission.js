//Declaring variables 

var customerName = 'Gray';
var customerEmail = 'gary@123.com';
var phoneNo = 14123123435;
var address = '20, Marble Drive, Eville';
var noOfPizzasOrdered =10;
var pizzaPrice= 12.5;
var pizzaSize= 'M';
var noOfGarlicBreadOrdered=5;
var garlicBreadPrice=5.99;
var noOfBeveragesOrdered =10;
var beveragePrice=1.99;

// define function displayCustomerDetails() to display the details of customer passed as parameters.
 
function displayCustomerDetails(name, email, phoneNo, address){

    console.log("Customer Details"); 
    console.log("----------------");
    console.log("Name of the cutomer is       : " +name); 
    console.log("Email of the customer is     : " +email);
    console.log("Contact No of the customer is: "+phoneNo);
    console.log("Address of the customer is   : "+address);
    console.log("-------------------------------------------------------");

}

// define funciton displayMenu() to raise an alert that displays the menu with 
// category, item names and price
 
function displayMenu(){

    console.log("  Select the items to order");
    console.log("-------------------------");
    console.log("1) Pizza\n"+
    "Price of one regular pizza: $9.99\n"+
    "Price of one medium pizza: $11.99\n" +
    "Price of one large pizza: $9.99" );
    
    console.log("2) Garlic Bread\n"+
    "Price of one Garlic Bread: $5.99");

    console.log(" 3) Beverages\n"+
    "Price of one Beverage: $1.99");
       
    
}

// define function getPriceOfPizzaBasedOnSize() to return price of pizza for the 
// size passed as parameter.

function getPriceOfPizzaBasedOnSize(size){
    let priceOfPizza ;
    switch(size){
        case 1:
            priceOfPizza = 9.99;
            break
        case 2:
            priceOfPizza = 11.99;
            break ;
        case 3:
            priceOfPizza = 13.99;
            break ;
        default :
            alert('Invalid size, Enter 1,2 or 3');
            priceOfPizza = 0 ;
            break;    
        
    }
    return priceOfPizza;
}


// define function getPriceOfGarlicBread() to return price of garlic bread as 5.99.
function getPriceOfGarlicBread(){

    return garlicBreadPrice;
}

// define function getPriceOfBeverage() to return price of beverage as 1.99.
function getPriceOfBeverage(){

    return beveragePrice;
}

// define function calculatePrice() to return cost of items ordered for the 
// no of items and price passed as parameters.

function calculatePrice(noOfItems, price)
{
   return noOfItems*price;
}

 let pizzPrice = calculatePrice(noOfPizzasOrdered,getPriceOfPizzaBasedOnSize(1));
 let breadPrice = calculatePrice(noOfGarlicBreadOrdered,garlicBreadPrice);
 let beverage = calculatePrice(noOfBeveragesOrdered,beveragePrice)

// define function calculateTotalBill() to return total bill amount from the 
// total price of pizza, garlic bread and beverages ordered 

function calculateTotalBill(totalPizzaPrice, totalGarlicBreadPrice, totalBeveragePrice)
{
    let totalBill = pizzPrice + breadPrice + beverage;
    return totalBill;
}


// define function calculateDiscountAndReturnBillAmount() to return discounted amount 
// which will be calculated only if total bill is more than 50 

function calculateDiscountAndReturnBillAmount(totalBillAmount){

    if(totalBillAmount>50){
        let totalBillAmountAfterDiscount = totalBillAmount - (totalBillAmount*10)/100;
        return totalBillAmountAfterDiscount;
    }
    else return totalBillAmount;

}
calculateTotalBill(9.99,5.99,1.99);
 
// define function displayOrderDetails() to print the order details

function displayOrderDetails(noOfPizza, noOfGarlicBread, noOfBeverages, size,totalPrice, totalBillAmountAfterDiscount){

    console.log("Order Details");
    console.log("-----------------");
    console.log("The number of pizzas ordered  : "+ noOfPizza);
    console.log("The number of garlic bread ordered : " + noOfGarlicBread);
    console.log("The number of beverages ordered    : "+ noOfBeverages);
    console.log("-----------------------------------------");
    console.log("The total bill amount is : "+totalPrice);
    console.log("The discounted bill amount is : "+totalBillAmountAfterDiscount);
}

//Main Program

// call the functions to compute order amount and display order details

// displayOrderDetails(noOfPizzasOrdered,noOfGarlicBreadOrdered,noOfBeveragesOrdered,totalBillAmount,totalBillAmountAfterDiscount);

console.log(displayCustomerDetails(customerName,customerEmail,phoneNo,address));

displayOrderDetails(10,5,10,2,149.75,134.775);