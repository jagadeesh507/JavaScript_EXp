// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
const arr=[NaN, 0, 15, false, -22, '',undefined, 47, null];
const result=arr=>{
    return arr.reduce((acc,val)=>{
        if(val){
            acc.push(val);
        }
        return acc;
    },[]);
}
console.log(result(arr));