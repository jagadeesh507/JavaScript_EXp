const func=(start,end)=>{
    const array=[];
    for(let i=start; i<end; i++){
        array.push(i);
    }
    return array;
}
console.log(func(2,10));
console.log(func(-6,4));