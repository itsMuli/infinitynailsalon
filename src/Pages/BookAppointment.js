import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import BookServices from './BookServices';

const servicesData = {
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
        display: 'block',
        alignItems: 'center',
        padding: { xs: '10px', md: '20px' },
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
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
        <Grid item xs={12} md={3}>
          <Card sx={{ mb: 2 }}>
            <CardContent sx={{ padding: { xs: '10px', md: '16px' } }}>
              <List
                sx={{
                  display: { xs: 'flex', md: 'block' },
                  flexDirection: { xs: 'row', md: 'column' },
                  justifyContent: { xs: 'space-between', md: 'initial' },
                  overflowX: { xs: 'auto', md: 'hidden' },
                  padding: 0,
                }}
              >
                {['Service', 'Date & Time', 'Cart Items', 'Fill out your details', 'Summary'].map((item, index) => (
                  <ListItem
                    button
                    key={item}
                    onClick={() => handleItemClick(item)}
                    sx={{
                      padding: { xs: '8px', md: '10px' },
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: { xs: 'row', md: 'column' },
                      width: { xs: 'auto', md: '100%' },
                      border: selectedItem === item ? '2px solid #e06758' : 'none',
                      borderRadius: '4px',
                      mb: { xs: '4px', md: '8px' },
                      position: 'relative',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        fontWeight: 'bold',
                        mr: 1,
                        color: selectedItem === item ? '#e06758' : 'inherit',
                        display: { xs: 'block', md: 'none' },
                      }}
                    >
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </Typography>
                    <ListItemIcon
                      sx={{
                        color: selectedItem === item ? '#e06758' : 'inherit',
                        minWidth: { xs: '30px', md: '40px' },
                      }}
                    >
                      {item === 'Service' && <DnsRoundedIcon />}
                      {item === 'Date & Time' && <CalendarMonthIcon />}
                      {item === 'Cart Items' && <ShoppingCartIcon />}
                      {item === 'Fill out your details' && <AssignmentIcon />}
                      {item === 'Summary' && <SummarizeIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      sx={{
                        color: selectedItem === item ? '#e06758' : 'inherit',
                        fontSize: { xs: '14px', md: '16px' },
                        display: { xs: 'none', md: 'block' },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card sx={{ mb: 2 }}>
            <CardContent sx={{ padding: { xs: '10px', md: '16px' }, width:'90%', minHeight: '600px' }}>
              {renderCardContent()}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
};

export default BookAppointment;
