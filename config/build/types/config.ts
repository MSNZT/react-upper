export interface BuildPaths {
  entry: string
  output: string
  html: string
  src: string
}

export type BuildMode = 'production' | 'development'

export interface BuildOptions {
  mode: BuildMode
  path: BuildPaths
  isDev: boolean
  port: number
}

export interface BuildEnv {
  mode: BuildMode
  port: number
}
