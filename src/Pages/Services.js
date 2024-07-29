import React from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

const services = [
  {
    title: 'Nail Art',
    image: '/art1.jpg',
  },
  {
    title: 'Manicure',
    image: '/art2.jpg', 
  },
  {
    title: 'Pedicure',
    image: '/art3.jpg', 
  },
];

const OurServices = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        minHeight: '60vh',
        padding: '20px',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontFamily: 'Lato, sans-serif', fontSize: '30px', fontWeight: 'bold', textAlign: 'center', mb: 4 }}
      >
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, mb: 2 }}>
              <CardMedia
                component="img"
                alt={service.title}
                height="auto"
                image={service.image}
                sx={{ width: '100%', height: 'auto', aspectRatio: '5135 / 3423' }}
              />
            </Card>
            <Box sx={{ textAlign: 'center', padding: '10px' }}>
              <Typography variant="h6" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 'bold' }}>
                {service.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
