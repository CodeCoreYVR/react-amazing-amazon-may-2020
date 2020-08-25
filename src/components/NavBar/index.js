import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ currentUser }) {
  return(
    <nav>
      <NavLink to='/'>Home</NavLink>
      ||
      <NavLink to='/products'>Product Index</NavLink>
      ||
      {currentUser ? (
        <>
          <NavLink to='/products/new'>Product New Page</NavLink>
          ||
          <span>Welcome, {currentUser.full_name}</span>
        </>
      ) : (
        <NavLink to='/login'>Sign In</NavLink>
      )}
    </nav>
  )
}

export default NavBar
