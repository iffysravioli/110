import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './App.css';
import 'react-calendar/dist/Calendar.css'

function Home() {
 
    const [date, setDate] = useState(new Date())
    
    return (
        <div className="app">
          <h1 className="header text-center">Did you finish your daily goals?</h1>
          <div className="calendar-container" align-item="center">
            <Calendar onChange={setDate} value={date}/>
          </div>
          <div className="text-center">
             Selected date: {date.toDateString()}
          </div>
        </div>
         )
       
       }

export default Home;