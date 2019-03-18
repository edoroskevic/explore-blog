const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'build.[hash].js',
		publicPath: '/'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		overlay: true,
		compress: true,
		port: 3000,
		historyApiFallback: true
	},
	devtool: 'inline-source-map',
	module: {
		rules: [ 
			{test: /\.css/, use: ['style-loader', 'css-loader']},
			{test: /\.js/, use: 'babel-loader', exclude: /node_modules/}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({title: 'development', template: './src/index.html'})	
	]
};
