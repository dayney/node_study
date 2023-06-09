/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 10:55:36
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 11:11:01
 * @FilePath: /node_study/013-util/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const util = require('util');

function Base() {
  this.name = 'base'
  this.base = 1991
  this.sayHello = function() {
    console.log('Hello ' + this.name)
  }
}

Base.prototype.showName = function() {
  console.log(this.name)
}

function Sub() {
  this.name = 'sub'
}

// util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。
// 注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
util.inherits(Sub, Base)
let objBase = new Base()
objBase.showName()
objBase.sayHello()

console.log(objBase)

let objSub = new Sub()
objSub.showName()
console.log(objSub)


