//in array
const array =[2000,2004,2020,2024,1984, 1988, 1992];
const array2 = new Array();
for(let i = 0;i <array.length;i++){
    array[i]%400===0 ||(array[i]%4===0 && array[i]%100!==0)?true:false;
    if(true){
        array2.push(array[i]);
    }
}
console.log(array2);

//in range
const leapYears=(start,end)=>{
    const result=[];
    for(let i=start; i<=end; i++){
       if(i%400===0||(i%4===0&&i%100!==0)){
       result.push(i);
       }
    }
    return result;
}
res=leapYears(2000,2024);
console.log(res);