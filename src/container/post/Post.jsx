import React, { Component, Fragment } from "react";
import BlockPost from "../../component/blockpost/Blockpost";
import "./Post.css";
import axios from "axios";


class Post extends Component {
    state = {
        // looping data dari jason
        blockPost: []
    }
    componentDidMount() {
        // parse dengan metode fetch, data dari API dan mengembalikan JSON ke dalam state BlockPost 
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             blockPost: json
        //         })
        //     })
        // parse mengunakan AXIOS sama halnya dengan contho di atas
        axios.get('http://localhost:3004/posts')
            .then((result) => {
                console.log(result.data);
                this.setState({
                    blockPost: result.data
                })
            })
        // kelebihan axios memiliki   kelebihan  yaitu dia menyimpat token di headers
    }
    render() {
        return (
            <Fragment>
                {
                    // melakukan maping agar data mudah di panggil
                    this.state.blockPost.map(blockpost => {
                        return (
                            // cotoh pemanggilan data berbentuk object pada map
                            <a href="#" className="blockpost-anchor">
                                <BlockPost key={blockpost.id} title={blockpost.title} excerpt={blockpost.body} authors={blockpost.authors} />
                                {/* <BlockPost key={blockpost.id} title={blockpost.title} excerpt={blockpost.body.length < 80 ? blockpost.body.substring(0, 200) : blockpost.body.substring(0, 200) + " ..."} authors="Rahmad" /> */}
                            </a>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default Post;