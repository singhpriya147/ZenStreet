import './ProfileCard.css'
import { FaArrowLeftLong } from 'react-icons/fa6';
import therapist from '../../app/assets/girlImage.jpg'

import { IoLocationOutline } from 'react-icons/io5';

import ShareBlue from '../../app/assets/icons/share-blue.svg'

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ShareIcon from '../../app/assets/icons/share.svg'
import Varified from '../../app/assets/icons/verified.svg'
import SharePopUp from '../sharePopup/SharePopUp';

const ProfileCard = () => {
  const[isShareOpen,setIsShareOpen]=useState(false);
     const router = useRouter();
  const toggleShare=()=>{
    setIsShareOpen(!isShareOpen);
  }


  const handleBook=()=>{
  router.push('/service');
  }
  return (
    <section className='profile-wrapper'>
      <div className='go-back'>
        <FaArrowLeftLong style={{ color: 'white' }} />
        Back
      </div>

      <div className='profile-card-wrapper'>
        <div className='profile-card'>
          <div className='share'>
            <ShareBlue />
          </div>

          <div className='img-container'>
            <Image src={therapist} alt='therapist' className='img' />
          </div>
          <h3 className='name'>
            <ShareIcon onClick={toggleShare} />
            {isShareOpen && <SharePopUp onClose={toggleShare} />}
            Swetha Varma {' '} <Varified />
          </h3>

          <span style={{ color: 'grey' }}>
            Consultant Clinical Psychologist
          </span>
          <h3 style={{ fontWeight: '500', fontSize: '16px' }}>
            10+ Years of experience
          </h3>
          <h3 style={{ fontWeight: '500', fontSize: '14px' }}>
            Starts at{' '}
            <span style={{ fontWeight: '500', fontSize: '20px' }}>
              1,200{' '}
              <span
                style={{ fontWeight: '500', fontSize: '16px', color: 'grey' }}
              >
                /session
              </span>
            </span>
          </h3>
          <h4>
            <IoLocationOutline />
            <span
              style={{ fontWeight: '500', fontSize: '16px', color: 'grey' }}
            >
             
              Block A2, Delhi
            </span>
          </h4>
        </div>

        <button className='profile-btn' onClick={handleBook}>Book Session</button>
      </div>
    </section>
  );
}

export default ProfileCard