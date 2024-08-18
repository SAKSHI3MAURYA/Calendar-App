import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Event.css'

const EventList = ({events, onEdit, onDelete}) => {
    const [filter, setFilter] = useState('all');
    const filteredEvents = events.filter(event =>{
        return filter === 'all' || event.category === filter;
    });
    
  return (
    <div className='view-event-list'>
        <h2>Event List</h2>
        <p>Click on individual events to show details</p>
        <label htmlFor='category-filter'>Filter by Category:</label>
        <select id="category-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
        </select>

        {filteredEvents.length === 0 ? (
            <p>No events available!</p>
            ):(
                <ul>
                    {filteredEvents.map(event=>(
                        <li key={event.id}>
                        <Link to={`/events/${event.id}`}>{event.title} - {event.category}</Link>
                        <button onClick={() => onEdit(event)}>Edit</button>
                        <button onClick={() => onDelete(event.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )
        }
    </div>
  )
}

export default EventList