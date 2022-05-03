import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();//this comes from auth.js
  }
    
  return (
   
        <nav className="navbar navbar-expand-md">
          <div className='container-fluid'>
            <Link to="/">
              <h1>My Outdoor Space</h1>
            </Link>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end'>
                <li className='nav-item'>
                  {Auth.loggedIn() ? (
                    <>
                      <Link to="/profile" className='mx-5'>My Profile</Link>
                      <a href="/" onClick={logout}>
                        Logout
                      </a>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className='mx-5'>Login</Link>
                      <Link to="/signup" className='mx-5'>Signup</Link>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

  );
};

export default Header;