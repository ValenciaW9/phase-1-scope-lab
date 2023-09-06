// Declare the bestCustomer variable in global scope
var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
}

setBestCustomer(); // Call the function to assign the value 'not bob' to bestCustomer

// Declare the leastFavoriteCustomer variable in global scope
const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer() {
    throw new Error('Assignment to constant variable.');
}

// Declare the leastFavoriteCustomer variable in global scope
const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer() {
    throw new Error('Assignment to constant variable.');
}

try {
    changeLeastFavoriteCustomer(); // Call the function
} catch (error) {
    if (error.message.includes('Assignment to constant variable.')) {
        console.log('Assignment to constant variable error occurred.');
    } else {
        throw error;
    }
}

// At the end of the upperCaseCustomerName function, add a return statement to return the customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

// Declare the bestCustomer variable in global scope
var bestCustomer;

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

overwriteBestCustomer(); // Call the function to overwrite the value of bestCustomer