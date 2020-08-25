import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';
import ProductShowPage from '../ProductShowPage';
import NewProductPage from '../NewProductPage'
import SignInPage from '../SignInPage'
import NavBar from '../NavBar';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path='/login' exact component={ SignInPage }/>
          <Route path='/products' exact component={ ProductIndexPage }/>
          <Route path='/products/new' component={ NewProductPage } />
          <Route path='/products/:id' component={ ProductShowPage } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
