// 使用commonjs格式的包默认不会被rollup打包，如lodash
// rollup默认情况下es module, 使用以下的两个包来解决这个问题
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve");

// 使用代码转换和压缩
const { babel } = require("@rollup/plugin-babel");
const terser = require("@rollup/plugin-terser");
const postcss = require("rollup-plugin-postcss");
const vue = require("rollup-plugin-vue");
const replace = require("@rollup/plugin-replace");
const serve = require("rollup-plugin-serve");
const livereload = require("rollup-plugin-livereload");

module.exports = {
  // 入口文件
  input: "./lib/index.js",
  // 出口
  output: {
    format: "umd", // 打包的格式
    name: "myUtils",
    file: "./build/bundle.umd.js",
    globals: {
      // 给第三方的包指定名称
      lodash: "_",
    },
  },
  // 打包的时候排除掉
  external: ["lodash"],
  // same as webpack , resolve various resource by plugins
  plugins: plugins,
};

const isProduction = process.env.NODE_ENV === "production";
const plugins = [
  commonjs(),
  nodeResolve(),
  babel({
    babelHelpers: "bundled",
    exclude: /node_modules/,
  }),
  postcss(),
  vue(),
  // 如果打包的库中使用到了 process.env.NODE_ENV 这个变量的话
  // 我们需要使用这个插件来替换对应的变量,避免打包报错
  replace({
    "process.env.NODE_ENV": JSON.stringify("production"),
    preventAssignment: true,
  }),
];

// 根据环境决定是否启动热重载
if (isProduction) {
  plugins.push(terser());
} else {
  const extraPlugins = [
    serve({
      port: 8000,
      open: true,
      contentBase: ".",
    }),
    livereload(),
  ];
  plugins.push(extraPlugins);
}
