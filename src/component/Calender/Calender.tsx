'use client';

import React, { useState } from 'react';
import './Calender.css';
import { useAppContext } from '@/context';
import { useRouter } from 'next/navigation';

const generateCalendarDays = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const days: Date[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  // Add leading days from the previous month
  const leadingDaysCount = firstDayOfMonth.getDay();
  for (let i = 0; i < leadingDaysCount; i++) {
    const prevMonthDay = new Date(year, month, -i);
    days.unshift(prevMonthDay);
  }

  // Add trailing days from the next month
  const trailingDaysCount = 6 - lastDayOfMonth.getDay();
  for (let i = 1; i <= trailingDaysCount; i++) {
    const nextMonthDay = new Date(year, month + 1, i);
    days.push(nextMonthDay);
  }

  return days;
};

const Calendar: React.FC = () => {
 const { bookingDate, setBookingDate } = useAppContext();
   const router = useRouter();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const calendarDays = generateCalendarDays(year, month);

  // List of available dates for booking
  const availableDates = [
    new Date(year, month, 5),
    new Date(year, month, 10),
    new Date(year, month, 15),
  ];

  // const handlePrevMonth = () => {
  //   setCurrentDate(new Date(year, month - 1, 1));
  // };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (date: Date) => {
   if (isAvailableDate(date)) {
     setBookingDate(date); // Set the booking date in the context
     setSelectedDate(date); // Update the local selected date
       router.push('/booking');
   }
  };

  const isSameDay = (date1: Date | null, date2: Date | null): boolean => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isAvailableDate = (date: Date): boolean =>
    availableDates.some((availableDate) => isSameDay(availableDate, date));

  return (
    <div className='calendar-container'>
      <div className='calendar-header'>
        <div className='avail'>
          <h3>Available Dates </h3>
          <div className='sign'></div>
        </div>

        <div>
          <h2>
            {currentDate.toLocaleString('default', { month: 'long' })} {year}
          </h2>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
      </div>

      <div className='calendar-grid'>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className='day-name'>
            {day}
          </div>
        ))}

        {calendarDays.map((date, index) => {
          const isCurrentMonth = date.getMonth() === month;
          const isSelected = isSameDay(date, selectedDate);
          const isAvailable = isAvailableDate(date);

          return (
            <div
              key={index}
              onClick={() => handleDateClick(date)}
              className={`day ${
                isSelected
                  ? 'selected'
                  : isAvailable
                  ? 'available'
                  : isCurrentMonth
                  ? 'current-month'
                  : 'other-month'
              }`}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>

      {bookingDate && (
        <div className='calendar-footer'>
          Booking Date: {bookingDate.toDateString()}
        </div>
      )}
    </div>
  );
};

export default Calendar;


