import React from 'react';
import Dropdown from './DropDown';

const NewBooking = ({ handleSubmit, name, setName, persons, setPersons, date, setDate, time, setTime  }) => {

  return (
    <main className='newPostForm'>
        <form className='newPostForm' onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}    
            />

          <Dropdown
            persons={persons}
            setPersons={setPersons}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label htmlFor="date">Date:</label>
              <input 
                type="date"
                required
                style={{ marginLeft: '8px' }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <p>Selected Date: {date || "None"}</p>
            </div>
            <div>
              <label htmlFor="time">Time:</label>
              <input 
                type="time"
                required
                style={{ marginLeft: '8px' }}
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <p>Selected Time: {time || "None"}</p>
            </div>
          </div>

             <button type="submit">Submit</button>
        </form>
    </main>
  )
}

export default NewBooking;