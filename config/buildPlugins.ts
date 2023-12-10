import HtmlWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions } from './types/config'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins (options: BuildOptions): webpack.Configuration['plugins'] {
  const { path, mode, isDev } = options
  const isProd = mode === 'production'

  const plugins: webpack.Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: path.html
    })
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
    plugins.push(new webpack.DefinePlugin({
      __IS_DEV__: true
    }))
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }))
  }

  return plugins
}
