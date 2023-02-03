import React from 'react'
// import Navbar from './Navbar'\
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import logo from "./images/logo.jpg"
import {Link} from "react-router-dom";
const Header = () => {
  return (
    < div className='header'>
        <Link to="/">
          <img className="header_icon" src={logo} alt="logo"></img>
        </Link>
          {/* <p>Navbar</p> */}
        <div className='header_center'>
            <input type="text"></input>
            <SearchIcon/>
        </div>
        <div className='header_right'>
            {/* <Link to="/"> */}
            <div className='host'>Become a Host</div>
            {/* </Link> */}
            <Link to="/login" >
            <div className='sign_up'>Sign Up</div>
            </Link>
        </div>

    
          </div>
  )
}

export default Header
