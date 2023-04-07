const path = require('path')

module.export = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: './my-loader/my-loader-1.js'
      }
    ]
  }
}
