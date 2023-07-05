const swap_test = "The Quick Brown Fox".split("");

const swap_case = (input) =>
  input.map((ele) =>
      ele.toLowerCase() === ele ? ele.toUpperCase() : ele.toLowerCase()
    ).join("");
console.log(swap_case(swap_test));