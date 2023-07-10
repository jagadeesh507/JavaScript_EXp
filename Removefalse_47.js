const func = (data) => {
    if (Array.isArray(data)) {
      return data.filter(Boolean).map(func);
    }
  
    if (typeof data === 'object' && data !== null) {
      const result = {};
  
      for (const [key, value] of Object.entries(data)) {
        if (Boolean(value)) {
          result[key] = typeof value === 'object' ? func(value) : value;
        }
      }
  
      return result;
    }
  
    return data;
  };
  
  const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
  };
  console.log(JSON.stringify(func(obj)));
  