const webpack = require("webpack");
var http = require('http');

const webpackDevServer = require("webpack-dev-server");

const wpdevconfig = require("./config/webpack.dev.config");

const compiler = webpack(wpdevconfig);

const server = new webpackDevServer(compiler,{
    publicPath: wpdevconfig.output.publicPath,
    historyApiFallback:true,
    https:true,
    hot:true,
    // headers:{"Access-Control-Allow-Origin":"https://localhost:fremderPort"}
});

let port = process.env.PORT || 8088;
server.listen(port , 'localhost', function(err, result){
    if(err){
        console.log(err);
    }
})

// const srv = http.createServer(server);

// srv.listen(port, "0.0.0.0", ()=>{
//         console.log("Express app is listening on port " + port + ". Visit it at http://localhost:" + port + " ");
// })