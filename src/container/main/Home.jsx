import React, { Component, Fragment, lazy } from "react";
import Post from "../post/Post"
import Product from "../product/Product";
import LifeCycleComp from "../lifecycle/LifeCycleComp";
import {
    BrowserRouter,
    Route,
    Link,
    Routes
} from 'react-router-dom';


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
            <BrowserRouter>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/product">product</Link>
                            </li>
                            <li>
                                <Link to="/lifecycle">lifecycle</Link>
                            </li>
                        </ul>
                    </nav>

                </div>
                <Routes>
                    <Route path="/" element={Post} />
                    <Route path="/product" element={Product} />
                    <Route path="/lifecycle" element={<LifeCycleComp />} />
                </Routes>
            </BrowserRouter >
        )
    }

}

export default Home;