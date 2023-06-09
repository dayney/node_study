/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 10:55:36
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 11:14:44
 * @FilePath: /node_study/013-util/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const util = require('util');

function Person() {
  this.name = 'byvoid'
  this.toString = function() {
    return this.name
  }
}

let obj = new Person()
// util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
// showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
// depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归 2 层，指定为 null 表示将不限递归层数完整遍历对象。 如果 colors 值为 true，输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。
// 特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了 toString 方法也不会调用。

console.log(util.inspect(obj))
console.log(util.inspect(obj, true))


