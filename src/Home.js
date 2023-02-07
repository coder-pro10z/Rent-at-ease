import React,{useState} from 'react'

import SearchIcon from '@material-ui/icons/Search'
import "./Home.css"
import Search from "./Search.js"
import { useNavigate } from 'react-router-dom'
import PeopleIcon from '@material-ui/icons/People';
// import  PeopleIcon  from '@material-ui/core'
import {Button} from '@material-ui/core'
import SearchDates from './SearchDates.js'
function Home() {
  

  return (
    <div>
      <div className='searchdiv'>
        <div className='search_bar'>
            <input type="text" placeholder='Search for the destination'></input>
            <SearchIcon/></div>
        

        <div className='search'><SearchDates/></div>
      
        <div className="adultCount">Rooms for 1 adult <PeopleIcon/></div>  
    </div>
  
    
</div>
  )
}

export default Home
