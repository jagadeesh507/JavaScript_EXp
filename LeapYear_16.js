const array =[2000,2004,2020,2024,1984, 1988, 1992];
const array2 = new Array();
for(let i = 0;i <array.length;i++){
    array[i]%400===0 ||(array[i]%4===0 && array[i]%100!==0)?true:false;
    if(true){
        array2.push(array[i]);
    }
}
console.log(array2);