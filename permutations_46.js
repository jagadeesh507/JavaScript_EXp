const permutations = arr => {
    if (arr.length === 1) {
      return [arr];
    }
  
    return arr.flatMap((item, i) =>
      permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])
    );
  };
  
  console.log(permutations([1, 33, 5]));