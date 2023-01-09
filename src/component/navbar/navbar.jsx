
import React from "react";
import './navbar.css';

const navbar = (props) => {
    return(
    <div className="fixed-top shadow-sm">
        <div className="container-fluid bg-body-secondary pt-1 pb-1">
            <span className="ps-4 fw-light text-start fs-small">
                <i className="bi-phone"></i> Download Tokopedia App
            </span>
            <span className="float-end fw-light pe-4">
                <a href="#" className="text-decoration-none pe-3 text-black fs-small">Tentang Tokopedia</a> 
                <a href="#" className="text-decoration-none pe-3 text-black fs-small">Mitra Tokopedia</a> 
                <a href="#" className="text-decoration-none pe-3 text-black fs-small">Mulai Berjualan</a>
                <a href="#" className="text-decoration-none pe-3 text-black fs-small">Promo</a>
                <a href="#" className="text-decoration-none pe-3 text-black fs-small">Tokopedia Care</a>
            </span>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                    <a className="navbar-brand ps-4" href="#">
                        <img src={props.logo} alt={props.logo} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse pe-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <small className="fw-light">
                                 Kategori
                                </small>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                       <li className="nav-item">
                            <form className="nav-link">
                                <div class="input-group search">
                                    <input className="form-control" type="search" placeholder="Cari di tokopedia" aria-describedby="basic-addon2" aria-label="Search"/>
                                    <span class="input-group-text" id="basic-addon2"><i className="bi-search"></i></span>
                                </div>
                            </form>
                       </li>
                    </ul>
                       <div className="position-relative nav-item me-3">
                            <div className="nav-link text-secondary">
                                <i className="bi-bag-fill"></i>
                                <div className="counter">{props.order}</div>
                            </div>
                       </div>
                        <button className="btn btn-outline-success btn-sm" type="submit">Masuk</button>
                        <button className="btn btn-success btn-sm" type="submit">Daftar</button>
                </div>
            </div>
        </nav>
    </div>
    );
}
navbar.defaultProps ={
    order : 0,
    logo : "%PUBLIC_URL%/logo192.png"
}
export default navbar;