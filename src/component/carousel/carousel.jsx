import React from "react";
import "./carousel.css";
const carouselComponent = (props) => {
  return (
    <div className="row mb-1">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={props.carouselImages} className="img-fluid h-50 w-100 d-block" alt={props.carouselImages} />
          </div>
          <div className="carousel-item">
            <img src={props.carouselImage1} className="img-fluid h-50 w-100 d-block" alt={props.carouselImage1} />
          </div>
          <div className="carousel-item">
            <img src={props.carouselImage2} className="img-fluid h-50 w-100 d-block" alt={props.carouselImage2} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"><i className="bi-chevron-left"></i></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-prev-icon" aria-hidden="true"><i className="bi-chevron-right"></i></span>
        </button>
        {/* <div className="position-absolute top-100 start-50 translate-middle">
                  <div className="card w-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae, excepturi deleniti inventore earum perspiciatis optio et iste alias dolor.
                  </div>
                </div> */}
      </div>
    </div>
  );
}
carouselComponent.defaultProps = {
  carouselImages: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
  carouselImage1: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
  carouselImage2: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
}

export default carouselComponent;