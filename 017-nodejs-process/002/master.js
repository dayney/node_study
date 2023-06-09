/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 16:52:31
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 17:07:28
 * @FilePath: /node_study/017-nodejs-process/master.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 此文件需要 pwd 是 017-nodejs-process 
// child_process.spawn(command[, args][, options])
// const fs = require('fs');
const child_process = require('child_process');

for( let i = 0; i < 3; i++ ) {
  let workerProcess = child_process.spawn('node', ['support.js', i])

  workerProcess.stdout.on('data', function(data) {
    console.log('stdout: ' + data)
  })

  workerProcess.stderr.on('data', function(data) {
    console.log('stderr: ' + data)
  })

  workerProcess.on('close', function(data) {
    console.log('子进程已退出，退出码 ' + data)
  })
}