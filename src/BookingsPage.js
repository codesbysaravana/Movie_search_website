import React from 'react'
import { useParams, Link } from 'react-router-dom'

const BookingsPage = ({ bookings, handleDelete }) => {
    const { id } = useParams();
    const booking = bookings.find(booking => (booking.id).toString() === id);

  return (
    <main className='BookingsPage'>
        <section className='Bookings'>
            {booking && 
                <>
                    <h2>{booking.id}</h2>
                    <h2>{booking.name}</h2>
                    <h2>{booking.Persons}</h2>
                    <p className='bookingDate'>{booking.date}</p>
                    <p className='bookingTime'>{booking.time}</p>
                    <Link to={`/edit/${id}`}><button style={{color: "red"}}>Edit Booking</button></Link>
                    <button style={{color: "red"}} onClick={() => handleDelete(booking.id)}>Delete Booking</button>
                </>
            }
            {!booking && 
                <>
                    <h2>Oops.. Post not Found</h2>
                    <p>Well thats disappointing</p>
                    <p>
                        <Link to="/">Visit our hompage</Link>
                    </p>
                </>
            }

        </section>
    </main>
  )
}

export default BookingsPage