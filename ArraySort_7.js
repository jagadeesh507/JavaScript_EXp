const  arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
myfun=(a,b)=>a<b?-1:1;
console.log(arr1.sort(myfun));