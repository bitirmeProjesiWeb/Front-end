import React, { useEffect, useState } from "react";
import MapsCom from "../../components/common/MapsCom";
import SelectLocationForm from "../../components/common/SelectTypeLocationForm";
import { Grid, Paper, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BackdropComp from "../../components/common/BackdropComp";
import axios from "axios";

export default function UHomePages() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [cities, setCities] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedCounties, setSelectedCounties] = useState();
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const cr = await axios.get(
        "https://raw.githubusercontent.com/f6c5/world/master/turkiye-il-ilce.json"
      );

      const cd = cr.data;

      setCities(cd.states);
    };

    fetchData();
  }, []);

  if (!cities) {
    return <BackdropComp />;
  }

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        background: "inherit",
      }}
    >
      <Grid item xs={10} justifyContent="center">
        <Paper
          elevation={10}
          sx={{
            padding: "4rem",
            marginY: "3rem",
            background: colors.primary[400],
          }}
        >
          <SelectLocationForm
            cities={cities}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            setSelectedCounties={setSelectedCounties}
            selectedCounties={selectedCounties}
            type={type}
            setType={setType}
          />
        </Paper>
      </Grid>
      <Grid item xs={10} justifyContent="center">
        <Paper
          elevation={10}
          sx={{
            padding: "1rem",
            background: colors.primary[400],
          }}
        >
          <MapsCom
            zoom={selectedCity ? 9 : 6}
            position={
              !selectedCounties
                ? selectedCity
                  ? {
                      lat: parseFloat(selectedCity.latitude),
                      lng: parseFloat(selectedCity.longitude),
                    }
                  : {
                      lat: 39.0,
                      lng: 35.0,
                    }
                : {
                    lat: parseFloat(selectedCounties.latitude),
                    lng: parseFloat(selectedCounties.longitude),
                  }
            }
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
