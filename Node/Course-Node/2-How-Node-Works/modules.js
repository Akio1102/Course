/* console.log(arguments);
console.log(require("module").wrapper); */

//module.exports
const C = require("./test-module-1.js");

const calc1 = new C();
console.log(calc1.add(2, 5));

//exports

/* const calc2 = require("./test-module-2.js"); */
const { add, divide, multiply } = require("./test-module-2.js");
console.log(multiply(2, 5));

//Caching
require("./test-module-3.js")();
require("./test-module-3.js")();
require("./test-module-3.js")();
