import React from "react";
import './CardContent.css';

const CardContent = (props) => {
    return (
    <div className="wrapper">
        <div className="card">
            <div className="title">{props.title}</div>
            <img src={props.dataImg} alt={props.dataImg} className="images" />
            <div className="desc">{props.desc}</div>
        </div>
    </div>
    );
}

// default props ketika data tidak ada maka akan diisi default props
CardContent.defaultProps = {
    title: "title",
    dataImg: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
    desc: " "
}

export default CardContent;