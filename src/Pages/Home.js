import React from 'react';
import { Box, Typography, Card, CardMedia, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = ({onBookAppointmentClick}) => {

  // const navigate= useNavigate();

  // const handleBookAppointment= () => {
  //   navigate('/')
  // }

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(247, 230, 228)',
        minHeight: '66vh',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        padding: '10px',
        paddingLeft: '100px'
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              maxWidth: 600,
              width: '100%',
              position: 'relative',
            }}
          >
            <CardMedia
              component="img"
              alt="Background"
              height="700"
              image="/overlayHome.png"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingLeft: '20px' }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '45px', fontWeight: 'bold' }}
            >
              Welcome to Infinity Nail Salon
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontFamily: 'Lato, sans-serif', fontSize: '15px' }}
            >
              At Infinity Nail Salon, we offer a wide range of services to keep your nails looking their best. Whether you're looking for a quick polish change or a full set of acrylics, our experienced technicians are here to help.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ marginTop: '20px', fontFamily: 'Lato, sans-serif', fontSize: '15px' }}
            >
              Book your appointment today and experience the best nail care in town.
            </Typography>
            <Button
              onClick={onBookAppointmentClick}
              sx={{
                fontSize: '17px',
                lineHeight: '40px',
                fontFamily: 'Lato, sans-serif',
                my: 3,
                color: 'white',
                backgroundColor: '#F56F5E',
                display: 'block',
                width: '100%', 
                '&:hover': {
                  backgroundColor: '#e06758',
                },
                mr: 2
              }}
            >
              Book Appointment
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
