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
    // state kiriman dari props cardContent
    addToCart=(newValue)=>{
        this.setState({
            orders: newValue
        })
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
                <section className="container mt-6 ps-5 pe-5">
                <Carousel 
                    carouselImages="https://images.tokopedia.net/img/home/defaultbanner/59e9ecd0-b91b-40d4-aef8-b1057be0_auto_x2.jpg?ect=4g"
                    carouselImage1="https://images.tokopedia.net/img/NsjrJu/2020/9/25/ea701ee6-f36b-473d-b429-4d2a1da0713d.jpg?ect=4g"
                    carouselImage2="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/12/17/e6cee2d4-db9d-4bcd-9bb1-7e3689230c27.jpg.webp?ect=4g"
                    />
                    <CardPartial/>
                    {/* 
                    /* button addToCart
                    <button className="btn btn-dark me-5" onClick={this.addToCart}>add cart</button>
                    <button className="btn btn-dark" onClick={this.removeCart}>remove cart</button> */}
                <div className="row">
                 <CardContent 
                title="title 1" 
                dataImg="https://source.unsplash.com/random/300x300?shirt" 
                desc="Nesciunt eligendi officia exercitationem inventore nobis omnis non, quo nisi eius maiores fugit dignissimos quas recusandae. Consectetur!" 
                price="300"
                />
                <CardContent 
                title="title 2" 
                dataImg="https://source.unsplash.com/random/300x300?shoe" 
                desc="consectetur adipisicing elit. Nesciunt eligendi officia exercitationem inventore nobis omnis non, quas recusandae. Consectetur!"
                price="200"
                />
                <CardContent 
                title="title 3" 
                dataImg="https://source.unsplash.com/random/300x300?bikini" 
                desc="deserunt voluptatibus beatae voluptas distinctio, quo nisi eius maiores fugit dignissimos quas recusandae. Consectetur!"
                price="400"
                />  
                <CardContent 
                title="title 3" 
                dataImg="https://source.unsplash.com/random/300x300?jackets" 
                desc="deserunt voluptatibus beatae voluptas distinctio, quo nisi eius maiores fugit dignissimos quas recusandae. Consectetur!"
                price="400"
                />  
                <CardContent 
                title="title 3" 
                dataImg="https://source.unsplash.com/random/300x300?bag" 
                desc="deserunt voluptatibus beatae voluptas distinctio"
                price="400"
                />  
                </div>
                </section>
            </Fragment>
        );
    }
}

export default Product;



