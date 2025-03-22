console.log("Hello World!");
var counter = require('./3_math.js');
console.log(counter(['apple', 'pear', 'cherry']));
var math = require('./3_math');
console.log(math.counter(['Shaun','Crystal', 'Ryu']));
console.log(math.adder(math.pi, 10));
