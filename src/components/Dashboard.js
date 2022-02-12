import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { menuListItems } from "./menuListItems";
import Orders from "./Orders";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CardHeader from "@mui/material/CardHeader";
import stockAvatar from "../assets/avatars/stock-avatar.jpg";
import SummaryInfoCards from "./SummaryInfoCards";

const mdTheme = createTheme();

function DashboardContent() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", bgcolor: "#2B3240" }}>
        <Stack sx={{ bgcolor: "#2B3240" }}>
          <CardHeader
            avatar={
              <Avatar
                alt="Dragan Bogoevski"
                src={stockAvatar}
                sx={{
                  border: 3,
                  borderColor: "#FFFFFF",
                  width: 80,
                  height: 80,
                }}
              />
            }
            title={
              <Typography variant="subtitle1" sx={{ color: "#FFFFFF" }}>
                Jane Doe
              </Typography>
            }
            subheader={
              <Typography variant="caption" sx={{ color: "#FFFFFF" }}>
                Manager
              </Typography>
            }
          />
          <List component="nav" className="sideMenu" sx={{ width: 300 }}>
            {menuListItems}
          </List>
        </Stack>
        <Box
          component="main"
          sx={{
            backgroundColor: "#FFFFFF",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            borderRadius: 15,
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <SummaryInfoCards
                  color="#43597D"
                  primaryText="Total Clients"
                  secondaryText="108"
                  status="positive"
                  percentageValue="3.2"
                />
              </Grid>
              <Grid item xs={4}>
                <SummaryInfoCards
                  color="#A0C0D7"
                  primaryText="Net Promoter Score"
                  secondaryText="+ 43"
                  status="negative"
                  percentageValue="1.5"
                />
              </Grid>
              <Grid item xs={4}>
                <SummaryInfoCards
                  color="#DE7456"
                  primaryText="Client Retention"
                  secondaryText="95%"
                  status="positive"
                  percentageValue="3.2"
                />
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
