const NodeSSH = require("node-ssh");

class AutoUploadPlugin {
  apply(compiler) {
    // 注册hooks监听事件
    compiler.hooks.afterEmit.tapAsync("AutoPlugin", (compilation, callback) => {
      //1.获取输出文件夹路径
      const outputPath = compilation.outputOptions.path;
      //2.连接远程SSH服务器
      this.connectServer();
      //3.将文件夹资源上传到服务器中

      // 完成所有操作之后记得调用callback()，让程序继续执行
      callback();
    });
  }

  async connectServer() {
    const ssh = new NodeSSH();

    await ssh.connect({
      host: "182.19.74.113",
      username: "root",
      password: "kcp.2842961263",
    });
    console.log("服务器连接成功");
  }
}

module.exports = AutoUploadPlugin;
module.exports.AutoUploadPlugin = AutoUploadPlugin;
