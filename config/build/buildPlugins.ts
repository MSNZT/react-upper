import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins (options: BuildOptions): webpack.Configuration['plugins'] {
  const { path, isDev } = options

  const plugins: webpack.Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: path.html
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    })
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
    plugins.push(new webpack.DefinePlugin({
      __IS_DEV__: true
    }))
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }
  
  return plugins
}
