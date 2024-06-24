import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Permissions App
        </Typography>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/request-permission">Request Permission</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/modify-permission">Modify Permission</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/get-permissions">Get Permissions</MenuItem>
        </Menu>
        <Button color="inherit" component={Link} to="/">
          <HomeIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;