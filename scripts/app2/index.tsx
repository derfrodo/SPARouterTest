import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import { Posts } from "./AppComponents";

declare var module: { hot: any };

const rndr = (NextComponent: JSX.Element) => {
    const rootEl = document.getElementById("app");
    const domElem = (<AppContainer>
        {NextComponent}
    </AppContainer>);
    render(domElem, rootEl);
};

if (module.hot) {
    module.hot.accept("./AppComponents", () => {
        rndr(<Posts />);
    });
}

rndr(<Posts />);
