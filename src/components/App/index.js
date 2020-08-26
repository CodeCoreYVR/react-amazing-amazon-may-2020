import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';
import ProductShowPage from '../ProductShowPage';
import NewProductPage from '../NewProductPage'
import SignInPage from '../SignInPage'
import NavBar from '../NavBar';
import AuthRoute from '../AuthRoute';
import { Session, User } from '../../requests';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isLoading: true,
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
          currentUser: user,
        });
      }
      this.setState({ isLoading: false });
    })
  }

  destroySession() {
    Session.destroy().then(() => this.setState({ currentUser: null }));
  }

  render() {
    const { currentUser, isLoading } = this.state;
    return isLoading ? <main>Loading...</main> : (
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
          <AuthRoute 
            isAuthenticated={currentUser}
            path='/products' 
            exact 
            component={ ProductIndexPage }
          />
          <AuthRoute 
            isAuthenticated={currentUser}
            path='/products/new' 
            exact
            component={ NewProductPage } 
          />
          <AuthRoute 
            isAuthenticated={currentUser}
            path='/products/:id' 
            component={ ProductShowPage } 
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
