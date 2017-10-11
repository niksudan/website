module.exports = {
  module: {
    rules: [{
        test: /\.scss$/,
        loaders: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
    ]
  } 
}