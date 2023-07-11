// Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]
const arr=[1,2,false,true,null,'',1];
const res=(arr)=> arr.reduce((acc,value)=>{
        if(value !== false && value !== null && value !== 0 && value !== ""){
            acc.push(value);
        }
        return acc;
    },[]);
console.log(res(arr));