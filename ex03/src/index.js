// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    // only change code below this line
    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets.shift();
    var lastPet = myNewPets.pop();
    myNewPets.unshift("Lion");
    return myNewPets;
    // only change code above this line
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
