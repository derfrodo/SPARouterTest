import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import { Posts } from "../app2Comps/AppComponents";

declare var module: { hot: any };

const rndr = (NextComponent: JSX.Element) => {
    const rootEl = document.getElementById("app");
    const domElem = (<AppContainer>
        {NextComponent}
    </AppContainer>);
    render(domElem, rootEl);
};

if (module.hot) {
    module.hot.accept("../app2Comps/AppComponents", () => {
        rndr(<Posts />);
    });
}

rndr(<Posts />);
