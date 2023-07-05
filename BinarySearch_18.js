const array =[4,3,2,1,6,7,8];
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
console.log(binarySearch(array,0,array.length,8));