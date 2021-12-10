import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from "../../images/logo.png";
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  const linkStyle = {
    fontSize: 20,
    margin: "1rem",
    color: 'white'
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <span className='profileButton'>
        {sessionUser && `Welcome, ${(sessionUser.username).toUpperCase()}!`}
        <ProfileButton user={sessionUser} />
      </span>
    );
  } else {
    sessionLinks = (
      <>
        <li>
          <NavLink
            to="/login"
            style={linkStyle}
          >Log In</NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            style={linkStyle}
          >Sign Up</NavLink>
        </li>
      </>
    );
  }

  return (
    <div className="navBar">
      {!sessionUser && <div className='logo'><img src={logo} alt=""></img></div>}
      <ul>
        <li>
          <NavLink
            exact to="/"
            style={linkStyle}
          >
            {!sessionUser && 'Home'}
            {sessionUser && <i className="fas fa-home" />}
          </NavLink>
        </li>
        {isLoaded && sessionLinks}
      </ul>
    </div>
  );
}

export default Navigation;
