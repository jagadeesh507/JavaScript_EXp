//Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
const arr=[1, [2], [3, [[4]]],[5,6]];
//using reduce
const flatten=(arr,s=false)=>{
    if(s) return arr.reduce((res,elm)=>res.concat(Array.isArray(elm)?elm:[elm]),[]);
    else return arr.reduce((res,elm)=>res.concat(Array.isArray(elm)?flatten(elm):elm),[]);
}
console.log(flatten(arr));
//using flat
const flat=(arr,remove)=>remove?arr.flat(1):arr.flat(Number.MAX_SAFE_INTEGER);
console.log(flat(arr,true));

