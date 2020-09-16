const path = require('path');

module.exports = {
    entryPath: path.resolve(__dirname, '../src/app.js'),
    outputPath: path.resolve(__dirname, '../build'),
    sourcePath: path.resolve(__dirname, '../src'),
    staticPath: path.resolve(__dirname, '../src/static'),
    templatePath: path.resolve(__dirname, '../src/index.html'),
    varsCssPath: path.resolve(__dirname, '../src/styles/variables.scss'),
    fontsFolder: 'fonts',
    imagesFolder: 'images',
    store: path.resolve(__dirname, '../src/store')
}
