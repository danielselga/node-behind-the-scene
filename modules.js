// console.log(arguments)
// console.log(require('module').wrapper)


//modules.exports
const C = require('./test-module1.js')

const calc1 = new C() 
console.log(calc1.add(2,5))

//modules
// const calc2 = require('./test-module2')
const {add, multiply, divide} = require('./test-module2')
// console.log(calc2)

console.log(multiply(2, 5))

//Caching
require('./test-module3')()
require('./test-module3')()
require('./test-module3')()
