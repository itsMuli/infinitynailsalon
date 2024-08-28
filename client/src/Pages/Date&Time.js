import React, { useState } from 'react';
import { Box, Grid, CardContent, Typography, Button, List, ListItem, ListItemText, TextField, CardActions } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { isMonday, isPast } from 'date-fns';

const timeSlots = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
];

const DateAndTimePicker = ({ onNext }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [disabledSlots, setDisabledSlots] = useState(new Set());

  const handleTimeSlotClick = (slot) => {
    if (!disabledSlots.has(slot)) {
      setSelectedTimeSlot(slot);
      setDisabledSlots(prev => new Set([...prev, slot]));
    }
  };

  const handleNextClick = () => {
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time Slot:', selectedTimeSlot);
    if (selectedDate && selectedTimeSlot) {
      if (onNext){
        onNext();
      }
    } else {
      console.log('Please select both date and time slot.');
    }
  };

  return (
    <Box>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                renderInput={(params) => <TextField fullWidth {...params} />}
                shouldDisableDate={(date) => isMonday(date) || isPast(date)}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Select a Time Slot
            </Typography>
            <List>
              {timeSlots.map((slot) => (
                <ListItem
                  button
                  key={slot}
                  onClick={() => handleTimeSlotClick(slot)}
                  sx={{
                    backgroundColor: selectedTimeSlot === slot ? 'rgba(224, 103, 88, 0.1)' : 'inherit',
                    border: selectedTimeSlot === slot ? '2px solid #e06758' : '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '4px',
                    marginBottom: '8px',
                  }}
                >
                  <ListItemText primary={slot} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
    <Button
      variant="contained"
      sx={{ backgroundColor: '#e06758', '&:hover': { backgroundColor: '#e06758' } }}
      onClick={handleNextClick}
      disabled={!selectedDate || !selectedTimeSlot}
    >
      Next
    </Button>
    </CardActions>
  </Box>
  );
};

export default DateAndTimePicker;
