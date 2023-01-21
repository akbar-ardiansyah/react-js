import React, { Component, Fragment, lazy } from "react";
import Post from "../post/Post"
import Product from "../product/Product";
import LifeCycleComp from "../lifecycle/LifeCycleComp";
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     Link,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const Post = lazy(() => import('../product/Product'))
// import { Routes, Route } from 'react-router-dom'
// import LifeCycleComp from "../lifecycle/LifeCycleComp";

class Home extends Component {
    state = {
        showComponent: true
    }
    // componentDidMount pencopotan component
    componentDidMount() {
        // setTimeout(()=>{
        //     this.setState({
        //      showComponent: false
        //     })
        //     // window.location.href="https://google.com";
        // }, 15000)
    }
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" component={LifeCycleComp} />
                    <Route path="/product" component={Product} />
                    <Route path="/LifeCycleComp" component={LifeCycleComp} />
                </Routes>
            </Router>
        )
    }

}

export default Home;