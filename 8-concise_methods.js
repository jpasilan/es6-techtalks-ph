// ES5-way of adding method to an object.
let p1 = {
  sayName: function () {
    console.log('Hello there!');
  }
};
p1.sayName();

// Adding a concise method.
let p2 = {
  sayName() {
    console.log('Hello there!');
  }
};
p2.sayName();

