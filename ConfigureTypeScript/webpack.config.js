const path = require('path');

module.exports = {
    entry: {
        home: './Scripts/Pages/Home.ts',
        about: './Scripts/Pages/About.ts'
    },
    mode: 'production',
    optimization: {
        minimize: false
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
        filename: '[name].js',
        path: path.resolve(__dirname, 'wwwroot/js'),
    }
};


