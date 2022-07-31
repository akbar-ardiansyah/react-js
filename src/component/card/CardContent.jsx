import React from "react";
import Counter from "../../container/counter/counter";
import './CardContent.css';


const CardContent = (props) => {
    // state= {
    //     order:0
    // }
    // handleCounterChange=(newValue)=>{
    //     this.setState({order:newValue})
    // }
    return (
    <div className="wrapper">
        <div className="card">
            <img src={props.dataImg} alt={props.dataImg} className="images" />
            <div className="title">
                <div className="name">{props.title}</div>
                <div className="price">$ {props.price}</div>
            </div>
            <div className="desc">{props.desc}</div>
            <Counter  />
        </div>
    </div>
    );
}

// default props ketika data tidak ada maka akan diisi default props
CardContent.defaultProps = {
    title: "title",
    dataImg: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
    desc: " ",
    price: " 0",
}

export default CardContent;