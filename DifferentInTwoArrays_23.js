const arr1=[1,2,3,4];
const arr2=[3,4,5,6,7];
//using filter method
let arr3=(arr1,arr2)=>
{
    const deff1=arr1.filter(elem=>!arr2.includes(elem));
    const deff2=arr2.filter(elem=>!arr1.includes(elem));
    return [...deff1, ...deff2]
}
console.log(arr3(arr1,arr2));
//using reducer method
let arr4=(arr1,arr2) => {
    return arr1.reduce((result,elem)=>{
        if(!arr2.includes(elem)&&!result.includes(elem))
        result.push(elem);
        return result;
    },arr2.filter(elem => !arr1.includes(elem)));
}
console.log(arr4(arr1,arr2));