var express = require("express");
var app = express();
var http = require("http");
/**
 * 先把工具类和配置文件复制给global
 */
var AppUtil = require("./util/");
var ConfigInfo = require('./config/')
global.AppUtil = AppUtil;
global.ConfigInfo = ConfigInfo

AppUtil.logger.server.info("服务器正在准备工作中");

var rootRouter = require("./router/");
app.use(rootRouter);

var server = http.createServer(app);
server.on("timeout", () => {
  AppUtil.logger.server.error("服务器超时");
});
server.on("close", () => {
  AppUtil.logger.server.info("服务器已关闭");
});
server.listen(3000, () => {
  AppUtil.logger.server.info("服务器启动成功");
});