import './Testimonial.css'
import Comma from '../../app/assets/icons/comma.svg'
const Testimonial = ({test,user}) => {
  return (
    <>
      <div className='testimonial-wrapper'>
        <div className='testimonial'>
          <Comma />
          <Comma />
          <p>&quot;{test}&quot;</p>
        </div>
        <div className='user'>
          <span>{user}</span>
        </div>
      </div>
    </>
  );
}

export default Testimonial