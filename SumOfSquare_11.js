//Write a JavaScript program to compute the sum and product of an array of integers.
const a=new Array(0,1,2,3,4);
let b=a=>a.reduce((acc,init)=>acc+init*init,
0);
console.log(b(a));