const webpack = require('webpack')
const merge = require('webpack-merge')
const main = require('./webpack.main.js')

module.exports = merge(main, {
	mode: 'development',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			'process.env.DEV_SERVER_PORT': JSON.stringify(8080)
		}),
	]
})
