function funnyFn(param){
    let output;
    if (isNaN(param)){
        param = param.toLowerCase();
        output = param.replace(/[^aeiou]/gi, "").length;
        return output;
        } else{
        param = parseInt(param);
        output = Math.floor(Math.log10(param)+1);
        return output;
    }
}

let a = funnyFn("2403");
let b = funnyFn("Scythe");

console.log(a);
console.log(b);
