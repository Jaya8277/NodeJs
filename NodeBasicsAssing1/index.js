const calculator = require('./another.js')
const N = require('crypto')
const add = calculator.add
const sub = calculator.sub
const multi = calculator.multi
const div = calculator.div
const sin = calculator.sin
const cos = calculator.cos
const tan = calculator.tan
console.log(add(5,5))
console.log(sub(5,4))
console.log(multi(2,6))
console.log(div(6,8))
console.log(sin(45));
console.log(cos(60));
console.log(tan(45));
console.log(N.randomInt(1, 900000));