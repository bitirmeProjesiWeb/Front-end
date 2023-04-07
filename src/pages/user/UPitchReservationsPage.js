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
import { useData } from "../../context/Context";
import BackdropComp from "../common/BackdropComp";
import { tokens } from "../../theme";
import { Box } from "@mui/system";

export default function UPitchReservationsPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { pitchId } = useParams();
  const { pitches, reservations } = useData();
  const [filtered, setFiltered] = useState();
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    const pitch = pitches.find((item) => item.pitchId === parseInt(pitchId));
    const sessions = pitch?.sessions;

    setFiltered(
      sessions?.map((session) =>
        !reservations.some(
          (reservation) =>
            reservation.date === tarih &&
            reservation.pitchId === pitch.pitchId &&
            session.sessionId === reservation.sessionId
        )
          ? session
          : { ...session, emp: true }
      )
    );
  }, [pitchId, !filtered, reservations, tarih, pitches]);

  const minTarih = new Date().toISOString().slice(0, 10);
  const maxTarih = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  function tarihDegistir(event) {
    const secilenTarih = event.target.value;

    if (secilenTarih >= minTarih && secilenTarih <= maxTarih) {
      setTarih(secilenTarih);
    } else {
      setTarih();
    }
  }

  return filtered ? (
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
              onChange={tarihDegistir}
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
  ) : (
    <BackdropComp />
  );
}
