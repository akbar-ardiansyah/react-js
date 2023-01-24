import React, { Component } from "react";

class Videos extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Cara menggunakan iframe dari goolge drive</h1>
                    <div className="col-md-6">
                        <iframe src="https://drive.google.com/file/d/1RyKJ0oZOTIBB6T8GAHkL7ZNwXCH8TrXy/preview" width="640" height="480" allow="autoplay"></iframe>
                    </div>
                    <div className="col">
                        <iframe src="https://drive.google.com/file/d/1jlurIWOyjoYgubf8XPSeh4lfc_WnuX5B/preview" width="640" height="480" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Videos;