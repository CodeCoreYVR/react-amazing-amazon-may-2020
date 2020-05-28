import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';
import ProductShowPage from '../ProductShowPage';
import NewProductPage from '../NewProductPage'
import NavBar from '../NavBar';

class App extends Component {
  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/session`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'js@winterfell.gov',
        password: 'supersecret'
      })
    })
      .then(res => res.json())
      .then(user => console.log(user));
  }
  render() {
    return(
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path='/products' exact component={ ProductIndexPage }/>
          <Route path='/products/new' component={ NewProductPage } />
          <Route path='/products/:id' component={ ProductShowPage } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
