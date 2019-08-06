import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

interface IProps {}

class Layout extends Component<IProps> {
  render() {
    return (
      <>
        <header className="">
          <nav className="teal">
            <div className="nav-wrapper container">
              <Link to="/">HOME</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <NavLink to="/feed">FEED</NavLink>
                </li>
                <li>
                  <NavLink to="/create-post">CREATE POST</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
