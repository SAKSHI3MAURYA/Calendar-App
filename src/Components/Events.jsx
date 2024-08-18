import React from 'react';
import './Event.css'
import { Link } from 'react-router-dom';

const Events = ({ date, events, onEdit, onDelete, onDetails }) => {
    const filteredEvents = events.filter(event => new Date(event.date).toDateString() === date.toDateString());

    return (
        <div className="events">
        <h2>Events on {date.toDateString()}:</h2>
        {filteredEvents.length === 0 ? (
        <p>No events scheduled for this date.</p>
        ):(
            <ul >
            {filteredEvents.map(event => (
                <li key={event.id}>{event.title}
                <button onClick={() => onDelete(event.id)}>Delete</button>
                <button onClick={() => onEdit(event)}>Edit</button>
                <button onClick={() => onDetails(event)}><Link style={{color:"white"}} to={`/events/${event.id}`}>
                View Details</Link></button>
                </li>
            ))}
         </ul>
        )}
    </div>
);
};

export default Events;