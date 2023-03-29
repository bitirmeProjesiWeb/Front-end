import React from "react";
import { useData } from "../../context/Context";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import CardCom from "../../components/common/CardCom";
import { useParams } from "react-router-dom";

export default function UPitchesPage() {
  const { pitches } = useData();
  const { il, ilce, tip } = useParams();
  return pitches ? (
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
  ) : (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
