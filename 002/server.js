/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-06 16:09:11
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-06 16:14:31
 * @FilePath: /node_study/002/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let http = require('http')

http.createServer(function(request, response) {
  // 发送 HTTP 头部
  // HTTP 状态值 200 ：ok
  // 内容类型 text/plain
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  })

  // 发送响应数据 'Hello world'
  response.end('Hello world')
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/')