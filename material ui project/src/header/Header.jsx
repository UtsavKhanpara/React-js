import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"rgb(60, 179, 113)"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} style={{color:"black"}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:"black"}}>
            News
          </Typography>
          <Button style={{color:"black", fontWeight:"bold"}} color="inherit">LogOut</Button>
          <Button style={{color:"black", fontWeight:"bold"}} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
