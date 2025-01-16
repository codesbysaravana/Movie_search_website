import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import BookingsPage from './BookingsPage';
import NewBooking from './NewBooking';
import About from './About';
import api from "./api/bookings"

import { Routes, Route, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';


const App = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/bookings");
                if(response && response.data) setBookings(response.data);
            } catch (err) {
                if(err.response) {
                    console.log(err.response.data.message);
                    console.log(err.response.status.message);
                    console.log(err.response.header.message);
                } else {
                    console.log(`Error: ${err.message}`);
                }
                
            } finally {
                console.log("Done");
            }
        }
        fetchPosts();
    }, []);

  return (
    <div>
        <Header
            title={"Diner Menu"}
        />
        <Nav/>
        <Routes>
            <Route path='/' element={
                <Home
                    bookings={bookings}
                />}/>
            <Route path='/booking/:id' element={
                <BookingsPage
                    bookings={bookings}
                />}
            />
            <Route path='/booking' element={
                <NewBooking
                
                />}
            />
            <Route path='/about' element={<About/>}/>
        </Routes>

    </div>
  );
}
export default App