import React, { Component, Fragment } from "react";
import {
    BrowserRouter,
    Route,
    Link,
    Routes
} from 'react-router-dom';
import Main from "../main/main"

class Routed extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1 className="text-center">MENGGUNAKAN ROUTE</h1>
                    <hr />
                </div>
                <BrowserRouter>
                    <Route path="/" component={Main} />
                </BrowserRouter>
            </Fragment>
        )

    }
}
export default Routed;