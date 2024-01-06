import webpack, { RuleSetRule } from 'webpack'
import path from 'path'
import { BuildPaths } from '../build/types/config'
import { cssLoader } from '../build/Loaders/cssLoader'

export default async ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    html: '',
    entry: '',
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve = {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': paths.src
    }
  }
  
  config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
    // if (rule !== '...' && rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
    //   return { ...rule, exclude: /\.svg$/i }
    // }
    if(rule && typeof rule !== 'string' && '...') {
      return {...rule, exclude: /\.svg$/i}
    }
    return rule
  }
  )
  
  config.module.rules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack']
  })

  config.module.rules.push(cssLoader(true))

  return config
}
