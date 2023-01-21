import React, { Component, Fragment, lazy } from "react";
import Post from "../post/Post"
import Product from "../product/Product";
import LifeCycleComp from "../lifecycle/LifeCycleComp";
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

// const Post = lazy(() => import('../post/Post'));
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
            <Routes>
                <Route path='/' element={Product} />
                <Route path='/post' element={Post} />
            </Routes>

        )
    }

}

export default Home;