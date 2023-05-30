import React, { useEffect, useState } from "react";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import CardCom from "../../components/common/CardCom";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UPitchesPage() {
  const [pitches, setPitches] = useState();
  const { il, ilce, tip } = useParams();

  const getData = async () => {
    await axios
      .get("http://localhost:5000/pitches")
      .then((res) => setPitches(res.data));
  };

  useEffect(() => {
    getData();
    console.log(pitches);
  }, []);

  if (!pitches) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Box sx={{ margin: "20px" }} style={{ display: "flex", flexWrap: "wrap" }}>
      {pitches
        .filter(
          (item) =>
            item.ilId === il &&
            (ilce === "0" ? true : item.ilçeId === ilce) &&
            item.type === tip
        )
        .map((item) => (
          <CardCom key={item.pitchId} {...item} />
        ))}
    </Box>
  );
}
