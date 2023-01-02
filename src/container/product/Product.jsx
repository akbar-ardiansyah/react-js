import React,{Component, Fragment} from "react";

import CardPartial from "../../component/card/CardPartial";
import CardContent from "../../component/card/CardContent";
import Carousel from "../../component/carousel/carousel";
import Navbar from "../../component/navbar/navbar";
import './Product.css';

class Product extends Component{
    state = {
    order:10
    }
    render(){
        return(
            <Fragment>
                <Navbar/>
                {/* <div className="content-wrapper">
                    <div className="header">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="" className="logo" />
                        <div className="troley">
                            <div className="counter">{this.state.order}</div>
                            <div className="icon"></div>
                        </div>
                    </div>
                </div> */}
                <section className="container mt-6">
                <Carousel 
                    carouselImages="https://images.tokopedia.net/img/home/defaultbanner/59e9ecd0-b91b-40d4-aef8-b1057be0_auto_x2.jpg?ect=4g"
                    carouselImage1="https://images.tokopedia.net/img/NsjrJu/2020/9/25/ea701ee6-f36b-473d-b429-4d2a1da0713d.jpg?ect=4g"
                    carouselImage2="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/12/17/e6cee2d4-db9d-4bcd-9bb1-7e3689230c27.jpg.webp?ect=4g"
                    />
                    <CardPartial/>
                {/* <CardContent 
                title="title 1" 
                dataImg="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" 
                desc="Nesciunt eligendi officia exercitationem inventore nobis omnis non, quo nisi eius maiores fugit dignissimos quas recusandae. Consectetur!" 
                price="300"
                />
                <CardContent 
                title="title 2" 
                dataImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" 
                desc="consectetur adipisicing elit. Nesciunt eligendi officia exercitationem inventore nobis omnis non, quas recusandae. Consectetur!"
                price="200"
                />
                <CardContent 
                title="title 3" 
                dataImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKH4iA4wP-Q6VKAAQm8SOrTAVQmvp70g0clZbu3uPuEjh_Fh7cdWzhamCD6zd8l8EDI8&usqp=CAU" 
                desc="deserunt voluptatibus beatae voluptas distinctio, quo nisi eius maiores fugit dignissimos quas recusandae. Consectetur!"
                price="400"
                /> */}
                </section>
            </Fragment>
        );
    }
}

export default Product;



