
// "use client"

// import React, { useEffect, useState } from 'react'
// import Calendar from '@/component/Calender/Calender'
// import Vc  from '../assets/icons/vc.svg';
// import Phone from '../assets/icons/phone.svg'
// import './slot.css';
// import {slot} from '../assets/slotList.js'

// import { useAppContext } from '@/context';

// const Slot = () => {

// const[isSelected,setIsSelected]=useState(false);

//  const buttonStyle = {
//    backgroundColor: isSelected ? 'green' : 'blue',
//    color: 'white',
//    padding: '10px 20px',
//    border: 'none',
//    cursor: 'pointer',
//    borderRadius: '5px',
//  };


//   const { setSelectedSlot }=useAppContext();
 
// const handleSlotClick = (slot: string) => {
//   setSelectedSlot(slot);
//   setIsSelected((prevSelected) => !prevSelected);
  
// };
  
//   return (
//     <div className='slot-page'>
//       <div className='therapy-mode'>
//         <h3>Select therapy mode</h3>
//         <div className='mode-opt'>
//           <div className='mode'>
//             <Vc />
//             <span>Video</span>
//           </div>
//           <div className='mode'>
//             <Phone />
//             <span>Call</span>
//           </div>
//         </div>
//       </div>
//       <div className='slot-selection'>
//         <div className='filter'>
//           <h2>Filter By</h2>
//           <div>
//             <button>Slots</button>
//             <button>Dates</button>
//           </div>
//         </div>
//         <div className='slots-list'>
//           <h3>Select slots</h3>
//           <div className='slots'>
//             {slot.map((item, index) => (
//               <div key={index} className='slot'>
//                 <p>{item.label}</p>
//                 <ul className='slot-list'>
//                   {item.slots.map((slot, idx) => (
//                     <button
//                      style={buttonStyle}
//                       key={idx}
//                       onClick={() => handleSlotClick(slot)}
//                     >
//                       {slot}
//                     </button>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Calendar />
//       </div>
//     </div>
//   );
// }

// export default Slot



'use client';

import React, { useState } from 'react';
import Calendar from '@/component/Calender/Calender';
import Vc from '../assets/icons/vc.svg';
import Phone from '../assets/icons/phone.svg';
import Live from '../assets/icons/live.svg'
import './slot.css';
import { slot } from '../assets/slotList.js';

import { useAppContext } from '@/context';

const Slot = () => {
  // Step 1: Track the selected slot
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Step 2: Style for the button
  const getButtonStyle = (slot) => {
    return {
      backgroundColor: selectedSlot === slot ? '#0085D0' : 'white',
      color: selectedSlot === slot ? 'white' : 'black',
      padding: '0.5rem 1rem',
      border: selectedSlot === slot ? '1px solid #0085D0 ' : '1px solid black',
      cursor: 'pointer',
      borderRadius: '15px',
    };
  };

  const { setSelectedSlot: setContextSelectedSlot } = useAppContext();

  // Step 3: Handle the slot click
  const handleSlotClick = (slot) => {
    setSelectedSlot(slot); 
    setContextSelectedSlot(slot); 
  };

  return (
    <div className='slot-page'>
      <div className='therapy-mode'>
        <h3>Select therapy mode</h3>
        <div className='mode-opt'>
          <div className='mode in-person'>
            <Live/>
            <span>In-person</span>
          </div>
          <div className='mode'>
            <Vc />
            <span>Video</span>
          </div>
          <div className='mode'>
            <Phone />
            <span>Call</span>
          </div>
        </div>
      </div>
      <div className='slot-selection'>
        <div className='filter'>
          <h2>Filter By</h2>
          <div>
            <button>Slots</button>
            <button>Dates</button>
          </div>
        </div>
        <div className='slots-list'>
          <h3>Select slots</h3>
          <div className='slots'>
            {slot.map((item, index) => (
              <div key={index} className='slot'>
                <p>{item.label}</p>
                <ul className='slot-list'>
                  {item.slots.map((slot, idx) => (
                    <button
                      key={idx}
                      style={getButtonStyle(slot)} // apply dynamic style based on selection
                      onClick={() => handleSlotClick(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Calendar />
      </div>
    </div>
  );
};

export default Slot;
