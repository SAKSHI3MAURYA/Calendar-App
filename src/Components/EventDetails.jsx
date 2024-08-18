import React from 'react'
import { useParams } from 'react-router-dom';

const EventDetails = ({events,onClose}) => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));
  if(!event) return <p>Event not found.</p>;
  return (
    <div className='event-details'>
        <h2>Event Details</h2>
        <p><strong>Date:</strong>{new Date(event.date).toLocaleDateString()}</p>
        <p><strong>Title:</strong>{event.title}</p>
        <p><strong>Category:</strong>{event.category}</p>
        <p><strong>Description:</strong>{event.description || 'No description provided.'}</p>
        <button onClick={onClose}>Close</button>
    </div>
  )
}

export default EventDetails