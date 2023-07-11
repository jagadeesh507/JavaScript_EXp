//Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers
const sum=(array)=>{
    return array.reduce((count,elem)=>{
        if(typeof elem ==="number"){
            count+=elem;
        }
        return count;
    },0);
}
console.log(sum([1,2,3,4,true,false,30,"sai",50])); //not working when we place [NaN,infinity]