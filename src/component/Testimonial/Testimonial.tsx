import './Testimonial.css'
import Comma from '../../app/assets/icons/comma.svg'
const Testimonial = ({test,user}) => {
  return (
    <>
      <div className='testimonial-wrapper'>
        <div className='testimonial'>
          <Comma />
          <Comma />
          <p>"{test}"</p>
        </div>
        <div className='user'>
          <span>{user}</span>
        </div>
      </div>
    </>
  );
}

export default Testimonial