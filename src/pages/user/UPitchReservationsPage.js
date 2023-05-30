import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tokens } from "../../theme";
import { Box } from "@mui/system";
import BackdropComp from "../../components/common/BackdropComp";
import axios from "axios";

export default function UPitchReservationsPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { pitchId } = useParams();

  const [filtered, setFiltered] = useState();
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const pitchResponse = await axios.get(
        `http://localhost:5000/pitches?pitchId=${pitchId}`
      );
      const reservationsResponse = await axios.get(
        `http://localhost:5000/reservations?pitchId=${pitchId}`
      );

      const pitchData = pitchResponse.data[0];
      const reservationsData = reservationsResponse.data;

      if (pitchData && reservationsData) {
        const filteredSessions = pitchData.sessions.map((session) =>
          !reservationsData.some(
            (reservation) =>
              reservation.date === tarih &&
              session.sessionId === reservation.sessionId
          )
            ? session
            : { ...session, emp: true }
        );

        setFiltered(filteredSessions);
      }
    };

    fetchData();
  }, [pitchId, tarih]);

  const minTarih = new Date().toISOString().slice(0, 10);
  const maxTarih = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const setDate = (event) => {
    const secilenTarih = event.target.value;

    if (secilenTarih >= minTarih && secilenTarih <= maxTarih) {
      setTarih(secilenTarih);
    } else {
      setTarih();
    }
  };

  if (!filtered) {
    return <BackdropComp />;
  }

  return (
    <Grid container marginTop={4} spacing={4} justifyContent={"center"}>
      <Grid item xs={8}>
        <Paper
          elevation={20}
          sx={{
            width: "100%",
            height: "100%",
            background: colors.primary[400],
            padding: "1rem",
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <TextField
              type="date"
              value={tarih}
              onChange={setDate}
              inputProps={{
                min: minTarih,
                max: maxTarih,
                style: {
                  color: tarih < minTarih ? "red" : "inherit",
                },
              }}
            />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper
          elevation={20}
          sx={{
            width: "100%",
            height: "auto",
            background: colors.primary[400],
            padding: "1rem",
          }}
        >
          <Typography align="center" variant="h4">
            seanslar
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            {tarih &&
              filtered.map((item) =>
                !item.emp ? (
                  <Button
                    variant="outlined"
                    key={item.sessionId}
                    sx={{ marginTop: "1rem" }}
                    color="info"
                  >
                    {item.sessionStart} - {item.sessionFinish}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    key={item.sessionId}
                    sx={{ marginTop: "1rem" }}
                    color="error"
                    onClick={() => alert("dolu")}
                  >
                    {item.sessionStart} - {item.sessionFinish}
                  </Button>
                )
              )}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
