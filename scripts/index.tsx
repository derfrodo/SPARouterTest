import * as React from "react";
import { render as Render } from "react-dom";

import App from "./App";
declare var module: { hot: any };

const {AppContainer} = require("react-hot-loader");



const render = (comp: any) => {
    const rootEl = document.getElementById("app");

    const domElem = (<AppContainer>
        {comp}
    </AppContainer>);

    Render(domElem, rootEl);
};


if (module.hot) {
    module.hot.accept("./App", () => { render(<App />); });
}

render(<App />);
