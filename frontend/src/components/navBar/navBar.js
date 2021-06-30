import React, { Component, useState } from 'react';
import {MenuItem} from "./MenuItem.js";
import { Link } from 'react-router-dom';
import './navBar.css';
import AuthOption from '../signin/AuthOption';
import Dropdown from './Dropdown';
import DropdownTwo from './DropdownTwo';
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

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(false);
//     }
//   };

//   return (
//     <>
//       <nav className='navbar'>
//         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//         SLIITCon
//         </Link>
//         <div className='menu-icon' onClick={handleClick}>
//           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//         </div>
//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li className='nav-item'>
//             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/presentations'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Presentations
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/workshops'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Workshops
//             </Link>
//           </li>
//           <li
//             className='nav-item'
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//           >
//             <Link
//               to='/view'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Researches <i className='fas fa-caret-down' />
//             </Link>
//             {dropdown && <Dropdown />}
//           </li>
          
//           <li className='nav-item'>
//             <Link
//               to='/downloads'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Downloads
//             </Link>
//           </li>

//           {/* <li
//             className='nav-item'
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//           >
//             <Link
//               to='/reviwers'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Reviwers <i className='fas fa-caret-down' />
//             </Link>
//             {dropdown && <DropdownTwo />}
//           </li> */}

//           <li className='nav-item'>
//             <Link
//               to='/contact'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               to='/login'
//               className='nav-links-mobile'
//               onClick={closeMobileMenu}
//             >
//               Sign In
//             </Link>
//           </li>
//         </ul>
//         <AuthOption/>
//       </nav>
//     </>
//   );
// }

// export default Navbar;