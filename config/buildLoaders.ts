import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[local]_[hash:base64:8]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [
    svgLoader,
    fileLoader,
    scssLoader,
    tsLoader
  ]
}
