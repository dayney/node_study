/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-13 09:34:05
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-15 17:36:23
 * @FilePath: /express_study/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const config = require('./config/index');
const router = require('./routes');
const app = express();

app.use('/v1/api', router)

app.listen(config.port)

console.log('服务启动成功')