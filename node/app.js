console.log("a");
setImmediate(()=> {
    return console.log("b");
});
console.log("c");