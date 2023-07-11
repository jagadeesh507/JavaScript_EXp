//Write a JavaScript program to compute the union of two arrays.
let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
const arr3=[...new Set([...arr1,...arr2])];
console.log(arr3);