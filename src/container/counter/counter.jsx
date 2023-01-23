import React, { Component } from "react";
// import '../../component/card/CardContent.css';

class counter extends Component {
    state = {
        order: 0
    }
    // handleCounterChange=(newValue)=>{
    //     this.props.onCounterChange(newValue);
    // }
    // mengirim newValue ke halaman Product.jsx
    // addchart = (newValue) => {
    //     // this.props.addToCart(newValue)
    //     this.props.orders + 1
    // }
    handleClickMax = () => {
        this.setState({
            order: this.state.order + 1
        })
    }
    handleClickMin = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            })
        }
    }
    render() {
        return (
            <div className="button">
                <button onClick={this.addchart}>add to cart</button>
                <div className="form">
                    <button className="min" onClick={this.handleClickMin} >-</button>
                    <input type="text" readOnly value={this.state.order} />
                    <button className="max" onClick={this.handleClickMax}>+</button>
                </div>
            </div>
        );
    }
}

export default counter;