import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import Card from './Cards/Cards';
import Nav from './Nav/NavUI';
import Top from './Top';
import Favthings from './FavThings';
import Footer from './Footer/Footer';
// import Animation from './Animation/ScrollRevealContainer';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Top />
    <Card />
    <Favthings />
    {/* <Animation /> */}
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
