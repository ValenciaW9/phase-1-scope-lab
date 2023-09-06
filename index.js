// Write your solution in this file!
// function upperCaseCustomerName() { customerName = customerName.toUpperCase(0; } )
// Declare the bestCustomer variable in global scope
//Weite a function called overWriteBestCustomer that changes the value of the  bestCustomer variable to  'maybe bob'.
// Assuming bestCustomer is already declared in global scope
//Declare a const in global scope called least FavoriteCustomer and assign it some intial value, Then, write a function called changeLeast FavoriteCustomer that attempts to  change the value of the leastFavoriteCustomer constant.
 //upperCaseCustomerName(greet Customer); In this example , 
 //we added a new function called greetCustomeer which logs a new greeting messsage with the customer's name . //We then modified the upperCaseCustomerName function to accept a callback function as a argument.
 //When upperCaseCustomerName is called,it converts the customerName to uppercase and then invokes the callback function passed as an argument , in this case, greetCustomer.
//it will first convert the customerName to uppercase and then log the greeting message with the updated name.

var customerName = 'bob';

function upperCaseCustomerName(callback) {
    customerName = customerName.toUpperCase();
    callback();
}

function greetCustomer() {
    console.log('Hello ' + customerName + '!');
}

upperCaseCustomerName(greetCustomer); // Call the upperCaseCustomerName function passing greetCustomer as a callback

// In the beginning of your code, declare customerName in global scope
var customerName = 'bob';

// Declare the bestCustomer variable in global scope
var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
}

setBestCustomer(); // Call the function to assign the value 'not bob' to bestCustomer

// Before the changeLeastFavoriteCustomer function, declare leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer() {
    console.log('Cannot change the value of leastFavoriteCustomer');
}

changeLeastFavoriteCustomer(); // Call the function (optional)

// At the end of the upperCaseCustomerName function, add a return statement to return the customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

// Before the overwriteBestCustomer function, declare bestCustomer in global scope
var bestCustomer;

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

overwriteBestCustomer(); // Call the function to overwrite the value of bestCustomer
