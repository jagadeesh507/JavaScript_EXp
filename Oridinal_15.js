// We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinals = ["th", "st", "nd", "rd"];
const ArrayColors=(colors,ord)=>{
    for(let i=0; i<colors.length; i++){
        let index=i+1;
        let oridinal=index>3?ord[0]:ord[i+1];
        console.log(`${index}${oridinal} choice is ${colors[i]}`);
    }
}
ArrayColors(colors,ordinals);
