//Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array
const array=['a', 'b', 'c', 'd', 'e'];
const res=(n=3)=> n<array.length && Array.length>0?array.slice(-n):[];
console.log(res(3));