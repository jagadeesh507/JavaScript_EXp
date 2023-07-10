const fun=(start, end, type)=> {
    var result = [];
    if (typeof start === 'number' && typeof end === 'number') {
      for (var i = start; i <= end; i += type) {
        result.push(i);
      }
    } else if (typeof start === 'string' && typeof end === 'string' && start.length === 1 && end.length === 1) {
      var startCode = start.charCodeAt(0);
      var endCode = end.charCodeAt(0);
      for (var j = startCode; j <= endCode; j += type) {
        result.push(String.fromCharCode(j));
      }
    } 
    return result;
  }
  console.log(fun('a', 'z', 2));
  