import React, { Fragment } from "react";
import "./Main.css"
import SideBar from "./Sidebar";
import NavbarTop from "./Navbartop";

const main = () => {
    return (
        <Fragment>
            <NavbarTop />
            <SideBar />
            <div className="wrapper-content">
                {/* <h1>
                    bamms residence C.1.D
                </h1>
                <small>jimcal@email.com</small> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta aliquam veniam laborum ducimus quod quo totam nesciunt dolores fugiat ipsa ipsam rerum culpa, delectus ratione eveniet quasi sit. Molestias?
                        </div>
                        <div className="col">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas corporis impedit officia ullam harum laboriosam, ex cumque rem praesentium, labore enim numquam! Dolorum amet, incidunt consectetur laboriosam saepe eaque?
                        </div>
                        <div className="col-lg-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea perspiciatis autem! Tempora, quis dignissimos. Quia quaerat alias vitae, quod recusandae ratione eos, sint cumque doloribus repellendus veritatis corrupti nobis?
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default main