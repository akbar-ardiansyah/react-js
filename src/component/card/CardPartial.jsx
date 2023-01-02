import React from "react";
import './card.css';

const CardPartial = (props)=>{
return(
    <div className="card">
        <div className="row">
            <div className="col" >
                <div className="card-title h3">{props.cardTitle1}</div>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <ul className="d-flex">
                                    <li>
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                            </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                            </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                            </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                            </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <ul className="d-flex">
                                        <li>
                                            <a href="#">
                                                <div className="card">
                                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div>
                                                </div>
                                                </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="card">
                                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div>
                                                </div>
                                                </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="card">
                                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div>
                                                </div>
                                                </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="card">
                                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div>
                                                </div>
                                                </a>
                                        </li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <ul className="d-flex">
                                        <li>
                                            <a href="#">
                                                <div className="card">
                                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div>
                                                </div>
                                                </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="card">
                                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div>
                                                </div>
                                                </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="card">
                                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div>
                                                </div>
                                                </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="card">
                                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div>
                                                </div>
                                                </a>
                                        </li>
                                </ul>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"><i className="bi-chevron-left"></i></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"><i className="bi-chevron-right"></i></span>
                        </button>
                    </div>
            </div>
            <div className="col">
            <div className="card-title h3">{props.cardTitle2}</div>
            </div>
        </div>
    </div>
);
}

CardPartial.defaultProps ={
    cardTitle1 : "title",
    cardTitle2 : "title",

}

export default CardPartial;