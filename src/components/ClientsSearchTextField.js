import React from 'react';
import PropTypes from "prop-types";
import { TextField, IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";

const ClientsSearchTextField = ({ requestSearch }) => {
    const [searchText, setSearchText] = React.useState("");

    const requestTextSearch = (value) => {
        setSearchText(value);
        requestSearch(value);
    }

    const clearTextSearch = () => {
        setSearchText("");
        requestSearch("");
    };

    return (
        <TextField
            variant="filled"
            value={searchText}
            onChange={(event) => requestTextSearch(event.target.value)}
            placeholder="Search…"
            InputProps={{
                endAdornment: (
                    <IconButton
                        title="Clear"
                        aria-label="Clear"
                        size="small"
                        style={{ visibility: searchText ? "visible" : "hidden" }}
                        onClick={() => clearTextSearch()}
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
                    padding: "5px 0px 5px 20px",
                    fontSize: "15px"
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
    )
};

ClientsSearchTextField.propTypes = {
    requestSearch: PropTypes.func.isRequired,
};

export default ClientsSearchTextField