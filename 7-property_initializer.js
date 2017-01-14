let name = "John Doe";
let age  = 25;

// Full property initializer syntax.
let person1 = {
  name: name,
  age: age
};

// Property initializer shorthand.
let person2 = {
  name,
  age
};

console.log(person1);
console.log(person2);
