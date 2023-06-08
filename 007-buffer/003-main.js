/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-07 13:35:14
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 09:02:59
 * @FilePath: /node_study/007-buffer/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}
// buf.toString([encoding[, start[, end]]])
// encoding - 使用的编码。默认为 'utf8' 。
// start - 指定开始读取的索引位置，默认为 0。
// end - 结束位置，默认为缓冲区的末尾。

console.log( buf.toString('ascii')) // 使用'ascii'编码，并输出： abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii', 0, 5)) // 使用'ascii'编码，并输出： abcde
console.log( buf.toString('utf8', 0, 5)) // 使用'utf8'编码，并输出： abcde
console.log( buf.toString(undefined, 0, 5)) // 默认的'utf8'编码，并输出： abcde