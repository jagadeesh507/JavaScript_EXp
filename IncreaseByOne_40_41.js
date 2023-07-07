//41
const func=(start,end)=>{
    const array=[];
    for(let i=start; i<end; i++){
        array.push(i);
    }
    return array;
}
console.log(func(2,10));
console.log(func(-6,4));
//40
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