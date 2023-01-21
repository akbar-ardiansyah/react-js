import React, { Fragment } from "react";
import "./Main.css"
import SideBar from "./Sidebar";

const main = () => {
    return (
        <Fragment>
            <SideBar />
            <div className="wrapper-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus officia nam nemo sequi nulla excepturi debitis id repellendus voluptates, ea dolorum nostrum, eaque quaerat mollitia ab molestiae? Dolorum, sint sit!
            </div>
        </Fragment>
    );
}

export default main