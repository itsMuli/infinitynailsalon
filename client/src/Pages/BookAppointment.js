import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import BookServices from './BookServices';
import DateAndTimePicker from './Date&Time';
import CartItems from './CartItems';
import FillOutDetails from './FillOutDetails';
import BookingSummary from './BookingSummary';

const BookAppointment = () => {
  const [selectedItem, setSelectedItem] = useState('Service');
  const [servicesData, setServicesData] = useState({});

  useEffect(() => {
    // Fetch the categories and services data from the backend
    axios.get('http://localhost:8080/api/categories')
      .then(response => {
        const data = response.data.reduce((acc, category) => {
          acc[category.name] = category.services;
          return acc;
        }, {});
        setServicesData(data);
      })
      .catch(error => {
        console.error("There was an error fetching the services data!", error);
      });
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleNext = () => {
    const items = ['Service', 'Date & Time', 'Cart Items', 'Fill out your details', 'Summary'];
    const currentIndex = items.indexOf(selectedItem);
    if (currentIndex < items.length - 1) {
      setSelectedItem(items[currentIndex + 1]);
    }
  };

  const renderCardContent = () => {
    switch (selectedItem) {
      case 'Service':
        return <BookServices servicesData={servicesData} onNext={handleNext} />;
      case 'Date & Time':
        return <DateAndTimePicker onNext={handleNext} />;
      case 'Cart Items':
        return <CartItems onNext={handleNext} />;
      case 'Fill out your details':
        return <FillOutDetails onNext={handleNext} />;
      case 'Summary':
        return <BookingSummary />;
      default:
        return <BookServices servicesData={servicesData} onNext={handleNext} />;
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
