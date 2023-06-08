/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-07 13:35:14
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 09:10:23
 * @FilePath: /node_study/007-buffer/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var buffer1 = Buffer.from('菜鸟教程')
var buffer2 = Buffer.from('www.runoob.com')
var buffer3 = Buffer.concat([buffer1, buffer2])
console.log('buffer3 内容：' + buffer3.toString())
