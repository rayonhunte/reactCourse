'use strict';

var nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

//Block Scoping

var fullName = 'Jen Mead';
var firstName = void 0;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
