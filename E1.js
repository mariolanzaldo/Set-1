function sortArr(array,custom){
    let output;
    switch (custom){
        case 1:
            console.log(`Ascending order`);
                output = array.sort(function(a,b){
                let x = a.toUpperCase();
                let y = b.toUpperCase();
                return x == y ? 0 : x > y ? 1 : -1;
            });
            return output;
        case 2:
            console.log(`Descending order`);
            output = array.sort(function (a,b){
                return b.localeCompare(a);
            });
            return output;
        case 3:
            console.log(`Ascending order according to length`);
            output = array.sort(function(a,b){
             return a.length - b.length;
            });
            return output;
        case 4:
            console.log(`Descending order according to length`);
            output = array.sort(function(a,b){
                return b.length - a.length;
            });
            return output;
        case 5: 
            console.log(`Ascending order according to number of consonants`);
            output = array.sort(asConsonant);
            return output;
        case 6:
            console.log(`Descending order according to number of consonants`);
            output = array.sort(desConsonant);
            return output; 
        default: 
            console.log(`The input is not allowed. Only values between 1-4 are valid`);
    }
}

function isConsonant(x){
    return (/[bcdfghjklmnpqrstvwxys]/gi).test(x);
}

function asConsonant(a,b){
    let count1 = a.split('').filter(isConsonant).length;
    let count2 = b.split('').filter(isConsonant).length;
    if(count1 === count2)return a.localeCompare(b)
    return count1 - count2;
}

function desConsonant(a,b){
    let count1 = a.split('').filter(isConsonant).length;
    let count2 = b.split('').filter(isConsonant).length;
    if(count1 === count2)return a.localeCompare(b)
    return count2 - count1;
}

let array= [`viticulture`,`camel`,`butterfly`];
let a = sortArr(array,6);
console.log(a);