const autoprefixer = require("autoprefixer");

module.exports = {
    rules: [
        {
            test: /\.tsx?$/,
            use: [
                { loader: "babel-loader" },
                {
                    loader: "ts-loader"
                },
                {
                    loader: "tslint-loader",
                    options: {
                        failOnHint: false,
                        configuration: require("../tslint.json")
                    }
                }
            ],
            exclude: /node_modules/
        },
        {
            test: /\.less$/,
            use: [
                { loader: "style-loader", options: { sourceMap: true } },
                { loader: "css-loader", options: { sourceMap: true, importLoaders: 1 } },
                { loader: "postcss-loader", options: { plugins: (loader) => [autoprefixer({ browsers: ["last 2 versions"] })] } },
                { loader: "less-loader" }
            ]
        }

    ]
}