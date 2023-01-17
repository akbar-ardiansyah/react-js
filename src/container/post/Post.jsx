import React, { Component, Fragment } from "react";
import BlockPost from "../../component/blockpost/Blockpost";
import Tables from "../../component/table/Table";
import "./Post.css";
import axios from "axios";


class Post extends Component {
    state = {
        // looping data dari jason
        blockPost: [],
        formPost: {
            id: 1,
            userId: 1,
            title: "",
            body: "",

        }
    }
    getPostAPi = () => {
        // parse mengunakan AXIOS sama halnya dengan contho di atas
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((result) => {
                // console.log(result.data);
                this.setState({
                    blockPost: result.data
                })
            }, (err) => {
                document.getElementById('root').innerHTML = `<h1 style="text-align:center; padding:30px 0;">SERVER UNAVAILABLE!</h1><hr><h3 style="text-align:center; padding:30px 0;">${err}</h3>`;
            })
        // kelebihan axios memiliki   kelebihan  yaitu dia menyimpat token di headers
    }
    // fungsi hapus data
    hapusData = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((response) => {
            // alert(response.data)
            alert("STATUS :" + response.statusText + " data berhasil dihapus!")
            this.getPostAPi()
        })

    }
    // pemasanagan komponent
    componentDidMount() {
        // parse dengan metode fetch, data dari API dan mengembalikan JSON ke dalam state BlockPost 
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             blockPost: json
        //         })
        //     })
        this.getPostAPi()

    }

    // insert data
    // pada saat fungsi ini di jalankan pastikan form / inputan terhubung 
    // maka dari itu  kita perlu memanggil fungsi ini pada inputan yang  di pilih
    // dan mencoba dengan cara di melihat  pada consol  terlebih dahulu
    onChangeInput = (event) => {
        // meduplikasi atau membuat state baru selanjutnya di masukkan kedalam state lama yang akan di kirimkan
        let newFormPost = { ...this.state.formPost };
        let ids = new Date().getTime();
        newFormPost['id'] = ids;
        newFormPost[event.target.name] = event.target.value
        this.setState({
            formPost: newFormPost
        })
    }
    // tombol submit
    submitButton = () => {
        // mengirim data melalui axios dengan method post di dalamnya termasuk dua parameter
        // parameter pertama adalah url seperti coontoh di bawah
        // dan yang ke dua mengirim state
        axios.post('http://localhost:3004/posts', this.state.formPost).then((res) => {
            console.log(res);
            this.getPostAPi();
        }, (err) => {
            console.log(err)
        })
        console.log(this.state.formPost)
    }
    render() {
        return (
            <Fragment>
                <div className="mt-5 mb-5">
                    <div>
                        <h1>Implementasi Api Method  Get, Post, Update, Delete dan Put</h1>
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                FORM INPUT
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input name="title" type="text" className="form-control" placeholder="input title" onChange={this.onChangeInput} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Example textarea</label>
                                    <textarea className="form-control" rows="10" name="body" onChange={this.onChangeInput}></textarea>
                                </div>
                                <div className="mb-3">
                                    <button onClick={this.submitButton} type="submit">submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">author</th>
                                <th scope="col">title</th>
                                <th scope="col">body</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.blockPost.map(blockPost => {
                                    return (
                                        <Tables
                                            // mempersingkat props, kita dapat membungkusnya di dalam "data={blockPost}" 
                                            // "data={blockPost}" adalah state yang di hasilkan dari map
                                            // dan menambahkan "data" pada props pengirim, contoh pada file "table.jsx" pada baris ke 7 hingga 9
                                            key={blockPost.id}
                                            data={blockPost}
                                            // number={blockPost.id}
                                            // title={blockPost.title.length > 10 ? blockPost.title.substring(0, 10) + "..." : blockPost.title.substring(0, 10) + "..."}
                                            // excerpt={blockPost.body.length < 80 ? blockPost.body.substring(0, 30) + " ..." : blockPost.body.substring(0, 30) + " ..."}
                                            // authors={blockPost.authors}
                                            hapus={this.hapusData} />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="mt-5 mb-5 text-center">
                    <h1>Menampilkan data dengan method GET</h1>
                </div>
                {
                    // melakukan maping agar data mudah di panggil
                    this.state.blockPost.map(blockpost => {
                        return (
                            // cotoh pemanggilan data berbentuk object pada map
                            <a href="#" className="blockpost-anchor">
                                <BlockPost key={blockpost.id} title={blockpost.title} excerpt={blockpost.body} authors={blockpost.authors} />
                                {/* <BlockPost key={blockpost.id} title={blockpost.title} excerpt={blockpost.body.length < 80 ? blockpost.body.substring(0, 200) : blockpost.body.substring(0, 200) + " ..."} authors="Rahmad" /> */}
                            </a>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default Post;