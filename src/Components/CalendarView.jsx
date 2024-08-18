import React, { useState } from 'react'
import {Calendar} from 'react-calendar'
import { Link } from 'react-router-dom';
import './Calendar.css';
import Events from './Events';
import EventIcon from '@mui/icons-material/Event';
import EventForm from './EventForm';

function CalendarView({events,setEvents}) {
    const [date, setDate] = useState(new Date());
    const [isFormOpen, setFormOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null); // 
    const eventLength = events.length;
    const handleDateChange = (selectedDate) =>{
        setDate(selectedDate);
        setCurrentEvent(null);
        setFormOpen(true);
    };
    const handleAddEvent = (newEvent) =>{
        setEvents([...events, { ...newEvent, id: eventLength + 1}]);
        setFormOpen(false);
    }
    
  return (
    <div >
      <h1>Calendar</h1>
      <Calendar 
      className="custom-calendar"
        onChange={handleDateChange}
        value={date}
        tileClassName={({date,view}) =>{
            if (date.getDay() === 0) return 'sunday';
            if (view === 'month' && date.getDate() === 1) return 'first-of-month';
            const today = new Date();
                    if (date.getFullYear() === today.getFullYear() && 
                        date.getMonth() === today.getMonth() && 
                        date.getDate() === today.getDate()) {
                        return 'current-day';}
        }}
      />
      <Events 
      date={date} 
      events={events} 
      onEdit={(event)=> {
        setCurrentEvent(event);
        setFormOpen(true);
      }} 
      onDetails={(event) => { <Link to={`/events/${event.id}`}>{event.title} - {event.category}</Link>}}
      onDelete={(id) => setEvents(events.filter(event => event.id !== id))} 
      />
      <button className='event-button' 
      onClick={()=> setFormOpen(prev => !prev)}>
      <EventIcon/>
      <span className="tooltip">New Event</span> 
      </button>
      {isFormOpen && (
        <EventForm
        onAdd={handleAddEvent}
        onEdit={(updatedEvent) => {
            setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event));
            setFormOpen(false);
        }}
        event={currentEvent}
        onClose={()=>setFormOpen(false)}
         />
      )}
      <button>
        <Link to="/events" >View Event List</Link>
      </button>
      
      
    </div>
  );
}

export default CalendarView


