/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 10:55:36
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 10:59:02
 * @FilePath: /node_study/013-util/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const util = require('util');

// util.callbackify
// util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数，例如将 (err, value) => ... 回调作为最后一个参数。 在回调函数中，第一个参数为拒绝的原因（如果 Promise 解决，则为 null），第二个参数则是解决的值。

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, res) => {
  if (err) throw err;
  console.log(res);
});

fn().then(res=> {
  console.log(res);
})




