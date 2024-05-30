const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:  {
    index: './src/index.js',
    printForm: './src/print.js',
    checkRequired: './src/components/requiredValidation.js',
    deleteDivError: './src/components/deleteDivError.js',
    deleteErrorMessages: './src/components/deleteError.js',
    passwordValidation: './src/components/password-validation.js',
    printEmoji: './src/components/printEmoji.js',
    showError: './src/components/showError.js',
    zipValidation: './src/components/zipCodeValidation.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
      },
    ],
  },
};