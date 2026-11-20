const customerId = 12345;
let customerName = "John Doe";
var customerEmail = "helloo@gmail.com";
customerCity = "New York";
let customerState;
// customerId cannot be reassigned because it is declared with const
console.table({ customerId, customerName, customerEmail, customerCity, customerState });
// prefer not to use var because it has function scope and can lead to unexpected behavior. Use let or const instead for block scope.