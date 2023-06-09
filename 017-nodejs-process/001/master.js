/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 16:52:31
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 17:05:03
 * @FilePath: /node_study/017-nodejs-process/master.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 此文件需要 pwd 是 017-nodejs-process/001
const fs = require('fs');
const child_process = require('child_process');

for( let i = 0; i < 3; i++ ) {
  let worker = child_process.exec('node support.js ' + i, function( err, stdout, stderr ) {
    if (err) {
      console.log(err)
      console.log('Error code: ' + error.code)
      console.log('Signal recevied: ' + error.signal)
    }

    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)

  })


}