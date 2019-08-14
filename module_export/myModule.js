module.exports = function() {console.log("module/default export.")}
module.exports.myFunc = function() {console.log("my function.")}
module.exports.myConst = "my constant.";
module.exports.MyObject = { abc: "my constant."};

console.log(module);
console.log(module.exports);
