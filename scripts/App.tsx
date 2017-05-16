import * as React from "react";
import { BrowserRouter, Link, Route, RouteComponentProps } from "react-router-dom";
import { Home, Posts } from "./AppComponents";

export const App = (props) => {
    return (
        <BrowserRouter >
            <div>
                <h1>Wir sind eine Anwendung</h1>
                <Route exact path="/" component={Home} />
                <Route path="/Posts" component={Posts} />
            </div>
        </BrowserRouter>);
};
