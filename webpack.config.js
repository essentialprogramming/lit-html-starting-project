const path = require('path');

module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, './'),
        filename: "webcomponents.js"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                // Only run `.js` and `.jsx` files through Babel
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/preset-env", {
                                "targets": {
                                    "esmodules": true,
                                }
                            }],
                            "@babel/preset-react"
                        ]
                    }
                }]
            }
        ],
    }
};
