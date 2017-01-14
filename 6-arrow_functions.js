// Basic syntax which does nothing.
let func1 = () => {};
console.log(func1());

// No need to enclose single parameters in parens. Implicit return.
let func2 = value => value;
console.log(func2(5));

// Multiple params in parens. Implicit return.
let func3 = (num1, num2) => num1 + num2;
console.log(func3(8, 3));


