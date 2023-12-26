import type webpack from 'webpack'
import { BuildOptions } from './types/config'
import { cssLoader } from './Loaders/cssLoader'

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

  const scssLoader = cssLoader(isDev)

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
