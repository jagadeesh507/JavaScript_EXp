const array = [1,2,3,45,46,47,48,49];
//using random method
let rand_elem=array=>{
    return array[Math.floor(Math.random()*array.length)];}
console.log(rand_elem(array));