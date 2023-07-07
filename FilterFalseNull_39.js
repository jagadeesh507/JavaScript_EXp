const arr=[1,2,false,true,null,'',1];
const res=(arr)=> arr.reduce((acc,value)=>{
        if(value !== false && value !== null && value !== 0 && value !== ""){
            acc.push(value);
        }
        return acc;
    },[]);
console.log(res(arr));