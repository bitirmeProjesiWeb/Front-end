import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import MapsCom from "../../components/common/MapsCom";
import BackdropComp from "../../components/common/BackdropComp";
import { tokens } from "../../theme";
import axios from "axios";

export default function UPitchDetailPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [pitch, setPitch] = useState();

  const { pitchId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const pr = await axios.get(
        `http://localhost:5000/pitches?pitchId=${pitchId}`
      );

      const pd = pr.data[0];

      setPitch(pd);
    };

    fetchData();
  }, [pitchId]);

  if (!pitch) {
    return <BackdropComp />;
  }
  return (
    <Grid container marginTop={4} spacing={4} justifyContent="center">
      <Grid item xs={3}>
        <Paper
          elevation={20}
          sx={{
            width: "100%",
            height: "100%",
            background: colors.primary[400],
            padding: "1rem",
          }}
        >
          <img
            width="100%"
            height="auto"
            style={{ objectFit: "contain" }}
            alt={pitch.pitchTitle}
            src={pitch.image}
          />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper
          elevation={20}
          sx={{
            width: "100%",
            height: "100%",
            background: colors.primary[400],
            padding: "1rem",
          }}
        >
          <Typography variant="h1">{pitch.pitchTitle}</Typography>

          <Divider sx={{ marginY: "0.5rem" }} />
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" color="textSecondary">
              Ücret: {pitch.price} ₺
            </Typography>
            <Button
              component={NavLink}
              to={`/pitchreservation/${pitchId}`}
              variant="outlined"
              color="success"
            >
              Rezervasyon Yap
            </Button>
          </Box>
          <Typography marginTop="2rem" variant="h5" color="textSecondary">
            {pitch.description}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={10}>
        {pitch && (
          <Paper
            elevation={20}
            sx={{
              width: "100%",
              height: "100%",
              padding: "1rem",
              background: colors.primary[400],
            }}
          >
            <MapsCom
              position={{
                lat: pitch.lat,
                lng: pitch.lng,
              }}
            />
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}
