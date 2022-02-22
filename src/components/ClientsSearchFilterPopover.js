import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Stack, Box, Popover, Button, FormControl, InputLabel, Select, MenuItem, TextField, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon, FilterList as FilterListIcon } from '@mui/icons-material';

const ClientsSearchFilterPopover = ({ requestSearch, columns }) => {
    const [selectedColumn, setSelectedColumn] = useState(columns[0].field);
    const [columnValue, setColumnValue] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'clients-filter-popover' : undefined;

    const filterByColumnValue = (value) => {
        setColumnValue(value);
        requestSearch(value, selectedColumn);
    }

    const clearFilterByColumnValue = () => {
        setColumnValue("");
        requestSearch("", selectedColumn);
    }

    return (
        <Box>
            <Button aria-describedby={id} variant="text" size="small" onClick={(event) => setAnchorEl(event.currentTarget)}
                sx={{
                    color: open ? "white" : "black",
                    textTransform: "none",
                    backgroundColor: open ? "primary.main" : "transparent"
                }}>
                <FilterListIcon sx={{ height: 23, width: 23, pb: 0.5, pr: 0.5 }} />
                <Typography variant="body2" sx={{ fontWeight: 500, pr: 1 }}>
                    Filter
                </Typography>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    horizontal: 'right',
                    vertical: 'top'
                }}
                sx={{ mt: 0.5 }}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 1 }}>
                    <IconButton sx={{ ml: 1, mr: 1 }} onClick={clearFilterByColumnValue}>
                        <CloseIcon fontSize="inherit" sx={{ color: "#7f7f7f" }} />
                    </IconButton>
                    <FormControl variant="standard" fullWidth sx={{ minWidth: "180px" }}>
                        <InputLabel variant="standard" id="select-filter-column-label">
                            Column
                        </InputLabel>
                        <Select
                            labelId="select-filter-column-label"
                            id="select-filter-column"
                            value={selectedColumn}
                            onChange={(event) => { setSelectedColumn(event.target.value) }}
                        >
                            {columns.map((item) => (
                                <MenuItem key={item.field} value={item.field}>{item.headerName === "Contact" ? "Contact Number" : item.headerName}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ minWidth: "180px" }}>
                        <TextField id="clients-filter-column-value" label="Value" value={columnValue} variant="standard" placeholder="Value"
                            InputLabelProps={{ shrink: true }} onChange={(event) => filterByColumnValue(event.target.value)} />
                    </FormControl>
                </Stack>
            </Popover>
        </Box>
    )
}

ClientsSearchFilterPopover.propTypes = {
    requestSearch: PropTypes.func.isRequired,
    columns: PropTypes.array.isRequired,
};

export default ClientsSearchFilterPopover