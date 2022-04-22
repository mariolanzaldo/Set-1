function copyProp (objA, objB,arrayIn,arrayEx){
    if (arrayIn === undefined && arrayEx === undefined){
      for(i in objB)
         objA[i]= typeof objB[i]=='object' ? copyProp(objB[i]):objB[i];
      return objA;
    }else {
        objA = Object.keys(objB).reduce((target, k) => {
            if (arrayEx != undefined) {
              if (arrayEx.indexOf(k) < 0) target[k] = objB[k];
            } else if (arrayIn.indexOf(k) > -1) target[k] = objB[k];
            return target;
          }, objA);
          return objA
    }
}

let objA = {};
let objB = {
    p1 : "carrot",
    p2 : "rabbit",
    p3 : true
};

objA = copyProp(objA,objB,["p3","p2"]);
// objA = copyProp(objA,objB);
console.log(objA);


