import React from "react";
import "../blockpost/Blockpost.css";
const BlockPost = (props) => {
    return (
        <div className="block-post">
            <div className="row">
                <div className="col-8">
                    <h2>{props.title}</h2>
                    <p>{props.excerpt}</p>
                    <small>
                        Post By <a href="#">{props.author}</a>
                        <span className="text-secondary">{props.curentTime}</span>
                    </small>
                </div>
                <div className="post-img col-3 my-auto">
                    <img src={props.img} alt={props.alt} className="img-fluid" />
                </div>
            </div>
        </div>
    )
}
BlockPost.defaultProps = {
    title: "title here!",
    excerpt: "excerpt here!",
    author: "author here!",
    curentTime: "13 Menit yang lalu",
    img: "https://source.unsplash.com/random/300x300?programing",
    alt: "https://source.unsplash.com/random/300x300?programing"
}

export default BlockPost;