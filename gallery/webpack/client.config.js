const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./common.config');

module.exports = {
  ...commonConfig,
  module: {
    rules: [
      ...commonConfig.module.rules,
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  entry: path.resolve(__dirname, '../client/client.tsx'),
  output: {
    filename: `[${
      process.env.NODE_ENV === 'production' ? 'contenthash' : 'name'
    }].js`,
    chunkFilename: `[${
      process.env.NODE_ENV === 'production' ? 'contenthash' : 'name'
    }].js`,
    path: path.resolve(__dirname, '../build/client'),
  },
  plugins: [
    ...commonConfig.plugins,
    new MiniCssExtractPlugin({
      filename: `[${
        process.env.NODE_ENV === 'production' ? 'contenthash' : 'name'
      }].css`,
    }),
  ].filter(Boolean),
};
