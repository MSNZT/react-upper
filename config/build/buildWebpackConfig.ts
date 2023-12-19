import type webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolver'
import { buildLoaders } from './buildLoaders'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { mode, path, isDev } = options

  return {
    mode,
    entry: path.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: path.output,
      clean: true
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined
  }
}
