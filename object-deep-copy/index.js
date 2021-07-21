function deepClone(obj){
  if (obj === null || typeof obj != 'object') return obj;

  if (Array.isArray(obj)) {
    let clone = [];
    obj.forEach((el, i) => {
      clone[i] = deepClone(el);
    })
    return clone;
  }
  if ( typeof obj === 'object') {
    let clone = {};
    for (let key in obj){
      if ( obj.hasOwnProperty(key)) { clone[key] = deepClone(obj[key]);}
    }
    return clone;
  }
}

const myObj = {
  a: 2,
  b: { c: 4, d: 5 },
  e: [ 6, 7, {e: 8, f: 9}],
  i: 'str'
}
console.log(myObj);
const cloneObj = deepClone(myObj)
console.log(cloneObj);
myObj.b = 4;
cloneObj.e = 3
console.log(myObj);
console.log(cloneObj);