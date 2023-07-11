//Write a JavaScript program to find duplicate values in a JavaScript array.
const arr=[1,2,4,3,4,5,5,2];
//using filter method
const dublicate=(arr)=>arr.filter((val,index)=>arr.indexOf(val)!==index)
console.log(dublicate(arr));
//using loop
const result=new Array();
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]==arr[j]&& !result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
}
console.log(result);
//using set method
const unique=new Set();
const dub_arr=[];
for(let i=0; i<arr.length; i++){
    let curr=arr[i];
    if(unique.has(curr)){
        dub_arr.push(curr);
    }
    else{
        unique.add(curr);
    }
}
console.log(dub_arr);
