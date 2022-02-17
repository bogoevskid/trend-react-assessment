import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ClientsSearchToolbar from "./ClientsSearchToolbar";

const ClientsTable = ({ clients }) => {
  const columns = [
    {
      field: "name",
      type: "string",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "lastTransaction",
      type: "string",
      headerName: "Last Transaction",
      flex: 1,
    },
    {
      field: "netPromoterScore",
      type: "string",
      headerName: "Net Promoter Score",
      flex: 1,
    },
    {
      field: "contact",
      type: "string",
      headerName: "Contact",
      flex: 1,
    },
  ];
  const [rows, setRows] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [filterButtonEl, setFilterButtonEl] = React.useState(null);

  React.useEffect(() => { setRows(clients) }, [clients])

  const escapeRegExp = (value) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = clients.filter((client) => {
      return Object.keys(client).some((field) => {
        return searchRegex.test(client[field].toString());
      });
    });
    setRows(filteredRows);
  };

  return (
    <div style={{ height: 343, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableColumnMenu
        hideFooter
        components={{
          Toolbar: ClientsSearchToolbar,
        }}
        componentsProps={{
          panel: {
            anchorEl: filterButtonEl
          },
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
            setFilterButtonEl,
          }
        }}
        sx={{
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          ".MuiDataGrid-columnHeader": {
            p: 0
          },
          ".MuiDataGrid-cell": {
            p: 0
          },
          ".MuiDataGrid-columnHeaderTitleContainer": {
            p: 0
          },
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700
          }
        }}
      />
    </div>
  );
};

export default ClientsTable;
