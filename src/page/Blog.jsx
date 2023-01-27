// libraries
import axios from "axios";
import React, { Component, Fragment } from "react";
// component
import BlockPost from "../component/blockpost/Blockpost";
import Ads from "../component/Ads/Ads"

class Blog extends Component {
    state = {
        blogPost: [],
    }
    getPostApi = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((result) => {
            // console.log(result.data);
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
    handleDetailPost = (id) => {
        console.log(id)
    }

    render() {
        return (
            <Fragment>
                <section>
                    <div className="container">
                        <h1>BlogPost</h1>
                        <div className="row">
                            <div className="col-md-10 col-sm-12 mx-auto">
                                {
                                    this.state.blogPost.map(blogPost => {
                                        return (
                                            <BlockPost key={blogPost.id}
                                                title={blogPost.title}
                                                excerpt={blogPost.body.length < 200 ? blogPost.body.substring(0, 200) : blogPost.body.substring(0, 200) + " ..."}
                                                authors="Rahmad"
                                                detailPost={this.handleDetailPost} />
                                        )
                                    })
                                }
                            </div>
                            <div className="col-md-2 mx-auto">
                                <div className="mt-5">
                                    <Ads />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default Blog;