"use client"

import about from '../../app/assets/about.js'
import { useState } from 'react';
import './About.css'
import {credentials} from '../../app/assets/credentials.js'
import Image from 'next/image.js';
// import { Call } from '@/app/assets/icons/index.js';
import Vc from '../../app/assets/icons/vc.svg'
import Call from '../../app/assets/icons/phone.svg'
import {testimonial} from '../../app/assets/testimonial.js'
import Testimonial from '../Testimonial/Testimonial';

const About = () => {

 const[showMore,setShowMore]=useState(false);
const [visibleCount, setVisibleCount] = useState(2);
const toggleTestimonials = () => {
  setVisibleCount((prevCount) =>
    prevCount === testimonial.length ? 2 : testimonial.length
  );
};
 const {text}=about;
  return (
    <div className='about-section'>
      <div>
        <h2>About Me</h2>
        <p style={{textAlign:'justify'}}>
          {showMore ? text : `${text.substring(0, 290)}`}
          <a className='show' onClick={() => setShowMore(!showMore)}>
            {showMore ? ' show less' : ' read more'}
          </a>
        </p>
      </div>

      <div>
        <h3>Credentials</h3>
        {credentials.map((cred, index) => (
          <div key={index} className='cred'>
            <Image src={cred.img} alt='' />
            <p>{cred.detail}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Available On</h3>
        <div className='available'>
          <div className='ways'>
            <div className='availiblitiy'>
              <Vc />
            </div>

            <span>Video Call</span>
          </div>
          <div>
            <div className='availiblitiy'>
              <Call />
            </div>

            <span>Voice Call</span>
          </div>
        </div>
      </div>
      <section>
        <h3>I offer therapy for</h3>
        <div className='therapy'>
          <span className='therapy-type'>Stress Management</span>
          <span className='therapy-type'>Relationship Skills</span>
          <span className='therapy-type'>Anxiety Reduction</span>
          <span className='therapy-type'>Depression Relief</span>
          <span className='therapy-type'>Behavioral</span>
          <span className='therapy-type'>Trauma Healing</span>
        </div>
      </section>
      <section className='place-lang'>
        <div>
          <h3>I am from</h3>
          <span>Chennai,India</span>
        </div>
        <div>
          <h3>Languages</h3>
          <span>English,Hindi</span>
        </div>
      </section>
      <section>
        <div className='testimonial-header'>
          <h3>Client Testimonials</h3>
          <span
            onClick={toggleTestimonials}
            style={{
              cursor: 'pointer',
               color: '#005DC6',
              textDecoration: 'underline',
            }}
          >
            {visibleCount === testimonial.length ? 'Hide' : 'Show more...'}
          </span>
        </div>

        <div className='testimonial-container'>
          {testimonial.slice(0, visibleCount).map((data, index) => (
            <Testimonial test={data.review} user={data.user} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default About