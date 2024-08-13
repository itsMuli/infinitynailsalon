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
  'Nail Consultation': [
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
        padding: '20px',
        paddingLeft: '70px',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontFamily: 'Lato, sans-serif',
          fontSize: '30px',
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
          mt: 2,
        }}
      >
        Book Your Appointment
      </Typography>
      <Grid container spacing={1} height="700px">
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 200, mb: 2 }}>
            <CardContent sx={{ width: '100%', height: '250px' }}>
              <List>
                {['Service', 'Date & Time', 'Cart Items', 'Fill out your details', 'Summary'].map((item) => (
                  <ListItem
                    button
                    key={item}
                    onClick={() => handleItemClick(item)}
                  >
                    <ListItemIcon
                      sx={{
                        color: selectedItem === item ? 'rgba(204, 128, 118)' : 'inherit',
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
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card sx={{ maxWidth: 750, mb: 2 }}>
            <CardContent sx={{ width: '100%', height: '550px' }}>
              {renderCardContent()}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookAppointment;

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Centered Content</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      color: #333;
      line-height: 1.6;
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh; /* Full height of the viewport */
    }

    .wrapper {
      width: 100%;
      max-width: 1200px;
      padding: 10px;
      text-align: center; /* Center text content */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="wrapper">
      <h1>Centered Content</h1>
      <p>This content is centered within the container.</p>
    </div>
  </div>
</body>
</html>

import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BookServices = ({ servicesData }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Category
              </Typography>
              <List>
                {Object.keys(servicesData).map((category) => (
                  <ListItem
                    button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    endIcon={selectedCategory === category ? <CheckCircleIcon sx={{color: 'bf9191'}}/>}
                    sx={{
                      backgroundColor: selectedCategory === category ? 'rgba(204, 128, 118, 0.2)' : 'inherit',
                      borderRadius: '4px',
                      marginBottom: '5px',
                    }}
                  >
                    <ListItemText primary={category} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {servicesData[selectedCategory].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {service.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duration: {service.duration}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {service.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookServices;


import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BookServices = ({ servicesData }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom mb="2" fontWeight="bold">
        Category
      </Typography>
      <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
        {Object.keys(servicesData).map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'outlined' : 'outlined'}
            onClick={() => handleCategoryChange(category)}
            endIcon={selectedCategory === category ? <CheckCircleIcon sx={{color: '#bf9191'}}/> : null}
            sx={{
              backgroundColor: 'transparent',
              color: selectedCategory === category ? '#000' : '#a8a5a5',
              borderColor: selectedCategory === category ? '#bf9191' : 'slategrey',
              '&:hover': {
                borderColor: selectedCategory === category ? '#bf9191' : '#a8a5a5',
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>
      <Box>
        {servicesData[selectedCategory].map((service, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h6">{service.name}</Typography>
            <Typography variant="body2">Duration: {service.duration} Price: {service.price}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};


export default BookServices;