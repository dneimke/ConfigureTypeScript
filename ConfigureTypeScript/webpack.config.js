const path = require('path');

module.exports = {
    entry: {
        app: './Scripts/Pages'
    },
    mode: 'production',
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'app-bundle.js',
        path: path.resolve(__dirname, 'wwwroot/js'),
        library: 'sample',
        libraryTarget: 'umd'
    }
};


