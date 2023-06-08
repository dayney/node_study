/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-08 15:05:59
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 15:24:29
 * @FilePath: /node_study/008-stream/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path');

// 创建可读流
let readerStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'))
let writerStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'))

// 管道读写操作 覆盖式的写入
// 读取 input.txt文件内容，并将内容写到 output.txt 文件中
readerStream.pipe(writerStream)
console.log('程序执行完毕')

