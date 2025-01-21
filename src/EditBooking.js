import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditBooking = ({ bookings, handleEdit, editName, setEditName, editPersons, setEditPersons, editDate, setEditDate, editTime, setEditTime }) => {
  
  const { id } = useParams();
  const booking = bookings.find(booking => (booking.id).toString() === id);
    const [isOpen, setIsOpen] = useState(false);
    const options = ['1', '2', '3', '4', '5', '6'];

  useEffect(() => {
    if(booking) {
      setEditName(booking.name);
      setEditDate(booking.date);
      setEditTime(booking.time);
      setEditPersons(booking.persons)
    }

  }, [booking, setEditName, setEditTime, setEditDate, setEditPersons]);
  
  return (
        <main className='editBooking'>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                required
                value={editName}
                onChange={(e) => setEditName(e.target.value)}    
            />

              <div style={{ position: 'relative', width: '200px' }}>
                  <label htmlFor="PeopleCount">Persons:</label>
                <input 
                  type="text" 
                  placeholder="No. of Person's" 
                  onClick={() => setIsOpen(!isOpen)} 
                  value={editPersons}
                  style={{ width: '100%', padding: '8px' }} 
                />
                {isOpen && (
                  <div 
                    style={{
                      position: 'absolute',
                      left: '0',
                      width: '100%',
                      border: '1px solid #ccc',
                      backgroundColor: '#fff',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      zIndex: 1000,
                      borderRadius: "1rem", 
                    }}
                  >
                    {options.map((option, index) => (
                      <div 
                        key={index} 
                        style={{ padding: '8px', cursor: 'pointer', borderBottom: index === options.length - 1 ? "none": "1px solid black",  }} 
                        onClick={() => {
                          setIsOpen(false);
                          setEditPersons(option);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label htmlFor="date">Date:</label>
              <input 
                type="date"
                required
                style={{ marginLeft: '8px' }}
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />
              <p>Selected Date: {editDate || "None"}</p>
            </div>
            <div>
              <label htmlFor="time">Time:</label>
              <input 
                type="time"
                required
                style={{ marginLeft: '8px' }}
                value={editTime}
                onChange={(e) => setEditTime(e.target.value)}
              />
              <p>Selected Time: {editTime || "None"}</p>
            </div>
          </div>

            <button type="submit" onClick={() => handleEdit(booking.id)}>Submit</button>
        </form>
    </main>
  )
}

export default EditBooking