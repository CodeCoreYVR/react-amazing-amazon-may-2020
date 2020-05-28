import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';
import ProductShowPage from '../ProductShowPage';
import NavBar from '../NavBar';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <NavBar/>
        <Route path='/products' exact component={ ProductIndexPage }/>
        <Route path='/products/:id' component={ ProductShowPage } />
      </BrowserRouter>
    )
  }
}

export default App
