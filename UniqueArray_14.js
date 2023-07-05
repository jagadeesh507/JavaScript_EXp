//using filter method
const l=[1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
const k=l.filter((item,index,arr)=> arr.indexOf(item)===index);
console.log(k);
//using set method
const unique=new Set();
for(let i=0;i<l.length;i++){
    if(unique.has(l[i])) 
    continue;
    else
    unique.add(l[i]);
}
console.log(...unique)