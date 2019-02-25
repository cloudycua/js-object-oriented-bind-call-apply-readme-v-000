function greet(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}, hi!`)
}

greet();
// Hi undefined and undefined, my name is , hi!

let person = {
  name: 'Bob',
  greet: greet
};

person.greet();
// Hi undefined and undefined, my name is Bob, hi!

let sally = { name: 'Sally' };

greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally, hi!

greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally, hi!

let newGreet = greet.bind(sally);

newGreet('Bob');
// Hi Bob and undefined, my name is Sally, hi!

greet('Bob');
// Hi Bob and undefined, my name is , hi!

greet.bind(sally)('Bob');
// Hi Bob and undefined, my name is Sally, hi!

class Event {
  constructor(title, keywords) {
    this.title = title;
    this.keywords = keywords;
  }
}
