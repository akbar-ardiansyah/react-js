import React,{Component,Fragment} from "react";
import BlockPost from "../../component/blockpost/Blockpost";
import "./Post.css";

class Post extends Component {
    state ={
        // looping data dari jason
        blockPost:[]
    }
    componentDidMount(){
        // parse data dari API dan mengembalikan JSON ke dalam state BlockPost 
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
                    // melakukan maping agar data mudah di panggil
                    this.state.blockPost.map(blockpost => {
                        return(
                            // cotoh pemanggilan data berbentuk object pada map
                            <a href="#" className="blockpost-anchor">
                            <BlockPost key={blockpost.id} title={blockpost.title} excerpt={blockpost.body} authors="Rahmad" /> 
                            </a>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default Post;