const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'main')  // ", 'filename'" if different from "index.js/jsx"
  },
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: path.join('app.js')
  },
  resolve: {
    alias: {
      '@': './src',
      'components': './src/components',
      'public': './public',
      'js': './public/js'
    },
    extensions: ['', '.js', '.css', '.vue', '.json', '.scss']
  },
  target: 'web',  // "web" - front, "node" - back
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { 
              modules: {
                localIdentName: "[local]"    //"[local]_[hash:base64:8]"
              }, 
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { 
              modules: {
                localIdentName: "[local]"    //"[local]_[hash:base64:8]"
              }, 
              esModule: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3300,
    hot: true,
    open: false
  }
};