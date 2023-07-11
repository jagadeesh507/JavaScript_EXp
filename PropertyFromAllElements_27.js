// // Write a JavaScript function to retrieve the value of a given property from all elements in an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
//using reduce
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
const arr=(lib,name)=>{
    return lib.reduce((acc,elm)=>{
        if(elm) 
        {
            acc.push(elm[name]);  
        }
        return acc;
    },[]);
}
console.log(arr(library,'title'));
console.log(arr(library,'libraryID'));