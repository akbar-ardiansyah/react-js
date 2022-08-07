import React,{Component} from "react";
import CardContent from "../../component/card/CardContent";
import Product from "../product/Product";
import LifeCycleComp from"../lifecycle/LifeCycleComp";



class main extends Component {
    render() {
        return (
            <div>
                <Product />
                <LifeCycleComp/>
            </div>
        );
    }
}
export default main;
