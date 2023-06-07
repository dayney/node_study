/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-07 10:13:52
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-07 13:00:08
 * @FilePath: /node_study/006-nodejs-event/002-event.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const EventEmitter = require('events').EventEmitter
const event = new EventEmitter()

event.on('someEvent', function(arg1, arg2) {
  console.log('listener1', arg1, arg2)
})

event.on('someEvent', function(arg1, arg2) {
  console.log('listener2', arg1, arg2)
})

event.emit('someEvent', 'arg1 参数', 'arg2 参数')
