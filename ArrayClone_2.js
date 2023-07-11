// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]
const array1=[1,23,45,67,23];
//using slice method
console.log(array1.slice(0));
//using from method
console.log(Array.from(array1));
