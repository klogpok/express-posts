import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
 
interface IProps {
  
}

class Layout extends Component<IProps> {
  render() {
    return (
      <div className="">
        <header>                 
            <nav>
                <div className="nav-wrapper container">
                    <Link to="/">HOME</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">                    
                    <li><NavLink to="/feed">Feed</NavLink></li>
                    <li><NavLink to="/create-post">Create post</NavLink></li>                
                    </ul>
                </div>
            </nav>            
        </header>       
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;