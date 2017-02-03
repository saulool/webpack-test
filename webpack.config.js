const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', __dirname + '/src/index.js'],
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
			test: /\.css$/,
			loaders: ["style-loader", "css-loader"]
		},
		{ 
			test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
			loader: "url-loader" 
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
    new HtmlWebpackPlugin({template: './src/index.html'}),
	new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
  ],
	devServer: {
		contentBase: "./dist"
	},
};