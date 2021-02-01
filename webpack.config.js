const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	output: {
		filename: 'app.bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, 'public')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
	//Objeto donde indicamos las reglas que tengra nuestro modulo
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins:['@babel/plugin-syntax-dynamic-import'],
						presets: [
							"@babel/preset-env", 
							"@babel/preset-react"
						]
					}
				}
			}
		]
	}
}
