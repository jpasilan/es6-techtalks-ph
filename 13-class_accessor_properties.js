class Person {
  constructor() {
    this.personAge = 0;
  }
  
  // Getter
  get age() {
    return this.personAge;
  }
 
  // Setter
  set age(age) {
    this.personAge = age;
  }
}

let person = new Person();

person.age = 30;
console.log(person.age);

