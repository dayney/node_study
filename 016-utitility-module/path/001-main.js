/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 15:30:56
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 15:37:04
 * @FilePath: /node_study/016-utitility-module/path/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Node.js path 模块提供了一些用于处理文件路径的小工具，我们可以通过以下方式引入该模块：
const path = require("path");

// 格式化路径
// 规范化路径，注意'..' 和 '.'。
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));


