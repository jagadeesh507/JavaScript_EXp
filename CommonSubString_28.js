const arr=['gooo','googg'];
const sorted=[...arr].sort();
let first=sorted[0];
let last=sorted[sorted.length-1];
let i=0;
let str="";
while(i<first.length&&first.charAt(i)==last.charAt(i)){
  str+=first.charAt(i);
  i++;
}
console.log(str);