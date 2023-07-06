//using reduce method
const array=[1,[2,3,4],5,4,[5,6],[6,7,8],2,[7,8]];
const result=(array)=>array.reduce((count,item)=>{
    if(Array.isArray(item)){
        return count+1;
    }
    return count;
},0);
console.log(result(array));

//using filter method
const res=(array)=>{
    return array.filter(item=>Array.isArray(item)).length;
}
console.log(res(array));
