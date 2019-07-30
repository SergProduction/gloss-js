const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dev = {
  devServer: {
    port: 2000,
    host: '0.0.0.0',
    compress: true,
    contentBase: "./dist",
    historyApiFallback: {
      from: /(\/\w+)+/,
      to: '/',
    },
  },
  devtool: 'source-map',
}

const prod = {}


const common = {
  context: __dirname,
  entry: './src/example.js',
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', 'src'],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.ejs`,
    })
  ],
}

module.exports = function(env, argv) {
  console.log(argv.mode)
  if (argv.mode === 'production') {
    return merge([
      common,
      prod,
    ])
  }
  if (argv.mode === 'development') {
    return merge([
      common,
      dev,
    ])
  }
}
