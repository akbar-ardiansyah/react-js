// libraries
import axios from "axios";
import React, { Component, Fragment } from "react";
// component
import BlockPost from "../component/blockpost/Blockpost";

class Blog extends Component {
    state = {
        blogPost: [],
    }
    getPostApi = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((result) => {
            console.log(result.data);
            this.setState({
                blogPost: result.data
            })
        }, (err) => {
            document.getElementById('root').innerHTML = `<h1 style="text-align:center; padding:30px 0;">SERVER UNAVAILABLE!</h1><hr><h3 style="text-align:center; padding:30px 0;">${err}</h3>`;
        })
    }

    componentDidMount() {
        this.getPostApi()
    }
    render() {
        return (
            <Fragment>
                <section>
                    <div className="container">
                        <h1>BlogPost</h1>
                        <div className="col-10">
                            {
                                this.state.blogPost.map(blogPost => {
                                    return (
                                        // <BlockPost key={blogPost.id.toString()} title={blogPost.title} excerpt={blogPost.body} authors={blogPost.authors} />
                                        <BlockPost key={blogPost.id} title={blogPost.title} excerpt={blogPost.body.length < 200 ? blogPost.body.substring(0, 200) : blogPost.body.substring(0, 200) + " ..."} authors="Rahmad" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default Blog;