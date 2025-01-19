import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import BookingsPage from './BookingsPage';
import NewBooking from './NewBooking';
import EditBooking from './EditBooking';
import About from './About';
import Footer from './Footer';
import api from "./api/bookings"

import { Routes, Route, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';


const App = () => {
    const [bookings, setBookings] = useState([]);
    const [name, setName] = useState("");
    const [editName, setEditName] = useState("");
    const [persons, setPersons] = useState("");
    const [editPersons, setEditPersons] = useState("");
    const [date, setDate] = useState("");
    const [editDate, setEditDate] = useState("");
    const [time, setTime] = useState("");
    const [editTime, setEditTime] = useState("");
    const Navigate = useNavigate();

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

    const handleSubmit = async(e) => {
        e.preventDefault(e);
        console.log("new Booking added");
        const id = bookings.length ? bookings[bookings.length -1].id +1 : 1;
        const newBooking = {id, name: name, Persons: persons, date: date, time: time}
        try {
            const response = await api.post("/bookings",newBooking);
            setBookings([newBooking, ...bookings ]);
            Navigate("/");
        } catch (err) {
            console.log(`Error: ${err.message}`);
            console.log(err.message);
        }
    }

    const handleEdit = () => {

    }

    const handleDelete = (id) => {
        const booking = bookings.filter(booking => booking.id);
    }

  return (
    <div className='App'>
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
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />}
            />
            <Route path='/booking' element={
                <NewBooking
                    name={name}
                    setName={setName}
                    persons={persons}
                    setPersons={setPersons}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    handleSubmit={handleSubmit}
                />}
            />
            <Route path='/edit/:id' element={
                <EditBooking
                    editName={editName}
                    setEditName={setEditName}
                    editPersons={editPersons}
                    setEditPersons={setEditPersons}
                    editDate={editDate}
                    setEditDate={setEditDate}
                    editTime={editTime}
                    setEditTime={setEditTime}
                    handleEdit={handleEdit}
                />}
            />
            <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}
export default App