const path = require('path');

module.exports = {
  entry: './src/popup.js',  // Tu archivo principal con imports
  output: {
    filename: 'popup.bundle.js',  // Archivo generado
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
};
 