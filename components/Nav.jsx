import { useState, useEffect } from "react";

import { NavLink } from ".";
import { userService } from "services";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export { Nav };

function Nav() {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-brand border-bottom d-block">
      <div className="align-items-center d-flex justify-content-around navbar-nav"> 
        <NavLink
          href="/"
          className="nav-item nav-link navbar-brand flex-1 mr-5"
        >
          NOTEBOOK
        </NavLink>
        <div className="align-items-center d-flex">
        <NavLink href="/" exact className="nav-item nav-link">
          Home
        </NavLink>
        <NavLink href="/authors" className="nav-item nav-link">
          Author
        </NavLink>
        <NavLink href="/posts" className="nav-item nav-link">
          Posts
        </NavLink>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="nav-item nav-link font-weight-bold toggler"
          >
           <i className="ri-user-settings-line"></i>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <NavLink className="p-4" href="/dashboard" >My notebook</NavLink>
            <MenuItem className="p-4" onClick={logout}>Logout</MenuItem>
          </Menu>
        </div>
        </div>
      </div>
    </nav>
  );
}
