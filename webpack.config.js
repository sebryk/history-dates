const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.(ts|tsx)$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
         },
      ],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.svg'],
      alias: {
         '@': path.resolve(__dirname, 'src'),
      },
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html',
      }),
   ],
   devServer: {
      static: {
         directory: path.join(__dirname, 'public'),
      },
      port: 3000,
      hot: true,
   },
};
