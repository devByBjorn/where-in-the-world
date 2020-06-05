const path = require('path')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' })
}

module.exports = (env) => {
  const inProduction = env === 'production'

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,

        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },

      },
      ]
    },
    devtool: inProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      disableHostCheck: true,
      historyApiFallback: true,
      publicPath: '/dist'
    },
    mode: 'development'
  }
}
