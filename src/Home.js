import React,{useState} from 'react'
import Banner from './Banner'
import SearchIcon from '@material-ui/icons/Search'
import "./Home.css"
import Search from "./Search.js"
import { useNavigate } from 'react-router-dom'
import PeopleIcon from '@material-ui/icons/People';
// import  PeopleIcon  from '@material-ui/core'
import {Button} from '@material-ui/core'

function Home() {
  const navigate=useNavigate();
  const [showSearch,setShowSearch]=useState(true)
  return (
    <div>
      <div className='searchdiv'>
        <div className='search_bar'>
            <input type="text" placeholder='Search for the destination'></input>
            <SearchIcon/>
        </div>
        {/* <div>
        {showSearch && <Search/>}
        <div className='banner_search'>
            <button onClick={()=>setShowSearch(!showSearch)} className="banner_searchButton"variant="outlined">
              {showSearch?"Hide":"Search Dates"}
            </button>
        </div>
      </div> */}

      <div className='sea
      '><Button>Search Dates</Button></div>
      
      <div className="adultCount">Rooms for 1 adults <PeopleIcon/></div>
      <div>
      </div>  
    </div>
    <Banner/>
     {/* <h1> This is Homepage. </h1> */}
  </div>
  )
}

export default Home
