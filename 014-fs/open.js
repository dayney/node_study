/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 11:19:04
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 14:44:21
 * @FilePath: /node_study/014-fs/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require("fs");
const path = require("path");

// fs.open(path, flags[, mode], callback)

// 异步读取
console.log('准备打开文件！')
fs.open(path.resolve(__dirname, './input.txt'), function(err, fd) {
  if (err) {
    return console.error(err)
  }

  console.log('文件打开成功')
})
