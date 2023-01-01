import React from "react";
import "./carousel.css";
const carouselComponent = (props)=>{
    return(
      <div id="carouselExampleIndicators" class="carousel slide">
         <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={props.carouselImages} className="img-fluid h-50 w-100 d-block" alt={props.carouselImages}/>
            </div>
            <div class="carousel-item">
              <img src={props.carouselImage1} className="img-fluid h-50 w-100 d-block" alt={props.carouselImage1}/>
            </div>
            <div class="carousel-item">
              <img src={props.carouselImage2} className="img-fluid h-50 w-100 d-block" alt={props.carouselImage2}/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
    );
  }
  carouselComponent.defaultProps = {
    carouselImages : "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
    carouselImage1 : "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
    carouselImage2 : "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
  }

export default carouselComponent;