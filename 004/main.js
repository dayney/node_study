/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-06 16:37:19
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-06 16:44:49
 * @FilePath: /node_study/004/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
// 阻塞式代码实例
const data = fs.readFileSync('./input.txt');
console.log('0000')
console.log(data.toString())
console.log('0000')
console.log('程序执行结束00')

// 非阻塞式代码实例
fs.readFile('./input.txt', function(err, data) {
  if (err) {
    return console.error(err)
  }
  console.log('1111')
  console.log(data.toString())
  console.log('1111')
})
console.log('程序执行结束111')
