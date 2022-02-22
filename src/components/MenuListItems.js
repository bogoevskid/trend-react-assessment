import React from 'react';
import { useLocation } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import { CreditCard, Assessment, Settings, AutoAwesomeMosaic, AccountBoxRounded } from '@mui/icons-material';

const MenuListItems = () => {
  const location = useLocation();
  const currentPath = location.pathname.toString();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <AutoAwesomeMosaic />,
      active: currentPath.includes("dashboard")
    },
    {
      name: "Clients",
      icon: <AccountBoxRounded />,
      active: currentPath.includes("clients")
    },
    {
      name: "Sales",
      icon: <CreditCard />,
      active: currentPath.includes("sales")
    },
    {
      name: "Analytics",
      icon: <Assessment />,
      active: currentPath.includes("analytics")
    },
    {
      name: "Settings",
      icon: <Settings />,
      active: currentPath.includes("settings")
    },
  ]

  return (
    menuItems.map((item) => (
      <Box
        key={item.name}
        sx={{
          backgroundColor: item.active ? "primary.main" : "transparent",
          borderRadius: 1,
          m: 1,
          "& .MuiListItemButton-root:hover": {
            backgroundColor: item.active ? "primary.main" : "#474d59",
            borderRadius: 1
          }
        }}>
        <ListItemButton key={item.name}>
          <ListItemIcon sx={{ minWidth: 30, color: "#FFFFFF" }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.name} sx={{ color: "#FFFFFF" }} />
        </ListItemButton>
      </Box>
    ))
  )
};
export default MenuListItems;
