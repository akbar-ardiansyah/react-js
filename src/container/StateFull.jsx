import React from "react";

class StateFull extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            desc: ""
        };
    }
    render() {
        return (
            <div className="card">
                <div className="title">{this.state.title}</div>
                <img src={this.state.image} alt="asd" className="images" />
                <div className="desc">{this.state.desc}</div>
            </div>
        );
    }
}
export default StateFull;