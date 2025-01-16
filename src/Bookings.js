import React from 'react'
import { Link } from 'react-router-dom'

const Bookings = ({ booking, key }) => {
  return (
    <section className='booking'>
        <Link to={`/booking/${booking.id}`}>
            <h2>{booking.id}</h2>
            <h2>{booking.Persons}</h2>
            <p className='bookingDate'>{booking.date}</p>
            <p className='bookingTime'>{booking.time}</p>
        </Link>
    </section>
  )
}

export default Bookings