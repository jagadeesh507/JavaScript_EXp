//using fill method
const array=(len,elm)=>Array(len).fill(elm);
console.log(array(5,"password"));
//using loop
const array2=(len,elm)=>{
    arr=[];
    for(let i=0;i<len;i++){
        arr.push(elm);
    }
    return arr;
}
console.log(array2(5,"undefined"));
