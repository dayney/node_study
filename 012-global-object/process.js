/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-08 16:59:53
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 17:06:03
 * @FilePath: /node_study/012-global-object/process.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 输出到终端
process.stdout.write('Hello world!' + '\n')

// 输出参数读取
// argv 属性返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val)
})

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 获取执行路径
console.log(process.execPath)

// 平台信息
console.log(process.platform)
