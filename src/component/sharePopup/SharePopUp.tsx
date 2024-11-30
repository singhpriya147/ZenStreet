import './SharePopUp.css'
import BlackCross from '../../app/assets/icons/blackCross.svg'
import Fb from '../../app/assets/icons/fb.svg';
import Whatsapp from '../../app/assets/icons/whatsapp.svg'
import Twitter from '../../app/assets/icons/twitter.svg'
import Mail from '../../app/assets/icons/mail.svg'
const SharePopUp = ({onClose}) => {
  return (
    <div className='popup-overlay' onClick={onClose}>
      <div className='popup-content' onClick={(e) => e.stopPropagation()}>
        <div className='share-header'>
          <h4>Share</h4>
          <BlackCross onClick={onClose} />
        </div>
        <div className='social-media-logo'>
          <Fb />
          <Whatsapp />
          <Twitter />
          <Mail />
        </div>

        <div className='share-footer'>
          <span>Page Link</span>
          <div>
            <input type='text' />
            <button>Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharePopUp