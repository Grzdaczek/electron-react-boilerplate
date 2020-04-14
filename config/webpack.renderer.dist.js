const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const renderer = require('./webpack.renderer.js')

module.exports = merge(renderer, {
	mode: 'production',
	plugins: [
		new HtmlPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		})
	]
})
