// 通过node子进程来完成我们的任务
const { spawn } = require("child_process");

/**
 * @param args 传入的命令相关的参数
 */
function execCommand(...args) {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args);
    // 输出子进程中的io
    childProcess.stdout.pipe(process.stdout);
    // 输出子进程中的错误
    childProcess.stderr.pipe(process.stderr);

    // 监听子进程的关闭
    childProcess.on("close", () => {
      resolve();
    });
  });
}

module.exports = execCommand;
