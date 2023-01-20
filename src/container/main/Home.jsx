import React, { Component, Fragment } from "react";
import Post from "../post/Post"
import Product from "../product/Product";
import LifeCycleComp from "../lifecycle/LifeCycleComp";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
            <BrowserRouter>
                <Fragment>
                    <Route path="/" component={Post} />
                    <Route path="/product" component={Product} />
                    <Route path="/LifeCycleComp" component={LifeCycleComp} />
                </Fragment>
            </BrowserRouter>
        )
    }

}

export default Home;