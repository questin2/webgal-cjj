const express = require('express');
const app = express();

// 直接使用你的绝对路径（无需修改，确保该路径下有 index.html）
const webRoot = 'D:/webgal/WebGal_Terre/Exported_Games/cjj/web';

// 托管静态文件（网页、JS、CSS等）
app.use(express.static(webRoot));

// 启动服务器（端口8000，可修改）
const port = 8000;
app.listen(port, () => {
  console.log(`服务器启动成功！`);
  console.log(`本地访问：http://localhost:${port}`);
  console.log(`局域网访问：http://你的本地IP:${port}`); // 本地IP可通过 ipconfig 查看（如192.168.1.100）
});