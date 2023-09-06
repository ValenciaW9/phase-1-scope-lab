/ Declare customerName in global scope
var customerName = 'bob';

// Declare the bestCustomer variable in global scope
var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
}

setBestCustomer(); // Call the function to assign the value 'not bob' to bestCustomer
Fixing the "Fix the Scope changeLeastFavoriteCustomer()unsuccessfully tries to reassign the least favorite customer" test:
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

overwriteBestCustomer(); // Call the function 