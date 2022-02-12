import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

export const menuListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: 30, color: "#FFFFFF" }}>
        <AutoAwesomeMosaicIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" sx={{ color: "#FFFFFF" }} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: 30, color: "#FFFFFF" }}>
        <AccountBoxRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Clients" sx={{ color: "#FFFFFF" }} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: 30, color: "#FFFFFF" }}>
        <CreditCardIcon />
      </ListItemIcon>
      <ListItemText primary="Sales" sx={{ color: "#FFFFFF" }} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: 30, color: "#FFFFFF" }}>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Analytics" sx={{ color: "#FFFFFF" }} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: 30, color: "#FFFFFF" }}>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" sx={{ color: "#FFFFFF" }} />
    </ListItemButton>
  </React.Fragment>
);