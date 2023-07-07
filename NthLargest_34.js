//using sort
const unSort=[ 43, 56, 23, 89, 88, 90, 99, 652];
const fun=(unSort,Nth)=>unSort.sort((a,b) =>a<b?-1:1).at(Nth);
console.log(fun(unSort,4));

//without sorting

