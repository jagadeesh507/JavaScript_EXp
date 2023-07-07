const arr=[1,2,3,4,5,1,2,3,4,5];
const res=[...new Set([...arr])];
console.log(res);
console.log(Array.isArray(res));