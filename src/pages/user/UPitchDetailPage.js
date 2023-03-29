import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import MapsCom from "../../components/common/MapsCom";
import { useData } from "../../context/Context";
import BackdropComp from "../common/BackdropComp";

export default function UPitchDetailPage() {
  const { pitchId } = useParams();
  const { pitches } = useData();
  const [pitchData, setPitchData] = useState();
  useEffect(() => {
    setPitchData(pitches.find((item) => item.pitchId === parseFloat(pitchId)));
    console.log(pitchData);
  }, [pitchId, pitches, pitchData]);

  return pitchData ? (
    <Grid container marginTop={4} spacing={4} justifyContent="center">
      <Grid item xs={3}>
        <Paper
          elevation={20}
          sx={{
            width: "100%",
            height: "100%",
            background: "inherit",
            padding: "1rem",
          }}
        >
          <img width="100%" alt={pitchData.pitchTitle} src={pitchData.image} />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper
          elevation={20}
          sx={{
            width: "100%",
            height: "100%",
            background: "inherit",
            padding: "1rem",
          }}
        >
          <Typography variant="h1">{pitchData.pitchTitle}</Typography>

          <Divider sx={{ marginY: "0.5rem" }} />
          <Typography variant="h3" color="textSecondary">
            {pitchData.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{ textAlign: "end" }}
            color="textSecondary"
          >
            Ücret: {pitchData.price} ₺
          </Typography>
          <Button
            component={NavLink}
            to={`/pitchreservation/${pitchId}`}
            variant="outlined"
            color="success"
          >
            Rezervasyon Yap
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={10}>
        {pitchData && (
          <Paper
            elevation={20}
            sx={{
              width: "100%",
              height: "100%",
              background: "inherit",
              padding: "1rem",
            }}
          >
            <MapsCom
              position={{
                lat: pitchData.lat,
                lng: pitchData.lng,
              }}
            />
          </Paper>
        )}
      </Grid>
    </Grid>
  ) : (
    <BackdropComp />
  );
}
