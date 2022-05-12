function copyProp(objA, objB, arrayIn) {
  if (arrayIn === undefined) {
    for (let i in objB)
      objA[i] = typeof objB[i] == 'object' ? copyProp(objB[i]) : objB[i];
    return objA;
  } else {
    objA = Object.keys(objB).reduce((target, k) => {
      if (arrayIn.indexOf(k) > -1) target[k] = objB[k];
      return target;
    }, objA);
    return objA;
  }
}

let objA = {};
let objB = {
  p1: "carrot",
  p2: "rabbit",
  p3: true
};

objA = copyProp(objA, objB, ["p1", "p3"]);
// objA = copyProp(objA,objB);
console.log(objA);
