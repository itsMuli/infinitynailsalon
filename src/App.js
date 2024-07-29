import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import BookAppointment from './Pages/BookAppointment';
import OurServices from './Pages/Services';
import MyBookings from './Pages/MyBookings';
import { Box } from '@mui/material';
import RegisterForm from './Pages/Register';

const App = () => {
  const bookAppointmentRef = useRef(null);

  const handleBookAppointmentClick = () => {
    bookAppointmentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Navbar />
      <Box sx={{ pt: '64px' }}>
        <Routes>
          <Route 
            path="/" 
            element={<HomeWithSections onBookAppointmentClick={handleBookAppointmentClick} bookAppointmentRef={bookAppointmentRef} />} 
          />
          <Route path='/book-appointment' element={<BookAppointment/>} />
          <Route path='/my-bookings' element={<MyBookings/>} />
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/services' element={<OurServices/>} />
        </Routes>
      </Box>
    </Router>
  );
}

const HomeWithSections = ({ onBookAppointmentClick, bookAppointmentRef }) => {
  return (
    <div>
      <Home onBookAppointmentClick={onBookAppointmentClick} />
      <OurServices />
      <div ref={bookAppointmentRef}>
        <BookAppointment />
      </div>
    </div>
  );
};

export default App;
