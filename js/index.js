function greet(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}, hi!`)
}

greet();

person.greet();

let sally = { name: 'Sally' };

greet.call(sally);

greet.apply(sally);
