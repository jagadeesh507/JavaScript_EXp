//using loop
const array=[1,2,NaN,3,4,NaN,null,3,NaN]; // here [,,] also taking as NaN
const arrNaN=[];
for(let i=0; i<array.length; i++){
    if(isNaN(array[i])){
       arrNaN.push(i);
    }
}
console.log(arrNaN);

//using map method
const usemap=array=>array.map((elem,index)=>{
    if(isNaN(elem)) return index;
    else return false; 
}).filter((elm)=>{
    return elm;
});
console.log(usemap(array));

//using reduce method
const useresuce=(array)=>array.reduce((countArr,elm,index)=>{
    if(isNaN(elm)){
        countArr.push(index);
    }
    return countArr;
},[]);
console.log(useresuce(array));
document.querySelector("#output").innerHTML = useresuce([1,2,NaN,3,4,NaN,null,3,NaN]);


