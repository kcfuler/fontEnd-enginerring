const path = require("path");

const { program } = require("commander");

function helpOptions() {
  // 1.响应版本信息
  const version = require(path.resolve(
    __dirname,
    "../../package.json"
  )).version;
  program.version(version, "-V --version");

  // 2.增强其它的options的操作
  program.option("-w --why", "a cli for myself");
  // 使用占位符的形式接受参数
  program.option(
    "-d --dist <dist>",
    "a destination folder , such as ./src/main"
  );
  // 通过这个对象得到参数
  if (!!program.opts().dist) {
    console.log("get the param", program.opts().dist);
  }
  // 3.通过事件监听的形式来响应输入的指令
  program.on("--help", () => {
    console.log("hi~");
  });
}

module.exports = helpOptions;
