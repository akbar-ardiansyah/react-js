import React from "react";

const BlockPost = (props)=>{
    return(
        <div className="blog-post row">
            <div className="post-content col-8">
                <h2>{props.title}</h2>
                <p>{props.excerpt}</p>
                <small>
                    Post By <a href="#">{props.author}</a>
                    <span className="text-secondary"> 13 Menit yang lalu</span>
                </small>
            </div>
            <div className="post-img col-3 my-auto">
                <img src="https://source.unsplash.com/random/300x300?programing" alt="" className="img-fluid" />
            </div>
        </div>
    )
}



BlockPost.defaultProps = {
    title : "title here!",
    excerpt : "excerpt here!",
    author : "author here!"
}

export default BlockPost;