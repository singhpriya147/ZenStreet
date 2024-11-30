import './ProfileCard.css'
import { FaArrowLeftLong } from 'react-icons/fa6';
import therapist from '../../app/assets/free-photo-of-a-woman-in-a-black-and-white-photo-removebg-preview.png'
import { IoShareSocialOutline } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { IoMdShare } from 'react-icons/io';
import BlueTick from '../../app/assets/icons/Vector.png'
import Image from 'next/image';
import { useState } from 'react';
import Share from '../share/Share';
const ProfileCard = () => {
  const[isShareOpen,setIsShareOpen]=useState(false);
  const toggleShare=()=>{
    setIsShareOpen(!isShareOpen);
  }
  return (
    <section className='profile-wrapper'>
      <div>
        <FaArrowLeftLong style={{ color: 'white' }} />
        Back
      </div>
      <div className='profile-card'>
        <IoShareSocialOutline />
        <div className='img-container'>
          <Image src={therapist} alt='therapist' className='img' />
        </div>
        <h2>
          <IoMdShare  onClick={toggleShare}/>
          {isShareOpen && <Share onClose={toggleShare}/> }
          Swetha Varma{' '}
          <Image src={BlueTick} height={20} width={20} alt='blueTick' />
        </h2>

        <span>Consultant Clinical Psychologist</span>
        <h3>10+ Years of experience</h3>
        <h3>Starts at 1,200/session</h3>
        <h4>
          <IoLocationOutline />
          Block A2, Delhi
        </h4>
      </div>
     
       <button className='profile-btn'>Book Session</button>
      
    </section>
  );
}

export default ProfileCard