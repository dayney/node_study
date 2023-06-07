/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-07 10:13:52
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-07 13:30:07
 * @FilePath: /node_study/006-nodejs-event/002-event.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const events = require('events')
const eventEmitter = new events.EventEmitter()

let listener1 = function listener1() {
  console.log('监听器 listener1 执行。')
}

let listener2 = function listener2() {
  console.log('监听器 listener2 执行。')
}

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1)

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.addListener('connection', listener2)

let eventListeners = eventEmitter.listenerCount('connection')
console.log(eventListeners + '个监听器链接事件。')

// 处理 connection 事件
eventEmitter.emit('connection')

// 移除绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1)
console.log('listener 1 不再受监听')

// 触发链接事件
eventEmitter.emit('connection')

eventListeners = eventEmitter.listenerCount('connection')
console.log(eventListeners + '个监听器监听链接事件。')

console.log('程序执行完毕')
