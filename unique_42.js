//Write a JavaScript function to find unique elements in two arrays.
//using set
const arr1=[1,2,3,4,5,[1,2,3]];
const arr2=[1,2,3,4,5,[1,2,3,9]];
const unique = (arr1,arr2)=>{
    const resultSet=new Set();
    const recursion =(arr)=>{
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i]))
            recursion(arr[i]);
            else
            resultSet.add(String(arr[i]));
        }
    }
    recursion(arr1);
    recursion(arr2);
    return [...resultSet];

}
console.log(unique(arr1,arr2));