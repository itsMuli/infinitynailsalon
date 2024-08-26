import React from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import summaryImage from '../images/summary.png'; // Replace with your image path

const BookingSummary = ({ firstName, serviceName, date, time }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <img src={summaryImage} alt="Booking Summary" style={{ width: '130px', height: '130px' }} />
          <Typography variant="h6" align="center">
            Your Appointment Booking Summary
          </Typography>
        </Box>
        <Box mb={2} textAlign="center">
          <Typography variant="subtitle1" sx={{ color: 'slategray' }}>
            Customer
          </Typography>
          <Typography variant="body1">{firstName}</Typography>
        </Box>
        <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />
        <Box display="flex" justifyContent="space-between" px={2}>
          <Typography variant="body2">{serviceName}</Typography>
          <Typography variant="body2">{date} at {time}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookingSummary;
