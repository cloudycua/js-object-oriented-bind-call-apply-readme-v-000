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

greet.apply(sally, ['Terry', 'George']);

let newGreet = greet.bind(sally);

newGreet('Bob');

greet('Bob');

greet.bind(sally)('Bob');
