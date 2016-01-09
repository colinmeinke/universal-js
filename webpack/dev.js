import webpack from 'webpack';

export default {
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
    }),
  ],
};
