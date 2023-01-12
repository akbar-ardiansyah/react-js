import React,{Component,Fragment} from "react";
import BlockPost from "../../component/blockpost/Blockpost";
import "./Post.css";

class Post extends Component {
    state ={
        blockPost:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({
                blockPost : json
            })
        })
    }
    render(){
        return(
            <Fragment>
                {
                    this.state.blockPost.map(blockpost => {
                        return(
                            <BlockPost title={blockpost.title} excerpt={blockpost.body} authors="Rahmad" /> 
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default Post;