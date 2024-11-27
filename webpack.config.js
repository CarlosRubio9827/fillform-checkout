const path = require('path');

module.exports = {
  entry: './src/popup.js',  // Tu archivo principal con imports
  output: {
    filename: 'popup.bundle.js',  // Archivo generado
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,  // Aplica esta regla a archivos JavaScript
        include: path.resolve(__dirname, 'src'),  // Incluye todos los archivos de src
       }
    ]
  }
};
 