//Write a simple JavaScript program to join all elements of the following array into a string.
const array=["Red", "Green", "White", "Black"];
//using toString method
console.log(array.toString());
//using join method
console.log(array.join(","));
// using spread operator
console.log([...array].join("+"));
// using reduce method
const cs=array.reduce(function(a,b){return a+","+b;});
console.log(cs);
