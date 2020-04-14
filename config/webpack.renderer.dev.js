const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { spawn } = require('child_process')
const HtmlPlugin = require('html-webpack-plugin')
const renderer = require('./webpack.renderer.js');

module.exports = merge(renderer, {
	mode: 'development',
	plugins: [
		new HtmlPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		})
	],
	devServer: {
		contentBase: path.resolve('build'),
		hot: true,
		port: 8080,
		stats: 'minimal',
		after() {
			spawn(
				'electron',
				['.'],
				{ shell: true, env: process.env, stdio: 'inherit' }
			)
			.on('close', code => process.exit(code))
			.on('error', spawnError => console.error(spawnError))
		}
	}
})
