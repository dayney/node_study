/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 15:53:48
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 16:00:42
 * @FilePath: /node_study/016-utitility-module/domain/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 隐式绑定: 把在domain上下文中定义的变量，自动绑定到domain对象
// 显式绑定: 把不是在domain上下文中定义的变量，以代码的方式绑定到domain对象
const domain = require("domain")
const EventEmitter = require("events").EventEmitter;

const emitter1 = new EventEmitter();

// 创建域
const domain1 = domain.create();

domain1.on('error', function(err){
   console.log("domain1 处理这个错误 ("+err.message+")");
});

// 显式绑定
domain1.add(emitter1);

emitter1.on('error',function(err){
   console.log("监听器处理此错误 ("+err.message+")");
});

emitter1.emit('error',new Error('通过监听器来处理'));

emitter1.removeAllListeners('error');

emitter1.emit('error',new Error('通过 domain1 处理'));

const domain2 = domain.create();

domain2.on('error', function(err){
   console.log("domain2 处理这个错误 ("+err.message+")");
});

// 隐式绑定
domain2.run(function(){
   let emitter2 = new EventEmitter();
   emitter2.emit('error',new Error('通过 domain2 处理'));   
});


domain1.remove(emitter1);
emitter1.emit('error', new Error('转换为异常，系统将崩溃!'));
