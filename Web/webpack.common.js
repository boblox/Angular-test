var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'app': './app/main.ts'
    },

    output: {
        filename: "./dest/[name].js"
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
          {
              test: /\.ts$/,
              loaders: [
                  {
                      loader: 'awesome-typescript-loader',
                      options: { configFileName: 'tsconfig.json' }
                  },
                  'angular2-template-loader',
                  'angular2-router-loader'
              ]
          },
          {
              test: /\.html$/,
              loader: 'html-loader',
              query: {
                  minimize: false,
                  //caseSensitive: true
              }
          },
          {
              test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
              loader: 'file-loader?name=/dest/[name].[ext]'
          },
          {
              test: /\.css$/,
              exclude: 'app',
              loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
          },
          {
              test: /\.css$/,
              include: 'app',
              loader: 'raw-loader'
          }
        ]
    },

    plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        'app', // location of your src
        {} // a map of your routes
      ),

      new ExtractTextPlugin('./dest/[name].css'),

      new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor', 'polyfills']
      }),

      //new HtmlWebpackPlugin({
      //    template: 'src/index.html'
      //})
    ]
};