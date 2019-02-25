function greet(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}, hi!`)
}

greet();

let person = {
  name: 'Bob',
  greet: greet
};

person.greet();

let sally = { name: 'Sally' };

greet.call(sally, 'Terry', 'George');

greet.apply(sally, ['Terry', 'George']);

let newGreet = greet.bind(sally);

newGreet('Bob');

