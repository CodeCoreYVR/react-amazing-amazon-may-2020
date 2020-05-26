import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductDetails from './components/ProductDetails';
import ReviewDetails from './components/ReviewDetails';

import prodcutData from './data/product';
import reviewData from './data/review';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ProductDetails {...prodcutData}/>
    <ReviewDetails {...reviewData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
