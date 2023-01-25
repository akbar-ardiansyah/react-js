import React, { Component } from "react";

class Videos extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <iframe src="https://drive.google.com/file/d/1fldk8VZykSBF7nNVll7mXTlgDdunVnDV/preview" width="600" height="600" allow="autoplay"></iframe>
                    </div>
                    <div className="col">
                        <iframe src="https://drive.google.com/file/d/14CarzwIvAgMsHdR6DicMojWIoEDkIj_t/preview" width="600" height="600" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Videos;