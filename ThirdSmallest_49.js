//Write a JavaScript program that takes an array of numbers and returns the third smallest number.
//using at method
const array=[1,99,108,2,3,45,6,8,123];
sortfun=(a,b)=>a<b?-1:1;
array.sort(sortfun);
console.log(array.at(2));
