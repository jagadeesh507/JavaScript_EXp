// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
const swap_test = "The Quick Brown Fox".split("");
const swap_case = (input) =>
  input.map((ele) =>
      ele.toLowerCase() === ele ? ele.toUpperCase() : ele.toLowerCase()
    ).join("");
console.log(swap_case(swap_test));
//using loop
let res="";
for(let i=0;i<swap_test.length;i++){
    if(swap_test[i]==swap_test[i].toLowerCase())
      res+=swap_test[i];
      else
      res+=swap_test[i].toUpperCase();
}
console.log(res);