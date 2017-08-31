var webpack = require("webpack");

module.exports = {
    context : __dirname,
    entry : './web/assets/js/entry/entry.js',
    output : {
        path : __dirname+'/web/assets/js',
        filename : 'final.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader'
            },
            {
                test : /\.html$/,
                loader : 'html'
            },
            {
                test : /\.css$/,
                loader : 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
            "Hammer": "hammerjs/hammer"
        })
    ]
}