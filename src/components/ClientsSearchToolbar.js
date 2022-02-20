import * as React from "react";
import PropTypes from "prop-types";
import { Stack, Typography, Box } from "@mui/material";
import ClientsSearchFilterPopover from "./ClientsSearchFilterPopover";
import ClientsSearchTextField from "./ClientsSearchTextField";

const ClientsSearchToolbar = ({ requestSearch, columns }) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" padding="10px 20px">
            <Typography variant="h5" gutterBottom>
                All Clients
            </Typography>
            <Box sx={{ p: 0.5, pb: 0 }} display="flex" alignItems="center">
                <ClientsSearchFilterPopover requestSearch={requestSearch} columns={columns} />
                <ClientsSearchTextField requestSearch={requestSearch} />
            </Box>
        </Stack>
    )
};

ClientsSearchToolbar.propTypes = {
    requestSearch: PropTypes.func.isRequired,
    columns: PropTypes.array.isRequired,
};

export default ClientsSearchToolbar