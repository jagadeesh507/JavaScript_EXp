const arr=[NaN, 0, 15, false, -22, '',undefined, 47, null];
const result=arr=>{
    return arr.reduce((acc,val,index)=>{
        if(val){
            acc.push(val);
        }
        return acc;
    },[]);
}
console.log(result(arr));