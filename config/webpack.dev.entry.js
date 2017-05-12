module.exports = {
    "views/home/index": [
        "react-hot-loader/patch",
        "webpack-dev-server/client?https://localhost:8088",
        "webpack/hot/only-dev-server",
        "./scripts/index.tsx"
    ]
}