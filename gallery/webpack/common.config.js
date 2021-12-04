module.exports = {
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
};
