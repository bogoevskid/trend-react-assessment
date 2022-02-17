import PropTypes from "prop-types";
import { Stack, Typography, TextField, Box, IconButton } from "@mui/material";
import { GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";
import { Clear } from "@mui/icons-material";

const ClientsSearchToolbar = ({ value, clearSearch, onChange, setFilterButtonEl }) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding="10px 20px"
        >
            <Typography variant="h5" gutterBottom>
                All Clients
            </Typography>
            <Box
                sx={{
                    p: 0.5,
                    pb: 0,
                }}
                display="flex"
                alignItems="center"
            >
                <GridToolbarContainer>
                    <GridToolbarFilterButton ref={setFilterButtonEl} sx={{ color: "black", mb: "10px" }} />
                </GridToolbarContainer>
                <TextField
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    placeholder="Search…"
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                title="Clear"
                                aria-label="Clear"
                                size="small"
                                style={{ visibility: value ? "visible" : "hidden" }}
                                onClick={clearSearch}
                            >
                                <Clear fontSize="small" />
                            </IconButton>
                        ),
                    }}
                    sx={{
                        width: {
                            xs: 1,
                            sm: "auto",
                        },
                        pl: 3,
                        m: (theme) => theme.spacing(1, 0.5, 1.5),
                        "& .MuiFilledInput-root:before": {
                            borderBottom: 0,
                        },
                        "& .MuiFilledInput-input": {
                            padding: "5px 0px 5px 15px",
                        },
                        "& .MuiFilledInput-root": {
                            borderRadius: "10px",
                        },
                        "& .MuiFilledInput-root:hover:not(.Mui-disabled):before":
                        {
                            border: 0,
                        },
                        "& .MuiFilledInput-root:after": {
                            border: 0,
                        },
                    }}
                />
            </Box>
        </Stack>
    )
}

ClientsSearchToolbar.propTypes = {
    clearSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    setFilterButtonEl: PropTypes.func.isRequired,
};

export default ClientsSearchToolbar