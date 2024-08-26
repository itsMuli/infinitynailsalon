import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import { PhoneInTalk } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const pages = ['Services', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handlePageNavigation = (page) => {
    if (page === 'Home') {
      navigate('/');
    } else if (page === 'Book Appointment') {
      navigate('/book-appointment');
    } else if (page === 'My Bookings') {
      navigate('/my-bookings');
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
    handleDrawerToggle();
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'slategray' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            INFINITYNAILSALON
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  width: 240,
                  boxSizing: 'border-box',
                },
              }}
            >
              <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <IconButton onClick={handleDrawerToggle} sx={{ alignSelf: 'flex-end' }}>
                  <CloseIcon />
                </IconButton>
                <MenuItem onClick={() => handlePageNavigation('Home')}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handlePageNavigation(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <Button
                  onClick={() => handlePageNavigation('Book Appointment')}
                  sx={{
                    my: 2, color: 'white', backgroundColor: '#F56F5E',
                    '&:hover': {
                      backgroundColor: '#e06758',
                    },
                    width: '100%'
                  }}
                >
                  Book Appointment
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                  <IconButton><PhoneInTalk /></IconButton>
                  <Typography variant="body2" sx={{ ml: 1,display: { md: 'none'} }}>
                    +254 (758) 628-253
                  </Typography>
                </Box>
              </Box>
            </Drawer>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            INFINITYNAILSALON
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => handlePageNavigation('Home')}
              sx={{
                my: 2, color: 'slategray', display: 'block',
                '&:hover': {
                  backgroundColor: '#F56F5E',
                  color: 'white',
                },
                mx: 1
              }}
            >
              Home
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageNavigation(page)}
                sx={{
                  my: 2, color: 'slategray', display: 'block',
                  '&:hover': {
                    backgroundColor: '#F56F5E',
                    color: 'white',
                  },
                  mx: 1
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0, alignItems: 'center' }}>
            <MenuItem onClick={() => handlePageNavigation('My Bookings')} sx={{
              my: 2, color: 'slategray', display: 'block',
              '&:hover': {
                backgroundColor: '#F56F5E',
                color: 'white',
              },
              mx: 1
            }}>
              <Typography textAlign="center">My Bookings</Typography>
            </MenuItem>
          </Box>

          <Box>
            <IconButton sx={{ display: { xs: 'none', md: 'flex' } }}><PhoneInTalk /></IconButton>
          </Box>
          <Box sx={{ paddingRight: "10px" }}>
            <Typography
              variant="body2"
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 3 }}
            >
              +254 (758) 628-253
            </Typography>
          </Box>
          <Button
              onClick={() => handlePageNavigation('Book Appointment')}
              sx={{
                display: { xs: 'none', md: 'block' },
                my: 2, color: 'white', backgroundColor: '#F56F5E',
                '&:hover': {
                  backgroundColor: '#e06758',
                },
                mr: 2
              }}
            >
              Book Appointment
            </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
