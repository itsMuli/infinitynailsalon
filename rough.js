import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, Button } from '@mui/material';

const BookServices = ({ servicesData }) => {
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [selectedService, setSelectedService] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
    console.log(`Selected service: ${serviceName}`);
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
              <List
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'column' },
                  flexWrap: { xs: 'wrap', md: 'nowrap' },
                  gap: 1,
                  padding: 0,
                }}
              >
                {Object.keys(servicesData).map((category) => (
                  <ListItem
                    button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    sx={{
                      flex: '1 1 auto',
                      border: selectedCategory === category ? '2px solid #e06758' : '2px solid #eaedee',
                      borderRadius: '4px',
                      padding: '8px',
                      margin: { xs: '2px', md: '4px' },
                      backgroundColor: selectedCategory === category ? 'rgba(204, 128, 118, 0.2)' : 'inherit',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 'bold',
                        color: selectedCategory === category ? '#e06758' : 'inherit',
                        textAlign: 'center',
                        flex: 1,
                      }}
                    >
                      {category}
                    </Typography>
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
                <Button
                  onClick={() => handleServiceClick(service.name)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    textAlign: 'left',
                    padding: 0,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    textTransform: 'none',
                    border: selectedService === service.name ? '2px solid #e06758' : '2px solid #eaedee',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                        {service.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        Duration: {service.duration}
                      </Typography>
                      <Typography variant="body2" color="#e06758" sx={{ fontWeight: 'bold' }}>
                        Price: <span>{service.price}</span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookServices;
