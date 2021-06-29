import React, { Component } from 'react';
import {MenuItem} from "./MenuItem.js";
import './navBar.css';
import AuthOption from '../signin/AuthOption';
// import {Button} from '../signin/AuthOption';

class Navbar extends Component {
  state = {clicked: false}

    handleClick = () => {
      this.setState({clicked: !this.state.clicked})
    }

  render() {
    return (
        <nav className="NavItems">
          <h1 className="navbar-logo">SLIITCon</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>

            </i>
            </div>
          <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
           {MenuItem.map((item, index) => {
             return(
               <li key={index}>
                 <a className={item.mName} href={item.url}>
                   {item.title}
                 </a>
               </li>
             )
           })}  
          </ul>  
          <AuthOption/>
           {/* <Button>Sign In</Button> */}
        </nav>
    )
  }
}

export default Navbar;