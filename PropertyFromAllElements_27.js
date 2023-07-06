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