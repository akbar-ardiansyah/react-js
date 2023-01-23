import React, { Component, Fragment } from "react";
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
    Outlet
} from 'react-router-dom';
import Home from "../../component/route/Home"
import About from "../../component/route/About"
import Pricing from "../../component/route/Pricing"

class Routed extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <Link to="/">Home</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <Link to="/about">About</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <Link to="/pricing">Pricing</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        <h1 className="text-center">MENGGUNAKAN ROUTE</h1>
                        <hr />
                    </div>
                    <Routes>
                        <Route path="/" component={<Home />} />
                        <Route path="/about" component={<About />} />
                        <Route path="/pricing" component={<Pricing />} />
                    </Routes>
                </Fragment >
            </BrowserRouter>
        )

    }
}
export default Routed;