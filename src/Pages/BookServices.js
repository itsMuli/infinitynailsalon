import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, List, ListItem, ListItemText, Button, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BookServices = ({ servicesData, onNext }) => {
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [selectedService, setSelectedService] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
    console.log(`Selected service: ${serviceName}`);
  };

  const handleNextClick = () => {
    if (selectedService) {
      if (onNext) {
        onNext(); 
      }
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
        <CardContent>
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
                          backgroundColor: selectedCategory === category ? 'transparent' : 'inherit',
                          borderRadius: '4px',
                          border: selectedCategory === category ? '2px solid #e06758' : '2px solid transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: { xs: '48%', sm: '32%', md: '100%' },
                          marginBottom: { xs: 0, md: '5px' },
                        }}
                      >
                        <ListItemText primary={category} />
                        {selectedCategory === category && (
                          <IconButton edge="end" sx={{ color: '#9E978E' }}>
                            <CheckCircleIcon />
                          </IconButton>
                        )}
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
                        border: selectedService === service.name ? '1px solid #e06758' : '2px solid #eaedee',
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
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
                          <Typography variant="body2" color="text.secondary">
                            Price: <span style={{ color: '#e06758', fontWeight: 'bold' }}>{service.price}</span>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', padding: '20px 16px' }}>
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: selectedService ? '#e06758' : '#aaa',
            '&:hover': {
              backgroundColor: selectedService ? '#e06758' : '#aaa',
            },
          }}
          onClick={handleNextClick}
          disabled={!selectedService} 
        >
          Next
        </Button>
      </CardActions>
    </Box>
  );
};

export default BookServices;
