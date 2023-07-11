// Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value.

// Test Data :
// indexOn([ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ], x => x.id)
// Expected Output:
// {"undefined":{"id":20,"name":"orange"}}
const arr=(array, keySelector)=> {
    var result = {};
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      var key = keySelector(item);
      result[key] = { ...item };
      delete result[key][key];
    }
    return result;
  }
  var array = [{ id: 10, name: 'apple' }, { id: 20, name: 'orange' }];
  console.log(arr(array, x => x.id));
  