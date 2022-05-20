function limitFunc(fn, n) {
    return function () {
        if (n-- > 0) {
            return fn.apply(this, arguments);
        } else {
            throw new Error("It won't execute")
        }
    };
}

var limited = limitFunc(function (number) {
    console.log(`A unit was added, the new result is ${++number}`);
}, 3);

limited(1);
limited(3);
limited(0);
limited(2);
