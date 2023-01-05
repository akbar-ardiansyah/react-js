import React,{Component, Fragment} from "react";

import CardPartial from "../../component/card/CardPartial";
import CardContent from "../../component/card/CardContent";
import Carousel from "../../component/carousel/carousel";
import Navbar from "../../component/navbar/navbar";
import './Product.css';

class Product extends Component{
    state ={
        orders:0
    }
    // stateFullComponent
    // contoh function update state
    // addToCart = ()=>{
    //    this.setState({
    //     orders : this.state.orders +1
    //    })
    // }
    // contoh function remove state
    // removeCart = () =>{
    //     this.setState({
    //         orders : this.state.orders - 1
    //     })
    // }
    render(){
        return(
            <Fragment>
                <Navbar
                order={this.state.orders}
                logo="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
                />
                <section className="container mt-6">
                <Carousel 
                    carouselImages="https://images.tokopedia.net/img/home/defaultbanner/59e9ecd0-b91b-40d4-aef8-b1057be0_auto_x2.jpg?ect=4g"
                    carouselImage1="https://images.tokopedia.net/img/NsjrJu/2020/9/25/ea701ee6-f36b-473d-b429-4d2a1da0713d.jpg?ect=4g"
                    carouselImage2="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/12/17/e6cee2d4-db9d-4bcd-9bb1-7e3689230c27.jpg.webp?ect=4g"
                    />
                    <CardPartial/>
                    <button className="btn btn-dark me-5" onClick={this.addToCart}>add cart</button>
                    <button className="btn btn-dark" onClick={this.removeCart}>remove cart</button>
                 <CardContent 
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
                />  
                </section>
            </Fragment>
        );
    }
}

export default Product;



