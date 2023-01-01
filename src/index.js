import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from './container/main/main';
import reportWebVitals from './reportWebVitals';


// disini adalah tempat dimana koomponen yang telah kita buat di render
// ada dua macam komponen yaitu statefullComponent dan statlessComponent
// berikut adalah contoh koponen default yang telah di buat sejak pertama kali di create projects

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();