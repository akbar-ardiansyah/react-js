import React, { Component, Fragment } from "react";
import "./Route.css"
import logo from '../../logo.svg';
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
import Post from "../post/Post"

const Routed = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={logo} className="App-logo" width="50px" alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <div className="nav-link">
                                        <Link to="/" className="text-decoration-none text-info">Home</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        <Link to="/about" className="text-decoration-none text-info">About</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        <Link to="/pricing" className="text-decoration-none text-info">Pricing</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        <Link to="/post" className="text-decoration-none text-info">Post</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <h1 className="text-center">MENGGUNAKAN ROUTE</h1>
                    <hr />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />} ></Route>
                        <Route path="/pricing" element={<Pricing />} ></Route>
                        <Route path="/post" element={<Post />} ></Route>
                    </Routes>
                </div>
            </Fragment >
        </BrowserRouter>
    )
}
export default Routed