let menu = [
    {
        'category': 'Beverages',
        'name': 'Coke',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Coke',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};

//Write function to filter menu items by Category and sort them alphabetically

function filterbyCategory(menu,category){
    return menu.filter(items => items.category===category);
}

console.log(filterbyCategory(menu,'Starters'));
console.log(filterbyCategory(menu,'Beverages'));
console.log(filterbyCategory(menu,'Main Meal'));


//Write function to calculate the amount of each ordered item

function calculateAmount(menu,order){

    let wishlist = order.items;
    return wishlist.map( orderlist => {
        let menuItem = menu.find( food => food.name===orderlist.name);
        return{
            // ...wishlist,
            category:menuItem.category,
            amount2:orderlist.price*orderlist.quantity
        }
    })
}

console.log(calculateAmount(menu,order));

//Write function to calculate the subtotal amount for the main meal ordered

function calculateTotalamount(order,category){
    let mealfilter = menu.filter(fil => fil.category===category);
    let orderItem = order.items;
    return mealfilter.reduce((acc,currentvalue)=>{
        let total = orderItem.find(search => search.name===currentvalue.name)
        if(total){
            acc = acc + total.price; 
        }
        return acc;
    },0)
}

let mainMealSubTotal = calculateTotalamount(order,'Main Meal');
console.log('SubTotal = '+mainMealSubTotal);
let mainMealSubTotal2 = calculateTotalamount(order,'Beverages');
console.log('SubTotal = '+mainMealSubTotal2);
let mainMealSubTotal3 = calculateTotalamount(order,'Starters');
console.log('SubTotal = '+mainMealSubTotal3);

//Write function to find the totalAmount of the order based on the calculated mainMealAmount value

let TotalAmount = mainMealSubTotal + mainMealSubTotal2 + mainMealSubTotal3;
console.log('Total Amount = '+TotalAmount);

//Write function to calculate the final amount after discount

function calculatedFinalAmount(totalAmount, discount){
    if(totalAmount >= 50){
        return totalAmount*discount;
    }

    else return totalAmount;
}

console.log(calculatedFinalAmount(TotalAmount,0.95));

//Write function to display the total amount 

//Write function to display the final amount

//Invoke  functions 


