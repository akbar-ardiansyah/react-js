
import React from "react";
import './navbar.css';

const navbar = (props) => {
    return(
    <div className="fixed-top">
        <div className="container-fluid bg-body-secondary">
            <div className="ps-4 pt-1 pb-1 fs-6 fw-light">
                <small>
                   Download Tokopedia App
                </small>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                    <a className="navbar-brand ps-4" href="#">
                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt="" />
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
                                <input className="form-control" type="search" placeholder="Cari di tokopedia" aria-label="Search"/>
                            </form>
                       </li>
                    </ul>
                        <button className="btn btn-outline-success" type="submit">Masuk</button>
                        <button className="btn btn-success" type="submit">Daftar</button>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default navbar;