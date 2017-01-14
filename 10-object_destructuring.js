let person = {
  first: "John",
  last: "Doe",
  age: 25
};

// Object destructuring with default values.
let { first, last, gender = "male" } = person;
console.log(first, last, gender);

// Object destructuring with different local variables.
let { first: firstName, last: lastName } = person;
console.log(firstName, lastName);
