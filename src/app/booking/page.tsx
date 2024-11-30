"use client"
import { useState } from 'react';
import './booking.css'


import { useAppContext } from '@/context';
import { useRouter } from 'next/navigation';
const Booking = () => {

  const router = useRouter();




const { selectedSlot, BookingDate } = useAppContext();


const handleClick=()=>{
  router.push('/confirmed');
}
  return (
    <section className='booking'>
      <div className='booking-wrapper'>
        <div className='date-price'>
          <h4>Selected Slot and Date</h4>
          <p>{selectedSlot || 'No slot selected'}</p>
          <h4>Your Booking</h4>
          {BookingDate ? (
            <p> {BookingDate.toDateString()}</p>
          ) : (
            <p>No booking date selected yet.</p>
          )}
        </div>
        <div className='booking-details'>
          <div className='form-section'>
            <form action=''>
              <div className='name'>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
              </div>
              <input type='email' name='' id='' placeholder='E-mail' />
              
              {/* {!valid &&  <p>please enter a valid 10 digit number</p>} */}
              <span style={{ fontStyle: 'italic' }}>
                i. You will receive booking details on WhatsApp
              </span>
            </form>
          </div>

          <div className='referral'>
            <h3>Have you been referred by your employer ?</h3>
            <div className='ref-code'>
              <div className='ref-code-checkbox'>
                <input type='checkbox' name='' id='' />
                <span>yes, I am employed under a parterning company</span>
              </div>
              <input
                type='text'
                placeholder='Partnering company Name or comapany Id'
                className='companyID'
              />
              <button className='verification'>Verify</button>
            </div>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <button className='slot-booking-btn' onClick={handleClick}>
            Book Session
          </button>
        </div>
      </div>
    </section>
  );
}

export default Booking