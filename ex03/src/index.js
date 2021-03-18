// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    // only change code below this line
    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets[0];
    var lastPet = myNewPets[myNewPets.length-1];
    myNewPets.shift();
    myNewPets.unshift("Lion");
    myNewPets.pop();
    return myNewPets;
    // only change code above this line
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
