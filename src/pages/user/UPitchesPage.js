import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CardCom from "../../components/common/CardCom";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackdropComp from "../../components/common/BackdropComp";

export default function UPitchesPage() {
  const [pitches, setPitches] = useState();
  const { il, ilce, tip } = useParams();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/pitches")
        .then((res) => setPitches(res.data));
    };

    getData();
  }, []);

  if (!pitches) {
    return <BackdropComp />;
  }

  return (
    <Box sx={{ margin: "20px" }} style={{ display: "flex", flexWrap: "wrap" }}>
      {pitches
        .filter(
          (item) =>
            item.il === il &&
            (ilce === "0" ? true : item.ilce === ilce) &&
            item.type === tip
        )
        .map((item) => (
          <CardCom key={item.pitchId} {...item} />
        ))}
    </Box>
  );
}
