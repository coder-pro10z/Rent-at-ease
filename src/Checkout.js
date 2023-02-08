import { Button } from '@material-ui/core'
import React from 'react'
import './Checkout.css'


// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Checkout = () => {
  return (
<div className='checkout'>
    <div className='headbar'> 
    <h3>
    {"< "}
        Request to book</h3> </div>
    <div className='right_page'>
        <div className='upper'>
            <div className='img2'>img</div>
            card details
            name of place 
            <div>star</div>
    
        <div className='vert_line'>--------------------</div>
        
        </div>
        <div className='Price_details'>
            <div>Price Details</div>
            <div>price * no of nights 54646564</div>
            <div>Weekly discount 5465464654645</div>
            <div>Service fee 67567668</div>
        </div>
        <div className='total_price'>Total 453543553</div>
    </div>
       

    <div className='left_page'>
     <div className='block_first'><h4>Your Trip</h4>
      <div className='div_date'>
        <div><b>
            Dates
            </b>
        </div> 
        <div><u>Edits</u></div>
     </div>
     <div className='dateFromTo'>8-18 Feb</div>
     </div>
     <br />
        <div className='div_guests'>
        <div><b>Guests</b></div> <div><u>Edits</u></div>
        </div>
        <div className='noOfGuest'>4</div>
    <br/>
    
    <div className='vert_line'>--------------------</div>

    <div className='div_payment'>
        <h3>Pay with</h3>
        <div className='payment_gateways'>bla bal cal yo </div>
    </div>
    <div className='credit_debit'>Credit or debit Card</div>
    <div>Enter a coupon</div>

    <div className='vert_line'>--------------------</div>
    
    <div className='block3'>
     <div className='requiredForTrip'>
        <h3>Required for your trip</h3>
        <br/><h4>Message a host</h4>
        <div className='msg'>Let the host know why you're travelling and when you'll check in.</div>
        <div className='img'>img
         <div><h4>Felix</h4></div><br/>
         <div>Joined in 2015</div>
            </div>
            <br/>
        <textarea></textarea>
     </div>

     <div className='vert_line'>--------------------</div>

    <Button className='bt_book'>Request to book</Button>
    </div>
 </div>
</div>
  )
}

export default Checkout
