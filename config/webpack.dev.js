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
		renderer: './src/renderer.tsx'
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
		alias: {
			src: path.resolve('src/'),
			assets: path.resolve('src/assets/'),
			styles: path.resolve('src/styles/')
		}
	},
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'file-loader',
					options: { name: 'assets/[name].[hash:8].[ext]' }
				}
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'file-loader',
					options: { name: 'assets/[name].[hash:8].[ext]' }
				}
			},
			{
				test: /\.(scss|sass)$/,
				exclude: /(node_modules)/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(ts|tsx)?$/,
				exclude: /(node_modules)/,
				use: ['ts-loader']
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
			'process.env.DEV_SERVER_PORT': JSON.stringify(DEV_SERVER_PORT),
		})
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
	}
}
