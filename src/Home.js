import React,{useState} from 'react'
<<<<<<< HEAD
=======
import Banner from './Banner'
import SearchIcon from '@material-ui/icons/Search'
import "./Home.css"
import Search from "./Search.js"
import { useNavigate } from 'react-router-dom'
import PeopleIcon from '@material-ui/icons/People';
// import  PeopleIcon  from '@material-ui/core'
import {Button} from '@material-ui/core'
>>>>>>> b8129a624e70bc73e2b2a44357a89a4e403e7434

import SearchIcon from '@material-ui/icons/Search'
import "./Home.css"
import Search from "./Search.js"
import { useNavigate } from 'react-router-dom'
import PeopleIcon from '@material-ui/icons/People';
// import  PeopleIcon  from '@material-ui/core'
import {Button} from '@material-ui/core'
import SearchDates from './SearchDates.js'
function Home() {
<<<<<<< HEAD
  

=======
  const navigate=useNavigate();
  const [showSearch,setShowSearch]=useState(true)
>>>>>>> b8129a624e70bc73e2b2a44357a89a4e403e7434
  return (
    <div>
      <div className='searchdiv'>
        <div className='search_bar'>
            <input type="text" placeholder='Search for the destination'></input>
<<<<<<< HEAD
            <SearchIcon/></div>
        

        <div className='search'><SearchDates/></div>
      
        <div className="adultCount">Rooms for 1 adult <PeopleIcon/></div>  
    </div>
  
    
</div>
=======
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
>>>>>>> b8129a624e70bc73e2b2a44357a89a4e403e7434
  )
}

export default Home
