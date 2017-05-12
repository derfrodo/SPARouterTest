const { AppContainer } = require("react-hot-loader");
import * as React from "react";
import ReactDOM from "react-dom";

// var App = require("./App");
import App from "./App";

declare var module: { hot: any };

var rndr = (NextComponent: JSX.Element) => {
    const rootEl = document.getElementById("app");
    const domElem = (<AppContainer>
        {NextComponent}
    </AppContainer>);
    ReactDOM.render(domElem, rootEl);
    console.log("X");
};

if (module.hot) {
    module.hot.accept('./App', () => {
        console.log("sowas");
        rndr(<App />)
    });
}

rndr(<App />);
