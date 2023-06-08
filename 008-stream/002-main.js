/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-08 15:05:59
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 15:21:34
 * @FilePath: /node_study/008-stream/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path');

let data = '菜鸟教程官网地址：www.runoob.com';

// 创建可读流
let writeStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'))

// 设置编码为 utf8
writeStream.write(data, 'UTF8')

// 标记文件末尾
writeStream.end()

//
writeStream.on('finish',  function() {
  console.log(data)
})

readerStream.on('error',  function(err) {
  console.log(err.stack)
})

console.log('程序执行完毕')

