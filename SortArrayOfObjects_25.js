//Write a JavaScript program to shuffle an array
const library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
const func=(a,b)=>a.title<b.title?-1:1;
console.log(library.sort(func));