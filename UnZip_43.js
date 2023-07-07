const arr=[['a', 1, true], ['b', 2, false]];
function unzip(arr) {
    return arr.reduce((result, subArray) => {
      subArray.forEach((element, index) => {
        if (!result[index]) {
          result[index] = [];
        }
        result[index].push(element);
      });
      return result;
    }, []);
  }
  console.log(unzip(arr));