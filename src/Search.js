import React,{useState} from 'react'
import './Search.css'
import "react-date-range/dist/styles.css"
//main style file
import "react-date-range/dist/theme/default.css"
//theme style file
import {DateRangePicker} from "react-date-range";
import { Button } from '@material-ui/core';

// import { PeopleIcon } from '@material-ui/icons/People';
import PeopleIcon from '@material-ui/icons/People';
// import {useHistory} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
// navigate('/home');
// DATE PICKER COMPONENT
function Search() {
    const navigate = useNavigate();
    // const history=useHistory();
const [startDate,setStartDate]= useState(new Date());
const [endDate,setEndDate]= useState(new Date());

const selectionRange={
    startDate:startDate,
    endDate:endDate,
    key:"selection",};
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        }
return (
    <div className='search1'>
        <div>

        <DateRangePicker ranges={[selectionRange]}
        onChange={handleSelect}/>
        </div>
    
        <h2>
            Number of guests
        <input min={0} defaultValue={2} type="number" />
            <PeopleIcon/>
        <Button onClick={()=>navigate('/search')} >Search Airbnb</Button>
        </h2>
        
        
    </div>
  )
}

export default Search
