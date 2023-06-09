/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 14:46:08
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 15:11:51
 * @FilePath: /node_study/015-get-post/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http');
const querystring = require('querystring');
 
let postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  let body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    console.log('======')
    console.log(body)
    console.log('======')
    // 解析参数
    // name=%E7%BD%91%E7%AB%99%E5%90%8D&url=%E7%BD%91%E7%AB%99url
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);

