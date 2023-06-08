/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-08 16:35:19
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-08 16:35:51
 * @FilePath: /node_study/011-router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const server = require('./server')
const router = require('./router')

server.start(router.route)
