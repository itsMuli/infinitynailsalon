import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DnsIcon from '@mui/icons-material/Dns';
import OurServices from './Services';

const BookAppointment = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderCardContent = () => {
    switch (selectedItem) {
      case 'Service':
        return <OurServices/>
      case 'Date & Time':
        return <Typography variant="h6">Date and time selection will be displayed here.</Typography>;
      case 'Cart Items':
        return <Typography variant="h6">Cart items will be displayed here.</Typography>;
      case 'Fill out your details':
        return <Typography variant="h6">Form to fill out your details will be displayed here.</Typography>;
      case 'Summary':
        return <Typography variant="h6">Summary will be displayed here.</Typography>;
      default:
        return <OurServices/>
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(246, 243, 245)',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        padding: '20px',
        paddingLeft: '70px'
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontFamily: 'Lato, sans-serif', fontSize: '30px', fontWeight: 'bold', textAlign: "center", mb: 4, mt: 2 }}
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
                    sx={{
                      backgroundColor: selectedItem === item ? 'rgba(0, 0, 0, 0.08)' : 'transparent',
                      '&:hover': {
                        backgroundColor: selectedItem === item ? 'rgba(0, 0, 0, 0.12)' : 'rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    <ListItemIcon>
                      {item === 'Service' && <DnsIcon />}
                      {item === 'Date & Time' && <CalendarMonthIcon />}
                      {item === 'Cart Items' && <ShoppingCartIcon />}
                      {item === 'Fill out your details' && <AssignmentIcon />}
                      {item === 'Summary' && <SummarizeIcon />}
                    </ListItemIcon>
                    <ListItemText primary={item} />
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
