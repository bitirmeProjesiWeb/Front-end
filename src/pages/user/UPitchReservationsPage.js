import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/Context";
import BackdropComp from "../common/BackdropComp";

export default function UPitchReservationsPage() {
  const { pitchId } = useParams();
  const { pitches, reservations } = useData();
  const [filtered, setFiltered] = useState();
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    const pitch = pitches.find((item) => item.pitchId === parseInt(pitchId));
    const sessions = pitch?.sessions;

    setFiltered(
      sessions?.filter(
        (session) =>
          !reservations.some(
            (reservation) =>
              reservation.date === tarih &&
              reservation.pitchId === pitch.pitchId &&
              session.sessionId === reservation.sessionId
          )
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
    <Grid container xs={10} justifyContent={"center"}>
      <Grid xs={10}>
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

        {tarih && (
          <Grid xs={1} item>
            <Typography>seanslar:</Typography>
            {filtered.map((item) => (
              <Button
                variant="outlined"
                key={item.sessionId}
                sx={{ marginTop: "1rem" }}
                color="info"
              >
                {item.sessionStart} - {item.sessionFinish}
              </Button>
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  ) : (
    <BackdropComp />
  );
}
