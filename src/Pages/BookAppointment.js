import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DnsIcon from '@mui/icons-material/Dns';
import BookServices from './BookServices';

const servicesData = {
  'ALL': [
    { name: 'Acrylic', duration: '30 m', price: '$30.00' },
    { name: 'Gel', duration: '30 m', price: '$25.00' },
    { name: 'Manicure', duration: '30 m', price: '$20.00' },
    { name: 'Pedicure', duration: '30 m', price: '$18.00' },
    { name: 'Nail art', duration: '1 h', price: '$35.00' },
    { name: 'House Call', duration: '1 h', price: '$35.00' },
    { name: 'General', duration: '1 h', price: '$35.00' },
  ],
  'General': [
    { name: 'Nail Care', duration: '30 m', price: '$30.00' },
  ],
  'Gel': [
    { name: 'Plain Gel', duration: '1 h', price: '$35.00' },
    { name: 'Tips & Gel', duration: '1 h', price: '$35.00' },
  ],
  'Manicure': [
    { name: 'Full Manicure', duration: '45 m', price: '$25.00' },
    { name: 'Half Manicure', duration: '45 m', price: '$25.00' },
  ],
  'Pedicure': [
    { name: 'Full Pedicure', duration: '1 h', price: '$50.00' },
    { name: 'Half Pedicure', duration: '1 h', price: '$45.00' },
  ],
  'House Call': [
    { name: 'Full Pedicure', duration: '1 h', price: '$50.00' },
    { name: 'Half Pedicure', duration: '1 h', price: '$45.00' },
    { name: 'Thick hair care', duration: '45 m', price: '$35.00' },
    { name: 'Nail Care', duration: '30 m', price: '$30.00' },
    { name: 'Plain Gel', duration: '1 h', price: '$35.00' },
    { name: 'Tips & Gel', duration: '1 h', price: '$35.00' },
    { name: 'Full Manicure', duration: '45 m', price: '$25.00' },
    { name: 'Half Manicure', duration: '45 m', price: '$25.00' },
  ],
};

const BookAppointment = () => {
  const [selectedItem, setSelectedItem] = useState('Service');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderCardContent = () => {
    switch (selectedItem) {
      case 'Service':
        return <BookServices servicesData={servicesData} />;
      case 'Date & Time':
        return <Typography variant="h6">Date and time selection will be displayed here.</Typography>;
      case 'Cart Items':
        return <Typography variant="h6">Cart items will be displayed here.</Typography>;
      case 'Fill out your details':
        return <Typography variant="h6">Form to fill out your details will be displayed here.</Typography>;
      case 'Summary':
        return <Typography variant="h6">Summary will be displayed here.</Typography>;
      default:
        return <BookServices servicesData={servicesData} />;
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(246, 243, 245)',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '10px', md: '20px' },
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontFamily: 'Lato, sans-serif',
          fontSize: { xs: '24px', md: '30px' },
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
          mt: 2,
        }}
      >
        Book Your Appointment
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 2 }}>
            <CardContent sx={{ padding: { xs: '10px', md: '16px' } }}>
              <List>
                {['Service', 'Date & Time', 'Cart Items', 'Fill out your details', 'Summary'].map((item) => (
                  <ListItem
                    button
                    key={item}
                    onClick={() => handleItemClick(item)}
                    sx={{
                      padding: { xs: '8px', md: '10px' },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: selectedItem === item ? 'rgba(204, 128, 118)' : 'inherit',
                        minWidth: { xs: '30px', md: '40px' },
                      }}
                    >
                      {item === 'Service' && <DnsIcon />}
                      {item === 'Date & Time' && <CalendarMonthIcon />}
                      {item === 'Cart Items' && <ShoppingCartIcon />}
                      {item === 'Fill out your details' && <AssignmentIcon />}
                      {item === 'Summary' && <SummarizeIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      sx={{
                        color: selectedItem === item ? 'rgba(204, 128, 118)' : 'inherit',
                        fontSize: { xs: '14px', md: '16px' },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 2 }}>
            <CardContent sx={{ padding: { xs: '10px', md: '16px' }, minHeight: '450px' }}>
              {renderCardContent()}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookAppointment;
