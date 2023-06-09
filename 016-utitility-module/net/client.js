/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 15:30:56
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 15:49:49
 * @FilePath: /node_study/016-utitility-module/path/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 用于底层的网络通信。提供了服务端和客户端的的操作。
const net = require('net');
const client = net.connect(
  {
    port: 8080
  }, function() {
    console.log('连接到服务器！');  
  }
);
client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function() { 
  console.log('断开与服务器的连接');
});



