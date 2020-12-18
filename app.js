// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 创建web服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res) => {
    res.send(req.url)
});


// 监听端口
app.listen(3000);
// 控制台提示输出
console.log("\033[42;30m 成功 \033[0m", '服务器启动成功');