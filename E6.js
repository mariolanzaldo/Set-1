function traverseTree(obj){
    let x = Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] === 'object' && obj[key] != null){
        console.log(key);
        traverseTree(obj[key]);
    }
    });
    return x;
}

let obj = {
    "A": {
        "a": {"aa": {}},
        "b":{"ba":{},"bb":{}},
        "c":{"ca":{},"cb":{
            "cba":{},
            "cbb":{}
        }},
        "d":{}
    }
}

traverseTree(obj);

