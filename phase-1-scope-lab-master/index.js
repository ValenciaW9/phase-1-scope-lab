// Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a function that changes the value of the bestCustomer variable to 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value
const leastFavoriteCustomer = 'someone';

// Write a function that attempts to change the value of the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error because you cannot change the value of a constant
}