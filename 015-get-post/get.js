/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 14:46:08
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 15:00:53
 * @FilePath: /node_study/015-get-post/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http');
const url = require('url');
const util = require('util');

// http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com 
// get 请求
http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-type': 'text/plain; charset=utf-8'
  })
  
  let params = url.parse(req.url, true).query
  res.write('网站名称是：' + params.name)
  res.write('\n')
  res.write('网站URL：' + params.url)
  res.write('\n')

  res.end(util.inspect(url.parse(req.url, true)))
}).listen(3000)

