export interface BuildPath {
	entry: string,
	output: string,
	html: string,
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
	mode: BuildMode,
	path: BuildPath,
	isDev: boolean,
	port: number
}

export interface BuildEnv {
	mode: BuildMode,
	port: number
}