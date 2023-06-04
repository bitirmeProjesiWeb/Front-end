import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AHeader from "../../components/admin/AHeader";
//import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Button from "@mui/material/Button";

import ACommentBox from "../../components/admin/ACommentBox";
import AQuestionsBox from "../../components/admin/AQuestionsBox";

export default function ACommentsPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //STATÜ
  const [status, setStatus] = useState("");
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  //SAHA İSMİ
  const [pitchName, setPitchName] = useState("");
  const handleChangePitchName = (event) => {
    setPitchName(event.target.value);
  };

  //SIRALAMA ÖLÇÜTÜ
  const [sort, setSort] = useState("");
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  //TARİH SEÇİMİ
  const [selectedStartDate, setSelectedStartDate] = useState(
    dayjs("2022-04-17")
  );
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs("2022-04-17"));

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  const [valuea, setValuea] = useState(dayjs("2022-04-17"));

  //SORU GÖZÜKMESİ İÇİN
  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleButtonClick = () => {
    setShowCommentBox(true);
  };

  //YORUMLAR

  //STATÜ
  const [status2, setStatus2] = useState("");
  const handleChangeStatus2 = (event) => {
    setStatus2(event.target.value);
  };

  //SAHA İSMİ
  const [pitchName2, setPitchName2] = useState("");
  const handleChangePitchName2 = (event) => {
    setPitchName2(event.target.value);
  };

  //SIRALAMA ÖLÇÜTÜ
  const [sort2, setSort2] = useState("");
  const handleChangeSort2 = (event) => {
    setSort2(event.target.value);
  };

  //TARİH SEÇİMİ
  const [selectedStartDate2, setSelectedStartDate2] = useState(
    dayjs("2022-04-17")
  );
  const [selectedEndDate2, setSelectedEndDate2] = useState(dayjs("2022-04-17"));

  const handleStartDateChange2 = (date) => {
    setSelectedStartDate2(date);
  };

  const handleEndDateChange2 = (date) => {
    setSelectedEndDate2(date);
  };

  const [valuea2, setValuea2] = useState(dayjs("2022-04-17"));

  //SORU GÖZÜKMESİ İÇİN
  const [showCommentBox2, setShowCommentBox2] = useState(false);

  const handleButtonClick2 = () => {
    setShowCommentBox2(true);
  };

  return (
    <Box m="20px">
      <AHeader title="SORU VE YORUMLAR" />
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
                    SPOR ALANLARI SORULARI
                  </Typography>
                }
                value="1"
              />
              <Tab
                label={
                  <Typography variant="subtitle1" fontWeight="bold">
                    SPOR ALANI YORUMLARI
                  </Typography>
                }
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box>
              <Box>
                {/* FİLTRE KISMI */}
                <Grid container justify="flex-start">
                  <Grid item xs={2}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h7" fontWeight="bold" mb={2}>
                        STATÜ
                      </Typography>
                      <Box width={120}>
                        <FormControl variant="filled" sx={{ minWidth: 150 }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            STATÜ
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={status}
                            onChange={handleChangeStatus}
                          >
                            <MenuItem value={1}>TÜM SORULAR</MenuItem>
                            <MenuItem value={2}>
                              CEVAP BEKLEYEN SORULAR
                            </MenuItem>
                            <MenuItem value={3}>CEVAPLANMIŞ SORULAR</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h7" fontWeight="bold" mb={2}>
                        SAHA İSMİ
                      </Typography>
                      <Box width={120}>
                        <FormControl variant="filled" sx={{ minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            SAHA İSMİ
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={pitchName}
                            onChange={handleChangePitchName}
                          >
                            <MenuItem value={1}>
                              BAĞCILAR FUTBOL SAHASI
                            </MenuItem>
                            <MenuItem value={2}>
                              ZEYTİNBURNU FUTBOL SAHASI
                            </MenuItem>
                            <MenuItem value={3}>GÜNGÖREN SPOR SAHASI</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h7" fontWeight="bold" mb={1}>
                      TARİH ARALIĞI
                    </Typography>
                    <Box mt={2}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box sx={{ display: "inline-flex" }}>
                          <DatePicker
                            label="Başlangıç Tarihi"
                            value={selectedStartDate}
                            onChange={handleStartDateChange}
                          />
                          <Box m={1} />
                          <DatePicker
                            label="Bitiş Tarihi"
                            value={selectedEndDate}
                            onChange={handleEndDateChange}
                          />
                        </Box>
                      </LocalizationProvider>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h7" fontWeight="bold" mb={2}>
                        SIRALAMA ÖLÇÜTÜ
                      </Typography>
                      <Box width={120}>
                        <FormControl variant="filled" sx={{ minWidth: 150 }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            SIRALAMA ÖLÇÜTÜ
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={sort}
                            onChange={handleChangeSort}
                          >
                            <MenuItem value={1}>YENİDEN ESKİYE</MenuItem>
                            <MenuItem value={2}>ESKİDEN YENİYE</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2} display="flex" alignItems="center" mt={4}>
                    <Button
                      variant="contained"
                      size="large"
                      // color={colors.blueAccent[500]}
                      sx={{ width: "150px", height: "55px" }}
                      onClick={handleButtonClick}
                    >
                      FİLTRELE
                    </Button>
                  </Grid>
                </Grid>

                {/* SORULAR TABLOSU */}
              </Box>
              <Box mt={10} backgroundColor={colors.primary[500]}>
                {showCommentBox && <AQuestionsBox />}
              </Box>
            </Box>
          </TabPanel>
          {/* SPOR ALANI YORUMLARI KISMI */}
          <TabPanel value="2">
            <Box>
              <Box>
                {/* FİLTRE KISMI */}
                <Grid container justify="flex-start">
                  <Grid item xs={2}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h7" fontWeight="bold" mb={2}>
                        STATÜ
                      </Typography>
                      <Box width={120}>
                        <FormControl variant="filled" sx={{ minWidth: 150 }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            STATÜ
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={status2}
                            onChange={handleChangeStatus2}
                          >
                            <MenuItem value={1}>TÜM YORUMLAR</MenuItem>
                            <MenuItem value={2}>
                              CEVAP BEKLEYEN YORUMLAR
                            </MenuItem>
                            <MenuItem value={3}>CEVAPLANMIŞ YORUMLAR</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h7" fontWeight="bold" mb={2}>
                        SAHA İSMİ
                      </Typography>
                      <Box width={120}>
                        <FormControl variant="filled" sx={{ minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            SAHA İSMİ
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={pitchName2}
                            onChange={handleChangePitchName2}
                          >
                            <MenuItem value={1}>
                              BAĞCILAR FUTBOL SAHASI
                            </MenuItem>
                            <MenuItem value={2}>
                              ZEYTİNBURNU FUTBOL SAHASI
                            </MenuItem>
                            <MenuItem value={3}>GÜNGÖREN SPOR SAHASI</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h7" fontWeight="bold" mb={1}>
                      TARİH ARALIĞI
                    </Typography>
                    <Box mt={2}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box sx={{ display: "inline-flex" }}>
                          <DatePicker
                            label="Başlangıç Tarihi"
                            value={selectedStartDate2}
                            onChange={handleStartDateChange2}
                          />
                          <Box m={1} />
                          <DatePicker
                            label="Bitiş Tarihi"
                            value={selectedEndDate2}
                            onChange={handleEndDateChange2}
                          />
                        </Box>
                      </LocalizationProvider>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h7" fontWeight="bold" mb={2}>
                        SIRALAMA ÖLÇÜTÜ
                      </Typography>
                      <Box width={120}>
                        <FormControl variant="filled" sx={{ minWidth: 150 }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            SIRALAMA ÖLÇÜTÜ
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={sort2}
                            onChange={handleChangeSort2}
                          >
                            <MenuItem value={1}>YENİDEN ESKİYE</MenuItem>
                            <MenuItem value={2}>ESKİDEN YENİYE</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2} display="flex" alignItems="center" mt={4}>
                    <Button
                      variant="contained"
                      size="large"
                      // color={colors.blueAccent[500]}
                      sx={{ width: "150px", height: "55px" }}
                      onClick={handleButtonClick2}
                    >
                      FİLTRELE
                    </Button>
                  </Grid>
                </Grid>

                {/* SORULAR TABLOSU */}
              </Box>
              <Box mt={10} backgroundColor={colors.primary[500]}>
                {showCommentBox2 && <ACommentBox />}
              </Box>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
