// libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
// pages
import Main from './Main/Main';



// disini adalah tempat dimana komponen yang telah kita buat di render
// ada dua macam komponen yaitu statefullComponent dan statlessComponent
// berikut adalah contoh koponen default yang telah di buat sejak pertama kali di create projects

// ini adalah contoh  stafullcomponent
const StateLessComponent = () => {
  return <h1>Hello World</h1>
}
// dan ini contooh stateFullComponent
class StateFullComponent extends React.Component {
  render() {
    return <p>Hello world!</p>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// penggunaan route pada file index
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/main' element={<Main />} />
//         <Route path='/routed' element={<Routed />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();