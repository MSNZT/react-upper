import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const {isDev} = options
	
	const scssLoader =  {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader': MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: ((resPath: string) => Boolean(resPath.includes('.module.'))),
						localIdentName: isDev ? '[local]_[hash:base64:8]' : '[hash:base64:8]'
					}
				}
			},
			"sass-loader",
		],
	}
	
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}
	
	return [
		scssLoader,
		tsLoader
	]
}