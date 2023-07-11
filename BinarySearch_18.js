// Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4
const array =[4,3,2,1,6,7,8];
//using recursion
function binarySearch(array,start,end,key){
    let mid=Math.floor((start+end)/2);
    if(key===array[mid]){
        return mid;
    }
    else if(key>array[mid]){
        return binarySearch(array,mid+1,end,key);
    }
    else if(key<array[mid]){
        return binarySearch(array,start,mid-1,key);
    }
    else{
        return "element not found";
    }
}
console.log(binarySearch(array,0,array.length,1));

//using indexof operator

console.log(array.indexOf(8));