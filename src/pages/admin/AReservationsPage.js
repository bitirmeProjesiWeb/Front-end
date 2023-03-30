import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AHeader from "../../components/admin/AHeader";
import { useData } from "../../context/Context";

const AReservations = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { AReservations } = useData();
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'time', headerName: 'Time', flex: 1 },
  ];

  return (
    <Box>
    <DataGrid rows={AReservations.sort((a, b) => a.date - b.date)} columns={columns} />
  </Box>
  )
}

export default AReservations;
