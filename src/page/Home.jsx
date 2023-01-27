import React, { Component, Fragment } from "react";
class Home extends Component {
    render() {
        return (
            <Fragment>
                <section className="hero-section ryon-section">
                    <div className="position-absolute start-50 top-50 translate-middle">
                        <h1 className="text-center align-ite">Belajar React</h1>
                        <h1 className="fw-lighter text-center text-white">Pustaka JavaScript untuk membangun antarmuka pengguna</h1>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col text-black-50">
                                <div className="h5">
                                    Deklaratif
                                </div>
                                Bereaksi membuatnya mudah untuk membuat UI interaktif. Rancang tampilan sederhana untuk setiap status dalam aplikasi Anda, dan React akan memperbarui dan merender komponen yang tepat secara efisien saat data Anda berubah.
                                Tampilan deklaratif membuat kode Anda lebih dapat diprediksi dan lebih mudah di-debug.
                            </div>
                            <div className="col text-black-50">
                                <div className="h5">
                                    Berbasis Komponen
                                </div>
                                Membangun komponen terenkapsulasi yang mengelola statusnya sendiri, lalu menyusunnya untuk membuat UI yang kompleks.
                                Karena logika komponen ditulis dalam JavaScript, bukan template, Anda dapat dengan mudah meneruskan data yang kaya melalui aplikasi Anda dan menjaga status dari DOM.
                            </div>
                            <div className="col text-black-50">
                                <div className="h5">
                                    Belajar Sekali, Tulis Di Mana Saja
                                </div>
                                Kami tidak membuat asumsi tentang kumpulan teknologi Anda yang lain, sehingga Anda dapat mengembangkan fitur-fitur baru di React tanpa menulis ulang kode yang ada.
                                React juga dapat merender di server menggunakan Node dan menjalankan aplikasi seluler menggunakan React Native .
                            </div>

                        </div>
                        <div className="card bg-dark text-white">
                            <div className="card-title text-danger">
                                Notice!
                            </div>
                            <div className="card-body">
                                Halaman ini di Render dari file <br /> <span className="text-warning">src/component/route/home.jsx</span>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default Home;