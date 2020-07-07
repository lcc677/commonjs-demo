var test = require('./a')
var imTest = require('./import-test')
// var imTest2 = require('./import-test2') // 引入会提示不存在这个模型
console.log(test.a)
console.log(test.mFunction(1, 2))
console.log(imTest.name)
console.log(require.resolve('./a'))
// console.log(imTest2.name)