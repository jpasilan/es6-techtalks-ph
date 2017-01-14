// Multiline string.
let message1 = `Hello
 World`;
console.log(message1);

// Simple string substitution.
let name = "John";
let message2 = `Hello ${name}`;
console.log(message2);

// String substitution with an expression.
let count = 10;
let price = 0.25;
let message3 = `${count} items cost $${(count * price).toFixed(2)}`;
console.log(message3);
