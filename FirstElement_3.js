/*const element = (Array,len) => {
    if(Array.length==0){
        return "Array is empty";
    }
    if(len==null){
        return Array[0];
    }
    if(len<0){
        return "number should grater than zero"
    }
    return Array.slice(0,len)
} */

//console.log(element([1,2,3,4,5,6,7],4));
//console.log(element([1,2,3,4,5,6,7],-3));
//console.log(element([1,2,3,4,5,6,7]));
//console.log(element([],3));

//using Conditional (ternary) operator
const res=(Array,len)=>{
    return ((len>0 && Array.length>0) ? Array.slice(0, len) : []);
}
console.log(res([1,2,3,4,5,6,7],3));