const { promisify } = require("util");
const downLoad = promisify(require("download-git-repo"));
const { VUE_REPO } = require("../config/repo");
const execCommand = require("../utils/exec-command");
const { compileEjs } = require("../utils/compile-ejs");
const { writeFile } = require("../utils/write-file");

async function createProjectAction(project) {
  try {
    // 1. 下载模板
    await downLoad(VUE_REPO, project, { clone: true });
    // 2. 有很多的脚手架会在这里给予提示
    // console.log('...')

    // 3. 帮助执行npm install
    // 分别传入命令的执行对象、执行参数、其它参数
    // console.log(process.platform); // 如果是windows平台的话， 使用的命令有所差异
    const commandName = process.platform === "win32" ? "npm.cmd" : "npm"; // 动态判断
    await execCommand("npm.cmd", ["install"], { pwd: `./${project}` });
    await execCommand("npm.cmd", ["run", "dev"], { pwd: `./${project}` });
  } catch (err) {
    console.log("模板创建失败：", err);
  }
}

async function addComponentAction(cpnName) {
  console.log("this is cpn name", cpnName);
  // 1. 将参数传入, 替换模板
  const result = await compileEjs("Header.vue.ejs", { name: cpnName });
  // 2. 将文件写入
  writeFile(`src/components/${cpnName}.vue`, result);
  console.log("创建组件成功", cpnName + ".vue");
}

module.exports = {
  createProjectAction,
  addComponentAction,
};
