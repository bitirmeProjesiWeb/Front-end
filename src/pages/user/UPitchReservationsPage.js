import { Button, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/Context";
import BackdropComp from "../common/BackdropComp";

export default function UPitchReservationsPage() {
  const { pitchId } = useParams();
  const { pitches, reservations } = useData();
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    const pitch = pitches.find((item) => item.pitchId === parseInt(pitchId));
    const sessions = pitch?.sessions;
    setFiltered(
      sessions?.filter(
        (session) =>
          !reservations.some(
            (reservation) => reservation.sessionId === session.sessionId
          )
      )
    );
    console.log(filtered[0].sessionFinish);
  }, [!filtered, reservations, pitches]);
  return filtered ? (
    <Grid container>
      <Grid xs={1} margin={"1rem"} item>
        {filtered.map((item) => (
          <Button variant="outlined" key={item.sessionId} color="info">
            {item.sessionStart} - {item.sessionFinish}
          </Button>
        ))}
      </Grid>
    </Grid>
  ) : (
    <BackdropComp />
  );
}
