import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';
import ProductShowPage from '../ProductShowPage';
import NewProductPage from '../NewProductPage'
import SignInPage from '../SignInPage'
import NavBar from '../NavBar';
import { Session, User } from '../../requests';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    }
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    User.current().then(user => {
      if (user.id) {
        this.setState({ 
          currentUser: user
        });
      }
    })
  }

  destroySession() {
    Session.destroy().then(() => this.setState({ currentUser: null }));
  }

  render() {
    const { currentUser } = this.state;
    return(
      <BrowserRouter>
        <NavBar currentUser={currentUser} destroySession={this.destroySession} />
        <Switch>
          <Route 
            path='/login' 
            exact 
            render={routeProps => (
              <SignInPage {...routeProps} getCurrentUser={this.getCurrentUser} />
            )}
          />
          <Route path='/products' exact component={ ProductIndexPage }/>
          <Route path='/products/new' component={ NewProductPage } />
          <Route path='/products/:id' component={ ProductShowPage } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
