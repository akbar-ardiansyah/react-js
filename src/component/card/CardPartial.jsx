import React from "react";
import './CardPartial.css';
import Category from "./Category";

const items = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
    'item 7',
]
const CardPartial = (props) => {
    return (
        <div className="card border border-0 shadow m-0 mt-4 mb-4">
            <div className="row">
                <div className="col">
                    <div className="card-title h3">{props.cardTitle1}</div>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <ul className="d-flex p-0">
                                    <li key="0">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?shirt" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li key="1">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?cap" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li key="2">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?sunglas" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li key="3">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?iwatch" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <ul className="d-flex  p-0">
                                    <li key="4">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?phone" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li key="5">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?airpod" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li key="6">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?shirt-png" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li key="7">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?shirt-png" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <ul className="d-flex  p-0">
                                    <li key="8">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?louis-viutton" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li key="9">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?gucci" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li key="10">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?uni-clo" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li key="11">
                                        <a href="#">
                                            <div className="card">
                                                <img src="https://source.unsplash.com/random/100x100?shirt-png" className="card-img-top" alt="..." />
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
                    <div className="card shadow-sm">
                        <ul className="d-flex under-list">
                            <li className="list-group-item d-flex justify-content-center ms-3 me-3 active">Pulsa</li>
                            <li className="list-group-item d-flex justify-content-center ms-3 me-3">Pulsa</li>
                            <li className="list-group-item d-flex justify-content-center ms-3 me-3">Pulsa</li>
                            <li className="list-group-item d-flex justify-content-center ms-3 me-3">Pulsa</li>
                            <li className="list-group-item d-flex justify-content-center ms-3 me-3">Pulsa</li>
                        </ul>
                        <div className="input-group row">
                            <div className="col">
                                <small>Nomor telepon</small>
                                <input type="text" aria-label="First name" className="form-control" placeholder="081234567890" />
                            </div>
                            <div className="col">
                                <small>Nominal</small>
                                <select name="" id="" className="form-select form-control">
                                    <option selected disabled></option>
                                    {items.map(item => (
                                        <option value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <Category />
            </div>
        </div>
    );
}

CardPartial.defaultProps = {
    cardTitle1: "title",
    cardTitle2: "title",

}

export default CardPartial;