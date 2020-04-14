const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

const NODE_ENV = 'production'
const DEV_SERVER_PORT = '2137'

module.exports = {
	mode: NODE_ENV,
	target: 'electron-renderer',
	entry: {
		renderer: './src/renderer.tsx',
	},
	output: {
		filename: '[name].js',
		path: path.resolve('build')
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				exclude: /(node_modules)/,
				use: ['ts-loader']
			},
		]
	},
	plugins: [
		new HtmlPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
		}),
	]
}
