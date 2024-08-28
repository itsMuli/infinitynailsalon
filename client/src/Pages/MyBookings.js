import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400,
        margin: 'auto',
        mt: 5,
        p: 3,
        borderRadius: 2,
        boxShadow: 3
      }}
    >
      <Typography variant="h5" component="div" gutterBottom>
        Login
      </Typography>
      <TextField 
        label="Email" 
        name="email"
        variant="outlined" 
        fullWidth 
        margin="normal" 
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField 
        label="Password" 
        name="password"
        type="password" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Button 
        type="submit" 
        variant="contained" 
        sx={{ mt: 2, width: '100%', backgroundColor: '#d18479', '&:hover': { backgroundColor: '#d18479' } }}
      >
        Login
      </Button>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Link href="/register" variant="body2" sx={{ color: '#957672', textDecoration: 'none' }}>
          Don't have an account?
        </Link>
        <Link href="/forgot-password" variant="body2" sx={{ color: '#957672', textDecoration: 'none' }}>
          Forgot password?
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
