module.exports = {
	entry: './src/index.tsx',
	target: 'electron-renderer',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader']
			},
			{
				test: /\.(ts|tsx)?$/,
				use: ['ts-loader']
			},
			{
				test: /\.(scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
			// {
			// 	test: /\.(jpe?g|png|gif)$/, // loader for images
			// 	use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
			// 	include: defaultInclude
			// },
			// {
			// 	test: /\.(eot|svg|ttf|woff|woff2)$/, // loader for custom fonts
			// 	use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
			// 	include: defaultInclude
			// }
		]
	},
}
