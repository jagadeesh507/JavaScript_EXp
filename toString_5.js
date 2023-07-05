const array=new Array("a", "b", "c", "d", "e");
//using toString method
console.log(array.toString());
//using join method
console.log(array.join(","));
// using spread operator
console.log([...array].join("+"));
// using reduce method
const cs=array.reduce(function(a,b){return a+","+b;});
console.log(cs);
