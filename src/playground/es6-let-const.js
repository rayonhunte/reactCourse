let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);


//Block Scoping

let fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName);
}

console.log(firstName);

//arrow functions

const square = (x) =>{
  return x * 2;
}

// arrow function expersion single sintax

const squareTwo  = (x) => x * x;
