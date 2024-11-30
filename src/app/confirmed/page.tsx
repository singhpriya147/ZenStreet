import './confirmed.css'

const Confirmed = () => {
  return (
    <div className='confirmed-page'>
      <div className='confirmed-wrapper'>
        <div className='confimed-header'>
          <h2>Booking Confirmed!</h2>
          <p>
            Congratulations! Your therapy session has been successfully
            scheduled. We&#39;re looking forward to helping you on your journey
            to better mental health.
          </p>
        </div>
        <div>
          <ul>
            i-Instructions
            <li>
              A confirmation email with all the session details has been sent to
              amal123@gmail.com
            </li>
            <li>
              If this is your first session, consider jotting down any key
              points or questions you want to discuss.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Confirmed