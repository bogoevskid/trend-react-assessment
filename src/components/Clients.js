import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, List, Typography, Container, Grid, Avatar, Stack, CardHeader } from "@mui/material";
import MenuListItems from "./MenuListItems";
import stockAvatar from "../assets/avatars/stock-avatar.png";
import SummaryInfoCards from "./SummaryInfoCards";
import CreateNewClient from "./CreateNewClient";
import ClientsTable from "./ClientsTable";

const mdTheme = createTheme();

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const clientsFromServer = await fetchClients();
      if (clientsFromServer) {
        clientsFromServer.sort((a, b) => (Date(a.timeCreated) > Date(b.timeCreated) ? 1 : -1));
        setClients(clientsFromServer);
      }
    }

    getClients()
  }, []);

  const fetchClients = async () => {
    try {
      const res = await fetch('http://localhost:5000/clients');
      const data = res.json();
      return data;
    }
    catch (error) {
      console.log(error);
    }
  };

  const addNewClient = async (client) => {
    try {
      const res = await fetch('http://localhost:5000/clients', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(client)
      });

      const data = await res.json();
      setClients([data].concat([...clients]));
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", bgcolor: "#2B3240" }}>
        <Stack sx={{ bgcolor: "#2B3240", pl: 3, pr: 3 }} spacing={5}>
          <CardHeader
            avatar={
              <Avatar
                alt="Jane Doe"
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
              <Typography
                variant="subtitle1"
                sx={{ color: "#FFFFFF", fontWeight: 700 }}
              >
                Jane Doe
              </Typography>
            }
            subheader={
              <Typography variant="caption" sx={{ color: "#FFFFFF" }}>
                Manager
              </Typography>
            }
            sx={{ pt: 10 }}
          />
          <List component="nav" className="sideMenu" sx={{ width: 300 }}>
            <MenuListItems />
          </List>
        </Stack>
        <Box
          component="main"
          sx={{
            backgroundColor: "#FFFFFF",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            borderRadius: "60px 0px 0px 60px",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, pt: 5 }}>
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
                <ClientsTable clients={clients} />
              </Grid>
              <Grid item xs={12}>
                <CreateNewClient addNewClient={addNewClient} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Clients;
