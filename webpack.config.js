const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'index.boundle.js'
	},
	module: {
		rules: [ 
			{
				test: /\.js$/,
				exclude: '/node_modules',
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'}, 
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html',
		filename: 'index.html',
		inject: 'body'
	})]
};