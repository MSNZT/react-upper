import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { cssLoader } from "../build/Loaders/cssLoader";

export default async ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    html: '',
    entry: '',
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  
  config.resolve = {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': paths.src
    }
  }
  // @ts-ignore
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    
    return rule;
  });
  
  // @ts-ignore
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  // @ts-ignore
  config.module.rules.push(cssLoader(true));
  
  return config;
};
