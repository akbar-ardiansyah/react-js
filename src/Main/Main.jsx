// libraries
import React, { Component, Fragment } from "react";
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
    Outlet
} from 'react-router-dom';
// styling
import "../Main/Main.css"
// assets
import logo from '../logo.svg';
// pages or component
import Home from "../page/Home";
import Blog from "../page/Blog";
import Pricing from "../page/Pricing";
import Post from "../component/blockpost/Post";
// import Videos from "../../component/route/Video"

const Routed = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={logo} className="App-logo" width="50px" alt="logo" />
                            <span className="fs-2 text-primary align-middle fw-bolder">Belajar React</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <div className="nav-link">
                                        <Link to="/" className="text-decoration-none text-info">Beranda</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        <Link to="/blog" className="text-decoration-none text-info">Blog</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        {/* <Link to="/pricing" className="text-decoration-none text-info">Pricing</Link> */}
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        {/* <Link to="/post" className="text-decoration-none text-info">Post</Link> */}
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        {/* <Link to="/video" className="text-decoration-none text-info">Video</Link> */}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/blog" element={<Blog />} ></Route>
                        <Route path="/pricing" element={<Pricing />} ></Route>
                        <Route path="/post/:id" element={<Post />} ></Route>
                        {/*  <Route path="/video" element={<Videos />} ></Route> */}
                    </Routes>
                </section>
            </Fragment >
        </BrowserRouter>
    )
}
export default Routed