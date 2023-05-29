import { Box, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from "../../theme";
import AHeader from "../../components/admin/AHeader";
import { useData } from "../../context/Context";

const AReservations = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { aReservations } = useData();
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Saha İsmi",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Tarih ve Saat",
      flex: 1,
    },
    {
      field: "email",
      headerName: "İptal Edildi Mi",
      flex: 1,
    }
  ];

  return (
    <Box m="20px">
    <AHeader title="RANDEVULAR" 
    //subtitle="Randevu takip sayfası" 
    />
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}
    >
      <DataGrid checkboxSelection rows={aReservations} columns={columns} />
    </Box>
  </Box>
  )
}

export default AReservations;
