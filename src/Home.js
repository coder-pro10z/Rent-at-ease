import React,{useState} from 'react'
import Card from "./Card"
import SearchIcon from '@material-ui/icons/Search'
import "./Home.css"
import PeopleIcon from '@material-ui/icons/People';
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
    <div className='cardSection'>
        <h2>Featured Hotels </h2>
      <div className='recHotels'>
        <Card src="	https://a0.muscache.com/im/pictures/8244569a-779e-4f3f-a750-597438456480.jpg?im_w=720"
              title="Entire homes"
              description="Comfortable private places, with room for friends or family."/>

              <Card src="	https://a0.muscache.com/im/pictures/8244569a-779e-4f3f-a750-597438456480.jpg?im_w=720"
              title="Entire homes"
              description="Comfortable private places, with room for friends or family."/>


              <Card src="	https://a0.muscache.com/im/pictures/8244569a-779e-4f3f-a750-597438456480.jpg?im_w=720"
              title="Entire homes"
              description="Comfortable private places, with room for friends or family."/>


        </div>

        <h2>Featured PGs' and Hostels </h2>
        <div className='recPg'>
        <Card src="	https://a0.muscache.com/im/pictures/8244569a-779e-4f3f-a750-597438456480.jpg?im_w=720"
              title="Entire homes"
              description="Comfortable private places, with room for friends or family."/>

              <Card src="	https://a0.muscache.com/im/pictures/8244569a-779e-4f3f-a750-597438456480.jpg?im_w=720"
              title="Entire homes"
              description="Comfortable private places, with room for friends or family."/>


              <Card src="	https://a0.muscache.com/im/pictures/8244569a-779e-4f3f-a750-597438456480.jpg?im_w=720"
              title="Entire homes"
              description="Comfortable private places, with room for friends or family."/>

        </div>
    </div>
    
</div>
  )
}

export default Home
