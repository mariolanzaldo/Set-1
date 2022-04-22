function limitFunc(fn, n) {
    return function() {
        return n-- > 0 ? fn.apply(this, arguments) : console.log("It won't execute");
    };
}

var limited = limitFunc(function(number){ 
    console.log(`A unit was added, the new result is ${++number}`);
}, 3);

limited(1);
limited(3);
limited(0);
limited(2);