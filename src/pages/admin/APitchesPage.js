import React, { useState } from "react";
import { Box, TextField, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AHeader from "../../components/admin/AHeader";
import { useData } from "../../context/Context";
//import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function APitchesPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { pitchList } = useData();

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 500 },
    {
      field: "pitchName",
      headerName: "Saha İsmi",
      flex: 1,
      cellClassName: "name-column--cell",
      width: 150,
    },
  ];

  return (
    <Box m="20px">
      <AHeader title="SPOR ALANLARI" />
      <Box backgroundColor={colors.primary[400]}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="lab API tabs example"
            >
              <Tab
                label={
                  <Typography variant="subtitle1" fontWeight="bold">
                    SPOR ALANLARI LİSTESİ
                  </Typography>
                }
                value="1"
              />
              <Tab
                label={
                  <Typography variant="subtitle1" fontWeight="bold">
                    YENİ SPOR ALANI OLUŞTURMA
                  </Typography>
                }
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box
              // m="40px 0 0 0"
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
              <DataGrid checkboxSelection rows={pitchList} columns={columns} />
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box>
              <Typography variant="h4" fontWeight="bold" mb={3}>
                SAHA BİLGİLERİ
              </Typography>
              <Box>
                <Grid container>
                  <Grid item xs={12} mb={2}>
                    <Typography variant="h7" fontWeight="bold">
                      SAHA KATEGORİSİ
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mb={2}>
                    <FormControl variant="filled" sx={{ minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-filled-label">
                        SAHA KATEGORİSİ
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        //value={pitchName}
                        //onChange={handleChangePitchName}
                      >
                        <MenuItem value={1}>FUTBOL SAHASI</MenuItem>
                        <MenuItem value={2}>BASKETBOL SAHASI</MenuItem>
                        <MenuItem value={3}>TENİS KORTU</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
              <Box mb={2}>
                <Typography variant="h7" fontWeight="bold" mb={2}>
                  SAHA İSMİ
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Saha ismi giriniz."
                  variant="outlined"
                  rows={1}
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <Typography variant="h7" fontWeight="bold" mb={2}>
                  SAHA ÖZELLİKLERİ
                </Typography>
                <TextField
                  label="Saha özelliklerini giriniz."
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <Typography variant="h7" fontWeight="bold" mb={2}>
                  SAHA ADRESİ
                </Typography>
                <TextField
                  label="Saha adresini giriniz."
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <Typography variant="h7" fontWeight="bold" mb={2}>
                  SAHA AÇIKLAMASI
                </Typography>
                <TextField
                  label="Saha Açıklamasını giriniz."
                  multiline
                  rows={2}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <Button
                  variant="contained"
                  size="large"
                  // color={colors.blueAccent[500]}
                  sx={{ width: "200px", height: "55px" }}
                  // onClick={handleButtonClick}
                >
                  KAYDET
                </Button>
              </Box>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
