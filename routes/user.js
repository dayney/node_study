/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-15 16:56:01
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-15 17:39:35
 * @FilePath: /express_study/routes/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log('进入到此处 user')
  res.send('hello world user')
})

module.exports = router