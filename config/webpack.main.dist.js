const webpack = require('webpack')
const merge = require('webpack-merge')
const main = require('./webpack.main.js')

module.exports = merge(main, {
	mode: 'production',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
	]
})
