import React, { useState } from 'react'
import './Banner.css'
import Search from './Search.js'
import {useNavigate} from "react-router-dom"
import { Button } from '@material-ui/core'
const SearchDates = () => {
    const navigate=useNavigate();
    const [showSearch,setShowSearch]=useState(false)

  return (
    <div>
        {showSearch && <Search/>}
        <div>
      <Button onClick={()=>setShowSearch(!showSearch)} className="bar_searchButton" variant="outlined">
              {showSearch?"Hide":"Search Dates"}
      </Button>

        </div>
    </div>
  )
}

export default SearchDates
