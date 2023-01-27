import React, { Component } from "react";
import "../blockpost/Post.css"

class Post extends Component {
    render() {
        return (
            <div className="container">
                <div className="row content-post">
                    <h1 className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <img src="https://source.unsplash.com/random/300x300?city" alt="asd" className="img-fluid" />
                    <article className="mt-5 post-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aliquid minus maiores obcaecati, ipsa pariatur! Porro vero perferendis consequatur ullam odio sunt? Autem, omnis sunt commodi accusamus quas fugiat ea nostrum dignissimos consequuntur asperiores quia, repellat reiciendis perspiciatis in ipsum accusantium voluptatem? Dolorum iure voluptatum deserunt impedit similique voluptate quis recusandae aspernatur quas, dicta delectus necessitatibus totam unde cumque quo quidem itaque sunt provident deleniti, ducimus voluptatibus. Error laborum illum blanditiis laudantium et temporibus animi totam quos ipsa magnam. Praesentium facere ex autem sed cumque, saepe repellat amet velit blanditiis nesciunt necessitatibus repellendus? Est repudiandae at rem voluptas commodi delectus, quis sed reiciendis, in culpa voluptatum dolores. Sed mollitia modi, fugit perspiciatis quasi magni minus architecto quia cum cumque quis exercitationem, voluptatibus ipsa ex, provident debitis deserunt? Ducimus tempora ipsum nulla! Exercitationem aspernatur debitis eius dolores? Eligendi delectus laboriosam nam veniam atque hic sequi! Veritatis officiis doloremque minus totam? Tempore ab voluptates laboriosam fuga deleniti, quia minima assumenda explicabo dolore officiis praesentium! Modi illum consequuntur labore officiis ex optio, expedita neque, vero vitae nostrum dolore assumenda cumque excepturi porro ipsa est error tenetur? Explicabo totam aperiam nesciunt commodi, earum atque, est dolorem id quia maxime, laudantium perferendis dicta voluptates similique.
                    </article>
                    <div className="row">
                        <ul className="tag">
                            <li>
                                <div className="tags">Programming</div>
                            </li>
                            <li>
                                <div className="tags">Homie</div>
                            </li>
                            <li>
                                <div className="tags">Technology</div>
                            </li>
                            <li>
                                <div className="tags">#2022</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post;