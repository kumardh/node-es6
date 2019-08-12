

//Variable scoping.

// When we start writing code in a file, we are automatically placed in the global scope of that file. When we declare variables in the file, we place them in the global scope.
// Functions have their own local scope available to them. This local scope can be thought of as being nested inside the global scope.
// We can look at the current scope level and outwards, but not inwards.
// There’s a mechanism behind variable lookup in JavaScript. When we try to access a variable, the JavasScript engine first looks at the current scope level. If the variable isn’t found, it will jump upwards into the parent scope and look there, and keep going upwards and out until it either finds the variable or reaches the global scope. If it’s not in the global scope, we get a reference error.
// Functions can access and change variables in their outer scope. When we omit var, the JavaScript engine will not create a new instance of a variable in the local scope. Instead, it will first attempt to find the variable we are changing. If it’s found in the local scope, it’ll change the variable in the local scope. If it’s not, it’ll go up continuously until it finds it.


var x = 5;
var y = 'abc';

function outerFn() {
    var x = 10;
    y = 'xyz';

    function innerFn() {
        x = 20;
        var y = 'jkl';
    }

    innerFn();

    console.log(x);
    console.log(y);
}

outerFn();
// -> 20
// -> xyz

console.log(x); // -> 5
console.log(y); // -> xyz

// var x = 5;
// var y = 'abc';
// function fn() {};

// console.log(x);
// console.log(window.x);
// console.log(Object.keys(window));