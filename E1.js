function sortArr(array, custom) {
    let output;
    custom = custom.toLowerCase();
    switch (custom) {
        case 'ascending':
            output = array.sort(function (a, b) {
                let x = a.toUpperCase();
                let y = b.toUpperCase();
                return x == y ? 0 : x > y ? 1 : -1;
            });
            return output;
        case 'descending':
            output = array.sort(function (a, b) {
                return b.localeCompare(a);
            });
            return output;
        case 'ascending length':
            output = array.sort(function (a, b) {
                return a.length - b.length;
            });
            return output;
        case 'descending length':
            output = array.sort(function (a, b) {
                return b.length - a.length;
            });
            return output;
        case 'ascending consonants':
            output = array.sort(asConsonant);
            return output;
        case 'descending consonants':
            output = array.sort(desConsonant);
            return output;
        default:
            throw new Error(`The custom sorting method: ${custom} is not supported`);
    }
}

function isConsonant(x) {
    return (/[bcdfghjklmnpqrstvwxys]/gi).test(x);
}

function asConsonant(a, b) {
    let count1 = a.split('').filter(isConsonant).length;
    let count2 = b.split('').filter(isConsonant).length;
    if (count1 === count2) return a.localeCompare(b)
    return count1 - count2;
}

function desConsonant(a, b) {
    let count1 = a.split('').filter(isConsonant).length;
    let count2 = b.split('').filter(isConsonant).length;
    if (count1 === count2) return a.localeCompare(b)
    return count2 - count1;
}

let array = [`viticulture`, `camel`, `butterfly`];
let a = sortArr(array, 'ascending conSonants');
console.log(a);
