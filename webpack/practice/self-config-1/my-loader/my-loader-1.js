/**
 * @param map sourcemap 相关的数据
 * @param content 资源文件相关的内容
 * @param meta  一些元数据
 * */
module.exports = function (content, map, meta) {
  console.log('my-loader-content',content)
  return content
}
