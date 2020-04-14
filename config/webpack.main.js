const path = require('path')
const webpack = require('webpack')

module.exports = {
	target: 'electron-main',
	entry: {
		main: './src/main.ts',
	},
	output: {
		filename: '[name].js',
		path: path.resolve('build')
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /(node_modules)/,
				use: ['ts-loader']
			},
		]
	}
}
