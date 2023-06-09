/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 11:19:04
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 13:26:58
 * @FilePath: /node_study/014-fs/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require("fs");
const path = require("path");
// 异步读取
fs.readFile(path.resolve(__dirname, './input.txt'), function(err, data) {
  if (err) {
    return console.error(err)
  }

  console.log('异步读取：' + data.toString())
})

// 同步步读取
let data = fs.readFileSync(path.resolve(__dirname, './input.txt'))
console.log('同步读取：' + data.toString())
console.log('程序执行完毕。')



