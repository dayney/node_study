/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-07 13:35:14
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 08:48:54
 * @FilePath: /node_study/007-buffer/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const buf = Buffer.alloc(256)
len = buf.write('www.runoob.com')

console.log('写入字节数：' + len)