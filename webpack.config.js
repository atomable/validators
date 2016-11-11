module.exports = {
  entry: {
    validators: ['./src/validators.js'],
  },
  output: {
    filename: '/[name].js',
    path: __dirname + '/dist', // eslint-disable-line
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  module: {
    loaders: [{
      test: /^.+.(jsx?|esx?)$/,
      exclude: '/(node_modules|bower_components|.map)/',
      loader: 'babel',
      query: {
        presets: [
          'latest',
          'stage-0',
        ],
      },
    }],
  },
};
