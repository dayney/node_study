/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-08 16:43:26
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 16:56:12
 * @FilePath: /node_study/012-global-object/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 输出全局变量 __filename 
console.log(__filename);

// 输出全局变量 __dirname 
console.log(__dirname);

function printHello() {
  console.log('Hello world');
}

// 2秒以后执行
setTimeout(printHello, 2000)
