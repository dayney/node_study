/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 11:19:04
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 14:36:47
 * @FilePath: /node_study/014-fs/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require("fs");
const path = require("path");

// fs.stat(path, callback)
// 参数使用说明如下：
// path - 文件路径。
// callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
// fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：
// 异步读取
console.log('获取文件信息')
fs.stat(path.resolve(__dirname, './input.txt'), function(err, stats) {
  if (err) {
    return console.error(err)
  }

  console.log(stats.isFile())
})




