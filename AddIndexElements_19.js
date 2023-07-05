//using map method
const arr1=[1,2,3,4,5];
const arr2=[1,2,3,4,5];
const arr3=(arr1,arr2)=>arr1.map((value,index)=>value+arr2[index]);
console.log(arr3(arr1,arr2));
//using reduce method
const arr4=(arr1,arr2)=>arr1.reduce((res,value,index)=>{
res.push(value+arr2[index])
       return res;
    },[]);
console.log(arr4(arr1,arr2));

  