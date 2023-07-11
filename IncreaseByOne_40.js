//Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.
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