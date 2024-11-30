import './ServiceCard.css'

const ServiceCard = ({price,type,feat,time}) => {
  return (
    <div className='service-card'>
      <h2>{price}</h2>
      <span>{type}</span>
      <ul className='duration-option'>
        {time.map((duration,idx)=>(
          <li  className='duration' key={idx}>{duration}</li>
        ))}
      </ul>
      <ul>
        {feat.map((feature, idx) => (
          <li key={idx} className='list'>
       
            {feature}
          </li>
        ))}
      </ul>
      <button className='service-btn'>Proceed</button>
    </div>
  );
}

export default ServiceCard