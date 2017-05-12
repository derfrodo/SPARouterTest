module.exports = {
    "scripts/index": [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:8080/",
        "webpack/hot/only-dev-server",
        "./scripts/index.tsx"
    ]
}