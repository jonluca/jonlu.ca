module.exports = {
    entry: './js/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /fonts/,
                loaders: [
                    'url-loader'
                ]
            },
            {
                test: /images/,
                loaders: [
                    'url-loader'
                ]
            }
        ]
    }
};