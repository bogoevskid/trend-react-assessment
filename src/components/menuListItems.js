import * as React from 'react';
import { ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import { CreditCard, Assessment, Settings, AutoAwesomeMosaic, AccountBoxRounded, StayCurrentPortraitSharp } from '@mui/icons-material';
import { useLocation } from "react-router-dom";

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
    <>
      {menuItems.map((item) => (
        <Box
          key={item.name}
          sx={{ backgroundColor: item.active ? "primary.main" : "transparent", borderRadius: 1 }}>
          <ListItemButton key={item.name}>
            <ListItemIcon sx={{ minWidth: 30, color: "#FFFFFF" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} sx={{ color: "#FFFFFF" }} />
          </ListItemButton>
        </Box>
      ))}
    </>
  )
};
export default MenuListItems;