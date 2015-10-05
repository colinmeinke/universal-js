const path = require( 'path' );
const webpack = require( 'webpack' );

const babelConfig = {
  "stage": 1,
};

module.exports = {
  entry: './src/client',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
  },
  output: {
    path: path.resolve( __dirname, '..', '..', 'dist' ),
    filename: 'client.min.js',
  },
  module: {
    loaders: [{
      loaders: [ `babel?${ JSON.stringify( babelConfig )}` ],
      test: /\.js$/,
    },
    {
      loaders: [ 'json' ],
      test: /\.json$/,
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false,
      },
    }),
  ],
};

