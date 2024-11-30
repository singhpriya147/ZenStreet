"use client"

import { createContext, useState,useContext } from "react";
const AppContext=createContext();


export function AppWrapper({children}:{children:React.ReactNode;

}){
const [selectedSlot, setSelectedSlot] = useState(null);
const [BookingDate, setBookingDate] = useState(null);

return (
  <AppContext.Provider
    value={{ selectedSlot, setSelectedSlot, BookingDate, setBookingDate }}
  >
    {children}
  </AppContext.Provider>
);
}
export function useAppContext(){
 return useContext(AppContext);
}