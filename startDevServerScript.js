const webpack = require("webpack");
var path = require("path");
const webpackDevServer = require("webpack-dev-server");

const wpdevconfig = require("./config/webpack.dev.config");
const devServerCnf = require("./config/webpack.dev.devserver");

const compiler = webpack(wpdevconfig);

const server = new webpackDevServer(compiler, devServerCnf);

let port = process.env.PORT || 8080;

server.listen(port, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log("Express app is listening on port " + port + ". Visit it at http://localhost:" + port + " ");
    if (result) {
        console.log(result)
    }
})

// // API Server

// var express = require("express");
// var http = require('http');

// var app = express();
// var srv = http.createServer(app);

// app.get("/api/posts", function (req, res) {
//     var data = {
//         posts: [
//             { id: 1, authorId: 1, author: "Stefan", content: "Ich habe einen dev server" },
//             { id: 2, authorId: 2, author: "Nina", content: "Das ist ja super." }
//         ]
//     }
//     res.json(data);
// });


// let prt = process.env.PORT || 8000;

// srv.listen(prt, "0.0.0.0", function () {
//     console.log("Express API is listening on port " + prt + ". Visit it at http://localhost:" + prt + " ");
// });