import React from 'react';
import Bookings from './Bookings';

const Home = ({ bookings }) => {
  return (
    <main>
        {bookings.length? ( 
        <ul>
            {bookings.map((booking) => 
                <Bookings 
                    key={booking.id}
                    booking={booking}    
                />
            )}
        </ul>
        ) : (
            <p style={{ marginTop: "2rem" }}>No text to display</p>
        )}
    </main>
  )
}

export default Home;