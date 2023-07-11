//Write a JavaScript function to find an array containing a specific element.
const array=new Array(3,8,32,45,12,8);
//using loop
const isContain =(array,key)=>{
  for(let i=0;i<array.length;i++){
    if(array[i]==key)
    return true;
  }
  return false;
}
console.log(isContain(array,12));

//using includes method
const isAvaliable=array.includes(23)?true:false;
console.log(isAvaliable);

//using indexOf method
console.log(array.indexOf(99)!==-1);