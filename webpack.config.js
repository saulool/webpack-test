const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', __dirname + '/src/app.js'],
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js' 
  },
  module: {
    loaders: [
		{
			test: /\.scss$/,
			loaders: ["style-loader", "css-loader", "sass-loader"]
		},
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
			    plugins: ['transform-runtime'],
				presets: ['es2015', 'stage-0']
			}
		}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};