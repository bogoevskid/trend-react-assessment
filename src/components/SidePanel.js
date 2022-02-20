import React, { useState } from 'react'
import { List, Typography, Avatar, Stack, CardHeader } from "@mui/material";
import MenuListItems from "./MenuListItems";
import stockAvatar from "../assets/avatars/stock-avatar.png";

const SidePanel = () => {
    const [name, setName] = useState("Jane Doe");
    const [role, setRole] = useState("Manager");

    return (
        <Stack sx={{ bgcolor: "#2B3240", pl: 3, pr: 3 }} spacing={5}>
            <CardHeader
                avatar={
                    <Avatar alt={name} src={stockAvatar} sx={{ border: 3, borderColor: "#FFFFFF", width: 80, height: 80 }} />
                }
                title={
                    <Typography sx={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 500 }}>
                        {name}
                    </Typography>
                }
                subheader={
                    <Typography sx={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {role}
                    </Typography>
                }
                sx={{ pt: 10 }}
            />
            <List component="nav" className="sideMenu" sx={{ width: 300 }}>
                <MenuListItems />
            </List>
        </Stack>
    )
}

export default SidePanel