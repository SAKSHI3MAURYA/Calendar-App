import React, { useState, useEffect} from 'react'
import './Event.css'

const EventForm = ({onAdd, onEdit, event, onClose}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] =useState('');
    const[category, setCategory] = useState('personal');

    useEffect(() =>{
        if(event){
            setTitle(event.title);
            setCategory(event.category);
            setDescription(event.description)
        }else {
            setTitle('');
            setCategory('personal')
            setDescription('')
        }
    },[event]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newEvent = {title, category, description, date:event?event.date :new Date()};
        if(event){
            onEdit({...event, title, category, description});
        } else {
            onAdd(newEvent);
        }
    }

  return (
    <div className='event-form'>
    <h2>
        {event ? 'Edit Event' : 'Add Event'}
    </h2>
    <form onSubmit={handleSubmit}>
        <input type='text' value={title} 
        onChange={(e)=> setTitle(e.target.value)}
        placeholder='Event title goes here....' required
        />
        <br/>
        <input type='text' value={description} 
        onChange={(e)=> setDescription(e.target.value)}
        placeholder='Event description goes here....'
        />
        <br/>
        <select value={category} onChange={(e)=> setCategory(e.target.value)}><br/>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="other">Other</option>
        </select>
        <br/>
        <button type="submit">{event? 'Update' : 'Add'} Event</button>
        <button type='button' onClick={{onClose}}>Cancel</button>
    </form>
    </div>
  )
}

export default EventForm