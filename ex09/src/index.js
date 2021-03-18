function myBouncer(arr) {
    var myArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(!arr[i]) {
            continue;
        }
        myArr.push(arr[i]);
    }
    return myArr;
}

console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;