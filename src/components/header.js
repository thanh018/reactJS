import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">ReactJS Tutorial</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Category</a>
            </li>
          </ul>
        </nav>
      );
    }
  }
  
  export default Header;