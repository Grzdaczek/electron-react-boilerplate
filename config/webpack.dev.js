const path = require('path')
const webpack = require('webpack')
const { spawn } = require('child_process')
const HtmlPlugin = require('html-webpack-plugin')

const NODE_ENV = 'development'
const DEV_SERVER_PORT = '2137'

module.exports = {
	mode: NODE_ENV,
	target: 'electron-renderer',
	entry: {
		renderer: './src/renderer.tsx',
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
			'process.env.DEV_SERVER_PORT': JSON.stringify(DEV_SERVER_PORT),
		}),
	],
	devtool: 'eval-source-map',
	devServer: {
		contentBase: path.resolve('build'),
		hot: true,
		port: DEV_SERVER_PORT,
		stats: 'minimal',
		after() {
			spawn(
				'electron',
				['.'],
				{ shell: true, env: process.env, stdio: 'inherit' }
			)
			.on('close', code => process.exit(0))
			.on('error', spawnError => console.error(spawnError))
		}
	},
}
