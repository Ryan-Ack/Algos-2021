// { OBJECTS }

var doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: true
}

for (var someKey in doggo) {
    // console.log(someKey);
    console.log(doggo[someKey]);

}


// console.log(Object.keys(doggo)) // creates an arr (iterable object) from an obj -> keys
// console.log(Object.values(doggo)) // returns an arr of all the values in the obj
// console.log(Object.entries(doggo)) // return an arr with both key-values inside an arr (2d arr)
var doggoArr = Object.entries(doggo) // return an arr with both key-values inside an arr (2d arr)
// console.log(doggoArr[2][1]);




// for (var someKey in doggo) {
//     // ...
// }



// //              0          1           2
var animals = ["lion", "Zebra", "elephant"];
// console.log(typeof animals)

// for (i=0; i<animals.length; i++) {
//     // ...
// }
// for (var elem of animals){
//     // ...
// }



// animals.length