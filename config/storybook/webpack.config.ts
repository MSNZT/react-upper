import webpack, {RuleSetRule} from 'webpack';
import path from 'path';
import {BuildPath} from "../build/types/config";
import {cssLoader} from "../build/Loaders/cssLoader";

export default ({config}: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    output: '',
    html: '',
    entry: '',
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
  
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i
      };
    }
    
    return rule;
  });
  
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(cssLoader(true));
  
  return config;
};
