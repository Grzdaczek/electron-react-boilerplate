const path = require('path')

module.exports = {
	entry: './src/index.tsx',
	target: 'electron-renderer',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			src: path.resolve(__dirname, 'src/')
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
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: ['babel-loader']
			},
			{
				test: /\.(ts|tsx)?$/,
				exclude: /(node_modules)/,
				use: ['babel-loader', 'ts-loader']
			},
		]
	},
}
