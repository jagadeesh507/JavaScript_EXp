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
  