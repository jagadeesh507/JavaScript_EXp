//Write a JavaScript function to move an array element from one position to another.
//using splice 
const movelm=(arr,from,to)=>{
    const mov=arr.splice(from,1)[0];
    arr.splice(to,0,mov);
    return arr;
}
console.log(movelm([1,2,3,4,5],2,4));

//using slice
const move=(arr,start,end)=>{
    const elm=arr[start];
    const array=[...arr.slice(0,start),...arr.slice(start+1,end+1),elm,...arr.slice(end+1)];
    return array;
}
console.log(move([1,2,3,4,5],3,4));
const array =[1,2,3,4,5];
console.log(array.slice(0,3));