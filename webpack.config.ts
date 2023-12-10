import { buildWebpackConfig } from './config/buildWebpackConfig'
import { type BuildEnv, type BuildPath } from './config/types/config'
import path from 'path'
import type webpack from 'webpack'

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    path: paths,
    isDev,
    port: PORT
  })
  return config
}
