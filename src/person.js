console.log("running person");


const isAdult = (age)=>{
  if (age >= 18){
    return "this is an adult"
  }
}

const canDrink = (age)=> {
  if(age >= 18){
   return "this person can drink in Guyana"
  }
}

//in line arrow function 
const isSenior = (age)=> age >= 65 && 'this is a old person'

export {isAdult, canDrink, isSenior as default}