const arr=new Array(1,2,3,4,5,6);
const b=arr=>arr.reduce((acc,val)=>acc+val,0);
const c=arr=>arr.reduce((acc,val)=>acc*val,1);
console.log("sum : "+b(arr)+" "+"product :"+c(arr));