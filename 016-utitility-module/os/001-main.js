/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2023-06-09 15:15:51
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2023-06-09 15:31:20
 * @FilePath: /node_study/016-utitility-module/os/001-main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//提供基本的系统操作函数
const os = require('os');

console.log('操作系统默认的临时文件夹：' +  os.tmpdir())
console.log('返回CPU的字节序：' +  os.endianness())
console.log('操作系统的主机名：' +  os.hostname())
console.log('操作系统名：' +  os.type())
console.log('编辑时操作系统名称：' +  os.platform())
console.log('返回操作系统CPU架构，可能的值有"x64", "arm", "ia32"：' +  os.arch())
console.log('操作系统的发行版本：' +  os.release())
console.log('操作系统的运行时间：' +  os.uptime())
console.log('返回一个包含1、5、15分钟平均负载的数据：' +  os.loadavg())
console.log('返回系统内存总量，单位为字节：' +  os.totalmem())
console.log('返回系统空闲内存总量，单位为字节：' +  os.freemem())
console.log('一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）')
console.log(os.cpus())
console.log('获得网络接口列表')
console.log(os.networkInterfaces())
