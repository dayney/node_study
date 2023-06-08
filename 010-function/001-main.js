/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-08 15:56:17
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 16:12:09
 * @FilePath: /node_study/010-function/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function say(word) {
  console.log(word)
}

function execute(someFunction, value) {
  someFunction(value)
}

execute(say, 'Hello')
