//using reduce
const isPrinme=(array)=>{
    return array.reduce((acc,curr,index,arr)=>{
        if(curr==1||curr>2&&curr%2==0){
            return false;
        }
        return acc;
    },true);
}
console.log(isPrinme([1,11,2,3,5,7]));




