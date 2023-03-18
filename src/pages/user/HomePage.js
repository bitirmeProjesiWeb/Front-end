import { Box } from "@mui/material";
import React from "react";
import CardCom from "../../components/common/CardCom";
import { useData } from "../../context/Context";

export default function HomePages() {
  const { items } = useData();

  return (
    <Box sx={{margin:"20px"}} style={{ display: "flex", flexWrap: "wrap" }}>
      {items.map((item) => (
        <CardCom {...item}></CardCom>
      ))}
    </Box>
  );
}
