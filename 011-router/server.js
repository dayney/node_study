/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-08 16:17:59
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 16:37:13
 * @FilePath: /node_study/011-router/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http');
const url = require('url');

function start (route) {
  function onRequest (reqest, response) {
    let pathname = url.parse(reqest.url).pathname
    console.log('Request for ' + pathname + ' received.')

    route(pathname)

    response.writeHead(200, {
      "content-type": 'text/plain'
    })
    response.write('Hello world')
    response.end()
  }
  http.createServer(onRequest).listen(8888)
  console.log('Server has started')
}

exports.start = start