import React from "react";
import './CardContent.css';

const CardContent = (props) => {
    return (
    <div className="wrapper">
        <div className="card">
            <img src={props.dataImg} alt={props.dataImg} className="images" />
            <div className="title">
                <div className="name">{props.title}</div>
                <div className="price">$ {props.price}</div>
            </div>
            <div className="desc">{props.desc}</div>
            <div className="button">
                <button>add to cart</button>
                <div className="form">
                <input type="number" />
                </div>
            </div>
        </div>
    </div>
    );
}

// default props ketika data tidak ada maka akan diisi default props
CardContent.defaultProps = {
    title: "title",
    dataImg: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
    desc: " ",
    price: " 0"
}

export default CardContent;