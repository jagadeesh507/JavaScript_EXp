
const fun=(start,end)=>{
    const array=[];
    const j=start;
    for(let i=0; i<end; i++,start++){
        array.push(start);
    }
    return array;
}
console.log(fun(2,10));
console.log(fun(-6,4));