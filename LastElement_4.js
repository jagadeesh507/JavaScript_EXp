
const array=['a', 'b', 'c', 'd', 'e'];
const res=(n=3)=> n<array.length && Array.length>0?array.slice(-n):[];
console.log(res(3));