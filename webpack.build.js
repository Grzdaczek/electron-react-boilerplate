const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
// const defaultInclude = path.resolve(__dirname, 'src')

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			// {
			// 	test: /\.css$/, // loader CSS
			// 	use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			// 	include: defaultInclude
			// },
			{
				test: /\.jsx?$/, // loader for react
				use: ['babel-loader'],
				// include: defaultInclude
			},
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'ts-loader'],
			},
			// {
			// 	test: /\.(jpe?g|png|gif)$/, // loader for images
			// 	use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
			// 	include: defaultInclude
			// },
			// {
			// 	test: /\.(eot|svg|ttf|woff|woff2)$/, // loader for custom fonts
			// 	use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
			// 	include: defaultInclude
			// }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		}),
		// new MiniCssExtractPlugin({ filename: 'bundle.css' }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new BabiliPlugin()
	],
	stats: {
		colors: true,
		children: false,
		chunks: false,
		modules: false
	}
})
