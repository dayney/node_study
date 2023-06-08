/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-08 15:05:59
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 15:13:22
 * @FilePath: /node_study/008-stream/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path');
console.log(__dirname)
console.log(path.resolve(__dirname, './'))
let data = '';

// 创建可读流
let readerStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'))

// 设置编码为 utf8
readerStream.setEncoding('UTF8')

// 处理流事件 -》 data、end and error
readerStream.on('data',  function(chunk) {
  data += chunk;
})

readerStream.on('end',  function() {
  console.log(data)
})

readerStream.on('error',  function(err) {
  console.log(err.stack)
})

console.log('程序执行完毕')

