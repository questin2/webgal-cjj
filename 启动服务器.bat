@echo off
:: 切换到WebGAL项目所在的盘符（比如D盘）
D:
:: 进入项目文件夹（替换为你的实际路径）
cd D:\webgal\WebGal_Terre\Exported_Games\cjj\web
:: 启动Python服务器（端口8000，可修改）
python -m http.server 8000
:: 暂停窗口（方便查看输出，关闭时按Ctrl+C）
pause