import React from "react";
import { useData } from "../../context/Context";
import { Box } from "@mui/material";
import CardCom from "../../components/common/CardCom";

export default function UPitchesPage() {
  const { items } = useData();

  return (
    <Box sx={{ margin: "20px" }} style={{ display: "flex", flexWrap: "wrap" }}>
      {items.map((item) => (
        <CardCom key={item.pitchId} {...item}></CardCom>
      ))}
    </Box>
  );
}
