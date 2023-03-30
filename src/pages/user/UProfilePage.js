import { Button, Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/Context";

export default function ProfilePages() {
  const { logoutHandle } = useData();
  return (
    <Grid container>
      <Grid item justifyContent={"center"} flexGrow={"1"}>
        <Button
          component={NavLink}
          to="/"
          onClick={logoutHandle}
          variant="outlined"
          color="info"
        >
          çık
        </Button>
      </Grid>
    </Grid>
  );
}
