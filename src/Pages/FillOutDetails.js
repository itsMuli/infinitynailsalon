import React, { useState } from 'react';
import { Box, TextField, FormControl, Typography, Button, Grid, Card, CardContent, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const FillOutDetails = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    gender: '',
    note: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    if (onNext) onNext(); // Proceed to the next step
  };

  return (
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Fill Out Your Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: 'transparent',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '2px solid #708090',
                      borderRadius: '4px',
                    },
                    '&:hover fieldset': {
                      border: '2px solid #b44d3c',
                    },
                    '&.Mui-focused fieldset': {
                      border: '2px solid #b44d3c',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#708090',
                    '&.Mui-focused': {
                      color: '#b44d3c',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: 'transparent',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '2px solid #708090',
                      borderRadius: '4px',
                    },
                    '&:hover fieldset': {
                      border: '2px solid #b44d3c',
                    },
                    '&.Mui-focused fieldset': {
                      border: '2px solid #b44d3c',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#708090',
                    '&.Mui-focused': {
                      color: '#b44d3c',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: 'transparent',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '2px solid #708090',
                      borderRadius: '4px',
                    },
                    '&:hover fieldset': {
                      border: '2px solid #b44d3c',
                    },
                    '&.Mui-focused fieldset': {
                      border: '2px solid #b44d3c',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#708090',
                    '&.Mui-focused': {
                      color: '#b44d3c',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  backgroundColor: 'transparent',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '2px solid #708090',
                      borderRadius: '4px',
                    },
                    '&:hover fieldset': {
                      border: '2px solid #b44d3c',
                    },
                    '&.Mui-focused fieldset': {
                      border: '2px solid #b44d3c',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#708090',
                    '&.Mui-focused': {
                      color: '#b44d3c',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Typography>Gender</Typography>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                sx={{
                  backgroundColor: 'transparent',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '2px solid #708090',
                      borderRadius: '4px',
                    },
                    '&:hover fieldset': {
                      border: '2px solid #b44d3c',
                    },
                    '&.Mui-focused fieldset': {
                      border: '2px solid #b44d3c',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#708090',
                    '&.Mui-focused': {
                      color: '#b44d3c',
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
  variant="contained"
  sx={{ backgroundColor: '#e06758', color: '#fff', '&:hover': { backgroundColor: '#e06758' } }}
  type="submit"
>
  Next
</Button>

          </Box>
        </form>
      </CardContent>
  );
};

export default FillOutDetails;
