import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
// const { AppContainer } = require("react-hot-loader");

// var App = require("./App");
import { SomeComp } from "./SomeComp";

declare var module: { hot: any };

const rndr = (NextComponent: JSX.Element) => {
    const rootEl = document.getElementById("app");
    const domElem = (<AppContainer>
        {NextComponent}
    </AppContainer>);
    render(domElem, rootEl);
};

if (module.hot) {
    module.hot.accept("./SomeComp", () => {
        // const Next = require("./SomeComp");

        rndr(<SomeComp />);
    });
}

rndr(<SomeComp />);
