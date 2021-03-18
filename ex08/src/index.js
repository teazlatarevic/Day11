// Only change code below this line
function myMutation(arr) {
  var i = 0;
  var flag = false;
  while(i < arr[1].length) {
    if (arr[0].toUpperCase().includes(arr[1][i].toUpperCase())) {
      flag = true;
    } else {
       return false;
    }
    i++;

  }
  return flag;
}
// Only change code above this line
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
module.exports = myMutation;
