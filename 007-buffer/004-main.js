/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-07 13:35:14
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 09:06:23
 * @FilePath: /node_study/007-buffer/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5])
const json = JSON.stringify(buf)

console.log(json)

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
})

console.log(copy)
