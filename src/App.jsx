import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CalendarView from './Components/CalendarView'
import EventList from './Components/EventList';
import EventDetails from './Components/EventDetails'

function App() {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CalendarView events={events} setEvents={setEvents} setCurrentEvent={setCurrentEvent} />} />
        <Route path='/events' exact element={<EventList events={events}  onEdit={setCurrentEvent} onDelete={(id) => setEvents(events.filter(event => event.id !== id))}/>}/>
        <Route path='/events/:id' element={<EventDetails events={events}/>} />
      </Routes>
    </Router>
  )
}

export default App
