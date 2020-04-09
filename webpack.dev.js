const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { spawn } = require('child_process')

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
// const defaultInclude = path.resolve(__dirname, 'src')

module.exports = merge(common, {
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	devtool: 'cheap-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		stats: {
			colors: true,
			chunks: false,
			children: false
		},
		before() {
			spawn(
				'electron',
				['.'],
				{ shell: true, env: process.env, stdio: 'inherit' }
			)
			.on('close', code => process.exit(0))
			.on('error', spawnError => console.error(spawnError))
		}
	}
})
