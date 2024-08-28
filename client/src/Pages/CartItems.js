import React from 'react';
import { Box, Typography, CardContent, Grid, Button, CardActions } from '@mui/material';

const CartItems = ({ cartItems = [], onNext }) => {
  // Check if cartItems is an array and has items
  if (!Array.isArray(cartItems)) {
    console.error('cartItems should be an array');
    return null;
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0); // Adjust based on your item structure

  return (
    <Box>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          My Cart Items
        </Typography>
        <Typography variant="body1">
          {cartItems.length} Items
        </Typography>
        {cartItems.map((item, index) => (
          <Box key={index} sx={{ borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <img src={item.image} alt={item.name} style={{ width: '100%' }} />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">{item.date}</Typography>
                <Typography variant="body2">{item.time}</Typography>
                <Typography variant="body2">
                  ${item.price.toFixed(2)} of ${item.totalPrice.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">
            Cart Total (Deposit)
          </Typography>
          <Typography variant="h5">
            ${totalPrice.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    <CardActions sx={{ padding: '16px', display: 'flex', justifyContent: 'flex-end' }}>
    <Button
      variant="contained"
      color="primary"
      onClick={onNext}
      disabled={cartItems.length === 0} // Disable if no items
    >
      Next
    </Button>
  </CardActions>
  </Box>
  );
};

export default CartItems;
