import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, Grid } from "@mui/material";
import SummaryInfoCards from "./SummaryInfoCards";
import CreateNewClient from "./CreateNewClient";
import ClientsTable from "./ClientsTable";
import SidePanel from "./SidePanel";

const mdTheme = createTheme();

function Clients() {
  const clientsSummaryInfoStats = [
    {
      color: "#43597D",
      title: "Total Clients",
      value: "108",
      status: "positive",
      percentageValue: "3.2"
    },
    {
      color: "#A0C0D7",
      title: "Net Promoter Score",
      value: "+ 43",
      status: "negative",
      percentageValue: "1.5"
    },
    {
      color: "#DE7456",
      title: "Client Retention",
      value: "95%",
      status: "positive",
      percentageValue: "3.2"
    }
  ]
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
        <SidePanel />
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
              {clientsSummaryInfoStats.map((clientsSummary) => (
                <Grid item xs={12 / clientsSummaryInfoStats.length} key={clientsSummary.title}>
                  <SummaryInfoCards
                    color={clientsSummary.color}
                    primaryText={clientsSummary.title}
                    secondaryText={clientsSummary.value}
                    status={clientsSummary.status}
                    percentageValue={clientsSummary.percentageValue}
                  />
                </Grid>
              ))}
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
