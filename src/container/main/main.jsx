import React, { Component } from "react";
// import CardContent from "../../component/card/CardContent";
import Product from "../product/Product";
import Post from "../post/Post"
import LifeCycleComp from "../lifecycle/LifeCycleComp";



class main extends Component {
    render() {
        return (
            <div>
                {/* <Product /> */}
                {/* <LifeCycleComp /> */}
                <Post />
            </div>
        );
    }
}
export default main;
