const obj1 = {
    name: "Pizza",
    calories: 9001,
};

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};

obj1.__proto__ = obj2;

var keyArr = []
for (var thisKey in obj1) {
    // console.log(thisKey);
    keyArr.push(thisKey);
}
// console.log(keyArr);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));