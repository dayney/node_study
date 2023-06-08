/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-08 15:05:59
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 15:34:36
 * @FilePath: /node_study/008-stream/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// 创建可读流
fs.createReadStream(path.resolve(__dirname, 'input.txt.gz'))
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream(path.resolve(__dirname, 'input-gz.txt')))

console.log('文件解压完成')

