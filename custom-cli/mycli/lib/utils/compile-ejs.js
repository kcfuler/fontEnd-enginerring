const path = require("path");
const ejs = require("ejs");

/**
 * compile ejs template
 * @param tempName 使用的模板的名称
 *
 */
function compileEjs(tempName, data) {
  return new Promise((resolve, reject) => {
    // 1. 获取模板的路径S
    const tempPath = path.resolve(__dirname, `../template/${tempName}`);

    // 2. 使用ejs引擎编译模板
    // 传入path， 模板中使用的数据
    ejs.renderFile(tempPath, data, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

module.exports = {
  compileEjs,
};
