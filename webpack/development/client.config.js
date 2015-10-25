const path = require( 'path' );
const webpack = require( 'webpack' );

const config = require( '../../src/common/config' );

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

const externals = config.development.scripts.filter( script => {
  return script.import;
}).map( script => {
  return {[ script.import ]: script.identifier };
}).reduce(( prev, curr ) => {
  return Object.assign( prev, curr );
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client',
  ],
  externals: externals,
  output: {
    path: path.resolve( __dirname, '..', '..', config.dir.dist ),
    filename: 'client.js',
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
