import React, { useState } from 'react';

function Dropdown({ persons, setPersons }) {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['1', '2', '3', '4', '5', '6'];

  return (
    <div style={{ position: 'relative', width: '200px' }}>
        <label htmlFor="PeopleCount">Persons:</label>
      <input 
        type="text" 
        placeholder="No. of Person's" 
        onClick={() => setIsOpen(!isOpen)} 
        value={persons}
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
                setPersons(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
