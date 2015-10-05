const path = require( 'path' );
const webpack = require( 'webpack' );

const babelConfig = {
  "stage": 1,
  "plugins": [
    "react-transform"
  ],
  "extra": {
    "react-transform": {
      "transforms": [{
        "transform": "react-transform-hmr",
        "imports": [ "react" ],
        "locals": [ "module" ]
      }, {
        "transform": "react-transform-catch-errors",
        "imports": [ "react", "redbox-react/dist/redbox" ]
      }]
    }
  }
};

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/browser',
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
  },
  output: {
    path: path.resolve( __dirname, '..', '..', 'dist' ),
    filename: 'browser.js',
    publicPath: '/public/',
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
      __DEVELOPMENT__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};

