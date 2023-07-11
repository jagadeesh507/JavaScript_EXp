// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
const array=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let elm;
let max=0;
for(let i=0; i<array.length; i++){
    let count=0
    for(let j=0; j<array.length;j++){
        if(array[i]==array[j]){
            count+=1;
        }
    }
    if(count>max){
        max=count;
        elm=array[i];
    }
}
console.log(elm +" ( "+ max +" times )");
