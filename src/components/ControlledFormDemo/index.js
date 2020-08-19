import React, { Component } from 'react';

class ControlledFormDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }  
  handleChange(event) {
    const { name, value } = event.currentTarget
    this.setState(state => {
      return {
        ...state,
        [name]: value,
      }
    })
  }
  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor="username">username</label>
            <input 
              type="text" 
              name="username"
              onChange={this.handleChange} 
              value={this.state.username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              onChange={this.handleChange} 
              value={this.state.password}
            />
          </div>
          <div>
            <input type="submit" value="Create" />
          </div>
        </form>
        <p>This is your name: {this.state.username}</p>
        <p>Your password is {this.state.password.length} characters long</p>
      </>
    )
  }
  
}

export default ControlledFormDemo
