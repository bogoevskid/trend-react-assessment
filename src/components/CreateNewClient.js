import React, { useState } from "react";
import PropTypes from "prop-types";
import { Paper, TextField, Button, Typography, Stack } from "@mui/material";

const CreateNewClient = ({ addNewClient }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setContactNumber("");
  }

  const createNewClient = () => {
    const newClient = {
      name: `${firstName} ${lastName}`,
      lastTransaction: "N/A",
      netPromoterScore: "N/A",
      contact: contactNumber,
      timeCreated: new Date().toJSON()
    }

    addNewClient(newClient);
    clearForm();
  }

  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 2 }}>
      <Typography gutterBottom sx={{ fontSize: "24px" }}>
        Create New Client
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pt: 3, pr: 3, pb: 3 }}>
        <TextField label="First Name" variant="outlined" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        <TextField label="Last Name" variant="outlined" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        <TextField label="Contact Number" variant="outlined" value={contactNumber} onChange={(event) => setContactNumber(event.target.value)} />
        <Button
          sx={{ fontSize: 15, pt: 1, pb: 1, backgroundColor: "#2E3D55" }}
          variant="contained"
          disableElevation
          onClick={() => createNewClient()}
          disabled={!firstName || !lastName || !contactNumber}
        >
          Create
        </Button>
      </Stack>
    </Paper>
  );
};

CreateNewClient.propTypes = {
  addNewClient: PropTypes.func.isRequired,
};

export default CreateNewClient;
