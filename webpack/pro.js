import webpack from 'webpack';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';

import defaultConfig from './default';

export default {
  ...defaultConfig,
  module: {
    loaders: [
      ...defaultConfig.module.loaders,
      {
        loader: ExtractTextWebpackPlugin.extract(
          'style',
          'css?modules&importLoaders=1!postcss'
        ),
        test: /\.css$/,
      },
    ],
  },
  plugins: [
    new ExtractTextWebpackPlugin( 'styles.min.css' ),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      'process.env.NODE_ENV': JSON.stringify( 'production' ),
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false,
      },
    }),
  ],
};
