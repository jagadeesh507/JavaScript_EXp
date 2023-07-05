let arr=new Array(7,33,4,23,2,55,7,-3);
myfun=(a,b)=>a<b?-1:1;
arr.sort(myfun);
console.log(arr);