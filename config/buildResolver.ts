import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'
export function buildResolver (options: BuildOptions): ResolveOptions {
  const { path } = options
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [path.src, 'node_modules'],
    alias: {
      '@': path.src
    }
  }
}
