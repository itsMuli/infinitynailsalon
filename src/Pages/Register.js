import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import instance from '../axiosInstance';



const StyledPhoneInput = styled(PhoneInput)(({ theme }) => ({
  '& .form-control': {
    width: '100% !important',
    height: '56px !important',
    borderColor: 'seagreen !important',
    borderRadius: '4px !important',
    padding: '18.5px 40px !important',
    fontSize: '16px !important',
    '&:hover': {
      borderColor: 'seagreen !important',
    },
    '&:focus': {
      borderColor: 'seagreen !important',
      boxShadow: '0 0 0 1px seagreen !important',
    },
  },
}));

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await instance.post(`/api/v1/auth/register`, formData);
      console.log('User registered successfully', response.data);
    } catch (error) {
      console.error('There was an error registering the user', error);
    }
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
          Register
        </Typography>
        <TextField 
          label="First Name" 
          name="firstName"
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <TextField 
          label="Last Name" 
          name="lastName"
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <Box sx={{ width: '100%', margin: 'normal', mt: 2 }}>
          <StyledPhoneInput
            country={'ke'} 
            value={formData.phone}
            onChange={handlePhoneChange}
            inputStyle={{ width: '100%' }}
            required
          />
        </Box>
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
        <TextField 
          label="Confirm Password" 
          name="confirmPassword"
          type="password" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="#d18479" 
          sx={{ mt: 2, width: '100%' }}
        >
          Register
        </Button>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            Already have an account? <Link href="/my-bookings" sx={{ color: '#957672', textDecoration: 'none' }}>Login</Link>
          </Typography>
        </Box>
      </Box>
  );
};

export default RegisterForm;
