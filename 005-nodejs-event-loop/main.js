/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-06 16:47:31
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-06 17:21:05
 * @FilePath: /node_study/005/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const events = require('events')

// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter();

const connectHandler = function connected () {
  console.log('链接成功')

  // 绑定 data_recevied 事件
  eventEmitter.emit('data_recevied')
}

// 绑定 connection 事件
eventEmitter.on('connection', connectHandler)

// 使用匿名函数绑定 data_recevied 事件
eventEmitter.on('data_recevied', function() {
  console.log('数据接收成功')
})

// 触发 connection 事件
eventEmitter.emit('connection')

console.log('程序执行完毕')
