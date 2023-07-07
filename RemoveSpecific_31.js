const array =[3,4,7,1,56];
//using filter
const remElm=(array,key)=>array.filter((elm,index)=>elm!=key);
console.log(remElm(array,7));

//using splice
const fun=(arr,key)=>{
    const index=arr.indexOf(key);
    if(index>-1){
        arr.splice(index,1);
    }
    else{
        return "Element not found";
    }
    return arr;
}
console.log(fun(array,9));





