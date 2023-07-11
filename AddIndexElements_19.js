// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample array:
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output:
// [4, 5, 8, 10, 12, 13]
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

  