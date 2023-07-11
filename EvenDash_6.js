//Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
const num=2234124
const mod=num.toString().split("")
let result="";
//using for loop
for(let i=0; i<mod.length; i++){
    if(mod[i]%2===0 && mod[i+1]%2===0){
      result+=mod[i]+""+"-";
    }
    else{
        result+=mod[i];
    }
  }
console.log(result);
//using map method
  const res=mod.map(function (num, index, array) {
    if (array[index] % 2 === 0 && array[index + 1] % 2 === 0) {
      return num + "-";
    } else {
      return num;
    }
  }) .join("");
console.log(res);