import React from 'react'
// import Navbar from './Navbar'\
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import logo from "./images/logo.jpg"
import {Link} from "react-router-dom";
import StyledMenu from "./Menu"
const Header = () => {
  return (
    < div className='header'>
        <Link to="/">
          <div className='logo'>
            RentIt
            </div>
          {/* <img className="header_icon" src={logo} alt="logo"></img> */}
        </Link>
          {/* <p>Navbar</p> */}
        
        <div className='header_right'>
            {/* <Link to="/"> */}
            <div className='host'>Become a Host</div>
            {/* </Link> */}
            <Link to="/login" >
            <div className='sign_up'>Sign Up</div>
            </Link>
            <div className='moreMenu'><StyledMenu/></div>
        </div>

    
    </div>
  )
}

export default Header
