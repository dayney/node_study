/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-08 15:46:03
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 15:52:23
 * @FilePath: /node_study/009-module-system/hello.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function Hello () {
  console.log('Hello World');
  let name
  this.setName = function(thyName) {
    name = thyName
  }

  this.sayHello = function() {
    console.log('Hello' + name)
  }
}

module.exports = Hello