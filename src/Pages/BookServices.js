import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

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
