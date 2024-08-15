import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const Home = ({ onBookAppointmentClick }) => {
  return (
    <Box
      sx={{
        position: 'center',
        backgroundColor: 'rgba(247, 230, 228)',
        // width: '100vw', // Full width of the viewport
        minHeight: '66vh',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '10px',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px', // Max content width for centering
          margin: '0 auto', // Center the content horizontally
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box
              sx={{
                backgroundColor: 'rgba(247, 230, 228)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ml: { md: '-50px' },
              }}
            >
              <img
                src="/home-removebg-preview.png"
                alt="Background"
                style={{
                  width: '434.75px',
                  height: '500.11px',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ paddingLeft: { xs: '10px', md: '20px' }, textAlign: { xs: 'center' } }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  fontSize: { xs: '30px', sm: '35px', md: '45px' }, 
                  fontWeight: 'bold' 
                }}
              >
                Welcome to Infinity Nail Salon
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ 
                  fontFamily: 'Lato, sans-serif', 
                  fontSize: { xs: '14px', md: '15px' },
                  marginBottom: '15px',
                }}
              >
                At Infinity Nail Salon, we offer a wide range of services to keep your nails looking their best. Whether you're looking for a quick polish change or a full set of acrylics, our experienced technicians are here to help.
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ 
                  fontFamily: 'Lato, sans-serif', 
                  fontSize: { xs: '14px', md: '15px' },
                  marginTop: '20px',
                }}
              >
                Book your appointment today and experience the best nail care in town.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
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
                  width: { xs: '100%', sm: '80%', md: '60%' },
                  mx: { xs: 'auto', md: 0 },
                  '&:hover': {
                    backgroundColor: '#e06758',
                  },
                }}
              >
                Book Appointment
              </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
