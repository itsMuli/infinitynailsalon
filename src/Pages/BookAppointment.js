import React from 'react';
import { Box, Typography } from '@mui/material';

const BookAppointment = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#FFF5F8',
        minHeight: '68vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontFamily: 'Lato, sans-serif', fontSize: '30px', fontWeight: 'bold' }}
      >
        Book Your Appointment
      </Typography>
      {/* Add your booking form or content here */}
    </Box>
  );
};

export default BookAppointment;
