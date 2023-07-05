//using Array.isArray() method
const arr1=[1,2,3,4];
const arr2="ContentQL";
const arr3={name:"HELLO",age:10};
const arr4=[{name:"Kiran",age:10},{name:"sai",age:10}];
const is_array = (input) => Array.isArray(input);
console.log(is_array(arr4));
