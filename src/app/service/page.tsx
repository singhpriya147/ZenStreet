import React from 'react'
import './service.css'
import {services} from '../assets/services'
import ServiceCard from '../../component/ServiceCard/ServiceCard'
import Cross from '../../app/assets/icons/cross.svg'
import InfoIcon from '../assets/icons/info.svg'
import LeftArrow from '../assets/icons/leftArrow (2).svg'
const Service = () => {
  return (
    <section className='service-page'>
      <div>
        <LeftArrow /> Avialble sessions
      </div>
      <div className='services-wrapper'>
        {/* <h3>service page</h3> */}

        <div className='toast'>
          <span>
            <InfoIcon />
            click on the duration to see the pricing details <Cross />
          </span>
        </div>
        <div className='services-container'>
          {services.map((item, index) => (
            <ServiceCard
              key={index}
              price={item.price}
              type={item.type}
              feat={item.feat}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service