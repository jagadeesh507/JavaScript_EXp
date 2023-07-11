//Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number
const arr=[30,10,45,32,21,67,87];
const unique =(arr,key)=>{
    const sum=[];
    for(let i=0;i<arr.length;i++){
       for(let j=0;j<arr.length;j++){
        if(arr[i]+arr[j]==key)
        sum.push(arr[i],arr[j]);
       }
    }
   return sum;
}
const k=new Set(unique(arr,55));
console.log(...k);