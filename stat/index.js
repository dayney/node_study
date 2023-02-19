// fs.sate 获取文件信息的方式
const fs = require('fs')
const path = require('path')
const stat = fs.statSync(path.resolve(__dirname, './a.txt'))
console.log('__dirname：', __dirname)
console.log('__filename：', __filename)
console.log('process.cwd()：', process.cwd())
console.log(stat)
console.log(process.argv) // 要谨慎使用，传参有顺序
// console.log(fs.Stats)
