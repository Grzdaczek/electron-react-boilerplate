const path = require('path')
const webpack = require('webpack')

const DEV_SERVER_PORT = '2137'

module.exports = env => ({
	mode: env.NODE_ENV,
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
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
			'process.env.DEV_SERVER_PORT': JSON.stringify(DEV_SERVER_PORT),
		}),
	]
})
