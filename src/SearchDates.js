import React, { useState } from 'react'
import './Banner.css'
import Search from './Search.js'
import {useNavigate} from "react-router-dom"
import { Button } from '@material-ui/core'
import "./SearchDates.css"
const SearchDates = () => {
    const navigate=useNavigate();
    const [showSearch,setShowSearch]=useState(false);

  return (
    <div className='banner1'>
        {showSearch && <Search/>}
        <div className='banner_search'>
            <button onClick={()=>setShowSearch(!showSearch)} className="banner_searchButton"variant="outlined">
              {showSearch?"Hide":"Search Dates"}
            </button>
        </div>

    </div>
  )
}

export default SearchDates
