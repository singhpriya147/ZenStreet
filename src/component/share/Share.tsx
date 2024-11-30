import './Share.css'
const Share = ({onClose}) => {
  return (
    <div className='popup-overlay' onClick={onClose}>
      <div className='popup-content' onClick={(e) => e.stopPropagation()}>
        <h2>Popup Title</h2>
        <p>This is the content of the popup.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Share