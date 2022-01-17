const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  module: {
    rules: [
       { test: /\.css$/, 
	    use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
    plugins: [
	        new HtmlWebpackPlugin({
            title: 'Вёбшпак',
			head:'style.css',
            filename: 'index.html', // название выходного файла
			
        }),
	],
	mode:'production'
}