// Write a JavaScript program to check if an array is a factor chain or not.

// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32

// Test Data :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false
const arr=[2,4,8,16,32,64];
//using loop
const isFact=(arr) =>{
for(let i=0; i<arr.length-1; i++){
    if(arr[i+1]%arr[i]!=0)
    return false;
}
return true;
}
console.log(isFact(arr));

//using reduce
const ISFACT=(arr)=>arr.reduce((acc,elm,index,arr)=>{
    if(index<arr.length-1){
        if(arr[index+1]%elm===0)
       acc.push(true); 
       else acc.push(false);
    }
    return acc;
},[]);
console.log(!ISFACT(arr).includes(false));