module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
}