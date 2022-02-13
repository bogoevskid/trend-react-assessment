import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CreateNewClient = () => {
  return (
    <Paper elevation={0} variant="outlined">
      <Grid container sx={{ pb: 4 }}>
        <Grid item xs={12}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h5">Create New Client</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            <TextField label="First Name" variant="outlined" />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            <TextField label="Last Name" variant="outlined" />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            <TextField label="Contact Number" variant="outlined" />
          </Box>
        </Grid>
        <Grid item xs={3} display="flex" justifyContent="center">
          <Box sx={{ p: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E0E0E0",
                color: "#A6A6A6",
                fontSize: 15,
                pt: 1,
                pb: 1,
              }}
              disableElevation
            >
              Create
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreateNewClient;
