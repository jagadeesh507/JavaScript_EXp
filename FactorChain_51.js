const arr=[2,4,8,16,32,64];
//using loop
isFact=(arr) =>{
for(let i=0; i<arr.length-1; i++){
    if(arr[i+1]%arr[i]!=0)
    return false;
}
return true;
}
console.log(isFact(arr));

//using reduce
const ISFACT=(arr)=>arr.reduce((acc,elm,index,arr)=>{
    if(index<arr.length-1){
        if(arr[index+1]%elm===0)
       acc.push(true); 
       else acc.push(false);
    }
    return acc;
},[]);
console.log(!ISFACT(arr).includes(false));