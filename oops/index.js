import { person } from './module1.js';

// function Circle(r){
//     let x = 10;
//     this.r = r;

//     Object.defineProperty(this, "x", {
//         get() {return x;}
//     })
// }

// var y = new Circle(2);
// console.log(y.x);
// console.log(y.r);

const items = ['red', 'yellow', 'blue'];
var filter = items.filter(o=> o !== 'red');
var f_clone = [...filter, 'green']
console.log(items);
console.log(filter);
console.log(f_clone);
// var x  = items.map(o=> '<li>${o}</li>');
// var x1  = items.map(o=> `<li>${o}</li>`).join('');
// console.log(person);